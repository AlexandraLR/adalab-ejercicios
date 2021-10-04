import { Link } from "react-router-dom";

function CharacterDetails(props) {
  return (
    <section className="container__details">
      <div className="container__button">
        <Link to="/">
          <button className="button__details">Volver</button>
        </Link>
      </div>
      <img
        className="card__img"
        src={props.user.image}
        alt={`foto de ${props.user.name}`}
        title={`foto de ${props.user.name}`}
      />
      <h4 className="card__name">{props.user.name}</h4>
      <ul className="card__details">
        <li className="card__details">Especie: {props.user.species}</li>
        <li className="card__details">Status: {props.user.status} </li>
        <li className="card__details">Origen: {props.user.origin}</li>
        <li className="card__details">Ubicación: {props.user.location}</li>
        <li className="card__details">Episodio: {props.user.episode}</li>
      </ul>
    </section>
  );
}

// alien: <span class="iconify" data-icon="ri:aliens-fill"></span>;
// human: <span class="iconify" data-icon="raphael:smile"></span>;
// dead: <span class="iconify" data-icon="cil:face-dead"></span>;
// alive: <span class="iconify" data-icon="lucide:smile"></span>;
export default CharacterDetails;
