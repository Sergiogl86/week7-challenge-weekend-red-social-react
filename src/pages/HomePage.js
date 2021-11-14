import "./homePage.css";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1>Red social de Sergio!!</h1>
        <h2>Skylab Coders Academy</h2>
        <a href="https://isdicoders.com/es">
          <img
            className="homepage-img-logo"
            src="https://isdicoders.com/images/50912/default.png"
            alt="Skylab Coders Academy Logo"
          />
        </a>
        <a href="https://isdicoders.com/es">
          <img
            className="homepage-img"
            src="https://lh5.googleusercontent.com/p/AF1QipMYqFS3X-VcyLsFgXD1gKQudvziPUmac88lQyQ=w1080-k-no"
            alt="Skylab Coders Academy"
          />
        </a>
      </div>
    </>
  );
};

export default HomePage;
