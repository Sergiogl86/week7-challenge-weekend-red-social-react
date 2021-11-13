import "./logoutPage.css";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router";

const LogoutPage = () => {
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();

  const onSubmitLogout = (event) => {
    event.preventDefault();
    logoutUser();
    navigate("/login");
  };
  return (
    <>
      <h2>Logout</h2>
      <div className="container logoutPage">
        <div className="list-group-item">
          <h2 className="list-group-item list-group-item-dark">{`Hola ${user.user.username}`}</h2>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onSubmitLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoutPage;
