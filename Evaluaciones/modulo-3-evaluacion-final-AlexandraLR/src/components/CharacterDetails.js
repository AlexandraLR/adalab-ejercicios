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

// alien: <span class="iconify" data-icon="ri:aliens-fill"></span>;
// human: <span class="iconify" data-icon="raphael:smile"></span>;
// dead: <span class="iconify" data-icon="cil:face-dead"></span>;
// alive: <span class="iconify" data-icon="lucide:smile"></span>;
export default CharacterDetails;
