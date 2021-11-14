import "./cardUser.css";

const CardUser = ({ member }) => {
  return (
    <>
      <li className="cardUser">
        <div className="cardUser__username">
          <h3 className="cardUser__name fs-4 fw-bold">{member.username}</h3>
          <div className="cardUser__buttons">
            <button type="button" className="btn btn-dark m-1">
              Amigo
            </button>
            <button type="button" className="btn btn-dark m-1">
              Enemigo
            </button>
          </div>
        </div>
        <div className="cardUser__info">
          <div className="cardUser__info-user">
            <h4 className="fs-5">{`Nombre: ${member.name}`}</h4>
            <h4 className="fs-6">{`Edad: ${member.age}`}</h4>
          </div>
          <div className="cardUser__info-image">
            <img
              className="cardUser__info-size"
              src={member.image}
              alt={`Imagen: ${member.name}`}
            />
          </div>
        </div>
        <div className="cardUser__bio">
          <h4 className="fs-6">Biografia:</h4>
          <p className="fst-italic">{member.bio}</p>
        </div>
      </li>
    </>
  );
};

export default CardUser;
