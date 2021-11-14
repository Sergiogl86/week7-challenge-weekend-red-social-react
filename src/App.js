import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SocialNetwork from "./pages/SocialNetwork";
import HomePage from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";
import useUser from "./hooks/useUser";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { user, checkToken } = useUser();

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <>
      <h1>Week 7 - Challenge Weekend Red Social - Sergio</h1>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          {user.autorizado && (
            <Route path="/Profile" element={<ProfilePage />} />
          )}
          {!user.autorizado && <Route path="/login" element={<LoginPage />} />}
          {user.autorizado && <Route path="/logout" element={<LogoutPage />} />}
          {!user.autorizado && (
            <Route path="/Register" element={<RegisterPage />} />
          )}
          {user.autorizado && (
            <Route path="/SocialNetwork" element={<SocialNetwork />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
