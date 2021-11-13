import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

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
    navigate("/");
  };
  const goSocial = (event) => {
    navigate("/SocialNetwork");
  };

  return (
    <>
      <nav className="navbar-dark bg-dark">
        <button type="button" class="btn btn-dark" onClick={goHome}>
          Home Page
        </button>
        <button type="button" class="btn btn-dark" onClick={goRegister}>
          Register
        </button>
        <button type="button" class="btn btn-dark" onClick={goLogin}>
          Login
        </button>
        <button type="button" class="btn btn-dark" onClick={goLogout}>
          Logout
        </button>
        <button type="button" class="btn btn-dark" onClick={goSocial}>
          Social Network
        </button>
      </nav>
    </>
  );
};

export default Navbar;
