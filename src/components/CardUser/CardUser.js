import "./cardUser.css";

const CardUser = () => {
  return (
    <>
      <div className="cardUser">
        <div className="cardUser__username">
          <h2 className="fs-3">Goku</h2>
        </div>
        <div className="cardUser__info">
          <div className="cardUser__info-user">
            <h3 className="fs-5">Nombre: Son Goku</h3>
            <h3 className="fs-6">Edad: 100</h3>
          </div>
          <div className="cardUser__info-image">
            <img
              className="cardUser__info-size"
              src="https://storage.googleapis.com/skylab-sergio-red-social-api.appspot.com/API_Sergio-goku-1636837883802-.jpg"
              alt="Goku-profile"
            />
          </div>
        </div>
        <div className="cardUser__bio">
          <h3 className="fs-6">Biografia:</h3>
          <p className="fs-6">
            Son Goku es un personaje ficticio, protagonista de la serie de manga
            y anime Dragon Ball.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardUser;
