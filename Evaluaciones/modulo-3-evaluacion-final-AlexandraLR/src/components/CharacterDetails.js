import { Link } from "react-router-dom";

function CharacterDetails(props) {
  return (
    <section>
      <Link to="/">
        <button>Volver</button>
      </Link>
      <img
        className="card__img"
        src={props.user.image}
        alt={`foto de ${props.user.name}`}
        title={`foto de ${props.user.name}`}
      />
      <h4 className="card__name">{props.user.name}</h4>
      <ul>
        <li>Especie: {props.user.species}</li>
        <li>Status: {props.user.status} </li>
        <li>Origen: {props.user.origin}</li>
        <li>Ubicación: {props.user.location}</li>
        <li>Episodio: {props.user.episode}</li>
      </ul>
    </section>
  );
}

export default CharacterDetails;
