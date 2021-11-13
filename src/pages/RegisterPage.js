import "./registerPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../hooks/useUser";

const RegisterPage = () => {
  const { registerUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    age: "",
    bio: "",
    img: "",
  });

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    debugger;
    registerUser(formData);
    navigate("/login");
  };

  return (
    <>
      <h2>RegisterPage</h2>
      <div className="container registerPage">
        <div className="row">
          <form
            className="col"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <div className="form-group">
              <label htmlFor="username">Nombre Usuario: </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={formData.username}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre: </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña: </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={formData.password}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Edad: </label>
              <input
                type="number"
                id="age"
                className="form-control"
                value={formData.age}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Algo sobre ti?: </label>
              <textarea
                type="text"
                id="bio"
                className="form-control"
                value={formData.bio}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="img">Foto: </label>
              <input
                type="file"
                id="img"
                className="form-control"
                onChange={changeData}
              />
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-dark">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
