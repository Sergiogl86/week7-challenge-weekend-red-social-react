import "./profilePage.css";
import { useEffect, useState } from "react";
import useMembers from "./../hooks/useMembers";

const ProfilePage = () => {
  const { members, getProfileUser, updateProfileUser } = useMembers();
  const [wrongCredentials, setWrongCredentials] = useState(false);

  useEffect(() => {
    getProfileUser();
  }, [getProfileUser]);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    age: "",
    bio: "",
    img: "",
  });

  useEffect(() => {
    if (members[0]) {
      setFormData({
        username: members[0].username,
        name: members[0].name,
        age: members[0].age,
        bio: members[0].bio,
        password: "",
        img: "",
      });
    }
  }, [members]);

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
    const response = await updateProfileUser(formData);
    if (!response) {
      setWrongCredentials(false);
    } else {
      setWrongCredentials(true);
    }
  };

  return (
    <>
      <h2>Profile Page</h2>
      {members[0] && (
        <div className="container registerPage">
          <div className="profile-updateImage">
            <img
              className="registerPage-image__size"
              src={members[0].image}
              alt={`Imageof ${members[0].username}`}
            />
          </div>
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
                  data-testid="profile-username"
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
                  data-testid="profile-name"
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
                  data-testid="profile-password"
                  type="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={changeData}
                  placeholder="Nueva contraseña"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Edad: </label>
                <input
                  data-testid="profile-age"
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
                  data-testid="profile-bio"
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
                  data-testid="profile-file"
                  type="file"
                  id="img"
                  className="form-control"
                  onChange={changeData}
                />
              </div>
              {wrongCredentials ? (
                <h5 className="credential-error m-3">Error al actualizar!</h5>
              ) : (
                ""
              )}
              <div className="form-group mt-3">
                <button
                  data-testid="profile-Registrar"
                  type="submit"
                  className="btn btn-dark"
                >
                  Modificar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
