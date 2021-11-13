import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SocialNetwork from "./pages/SocialNetwork";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <h1>Week 7 - Challenge Weekend Red Social - Sergio</h1>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/SocialNetwork" element={<SocialNetwork />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
