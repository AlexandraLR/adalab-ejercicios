import { Link } from "react-router-dom";

function CharacterDetails(props) {
  return (
    <section>
      <div className="container__button-one">
        <Link to="/" className="container__button">
          <i class="fas fa-arrow-left"></i>
        </Link>
      </div>
      <div className="container__details">
        <img
          className="card__img"
          src={props.user.image}
          alt={`foto de ${props.user.name}`}
          title={`foto de ${props.user.name}`}
        />
        <div className="container__text--detail">
          <h4 className="card__name">{props.user.name}</h4>
          <ul className="card__details">
            <li className="card__details">
              Especie:{" "}
              {props.user.species === "Human" ? (
                <i class="fas fa-user-astronaut" id="human-icon-detail"></i>
              ) : (
                <span
                  className="iconify"
                  data-icon="ri:aliens-fill"
                  id="alien-icon-detail"
                ></span>
              )}{" "}
            </li>
            <li className="card__details">
              Status:{" "}
              {props.user.status === "Alive" ? (
                <span
                  className="iconify"
                  data-icon="lucide:smile"
                  id="alive-icon-detail"
                >
                  {" "}
                </span>
              ) : (
                <span
                  className="iconify"
                  data-icon="cil:face-dead"
                  id="dead-icon-detail"
                ></span>
              )}
            </li>
            <li className="card__details">Origen: {props.user.origin}</li>
            <li className="card__details">Ubicación: {props.user.location}</li>
            <li className="card__details">Episodio: {props.user.episode}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetails;
