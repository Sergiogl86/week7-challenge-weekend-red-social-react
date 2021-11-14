import "./loginPage.css";
import { useState } from "react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const [wrongCredentials, setWrongCredentials] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser(formData);
    if (!response) {
      navigate("/logout");
    } else {
      setWrongCredentials(true);
    }
  };

  return (
    <>
      <h2>LoginPage</h2>
      <div className="container loginPage">
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
                data-testid="login-username"
                type="text"
                id="username"
                className="form-control"
                value={formData.username}
                onChange={changeData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña: </label>
              <input
                data-testid="login-password"
                type="password"
                id="password"
                className="form-control"
                value={formData.password}
                onChange={changeData}
              />
            </div>
            {wrongCredentials ? (
              <h5 className="credential-error m-3">
                Usuario o contraseña erroneos!
              </h5>
            ) : (
              ""
            )}
            <div className="form-group mt-3">
              <button
                data-testid="login-Entrar"
                type="submit"
                className="btn btn-dark"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
