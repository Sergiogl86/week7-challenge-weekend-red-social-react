import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const goHome = (event) => {
    navigate("/");
  };
  const goRegister = (event) => {
    navigate("/Register");
  };
  const goLogin = (event) => {
    navigate("/login");
  };
  const goLogout = (event) => {
    navigate("/logout");
  };
  const goSocial = (event) => {
    navigate("/SocialNetwork");
  };

  return (
    <>
      <nav className="navbar-dark bg-dark">
        <button type="button" className="btn btn-dark" onClick={goHome}>
          Home Page
        </button>
        {!user.autorizado && (
          <button type="button" className="btn btn-dark" onClick={goRegister}>
            Register
          </button>
        )}
        {!user.autorizado && (
          <button type="button" className="btn btn-dark" onClick={goLogin}>
            Login
          </button>
        )}
        {user.autorizado && (
          <button type="button" className="btn btn-dark" onClick={goLogout}>
            Logout
          </button>
        )}
        {user.autorizado && (
          <button type="button" className="btn btn-dark" onClick={goSocial}>
            Social Network
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
