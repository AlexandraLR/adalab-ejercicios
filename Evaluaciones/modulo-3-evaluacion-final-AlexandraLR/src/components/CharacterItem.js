import { Link } from "react-router-dom";

function CharacterItem(props) {
  return (
    <Link to={`./user/${props.data.id}`}>
      <img
        className="card__img"
        src={props.data.image}
        alt={`foto de ${props.data.name}`}
        title={`foto de ${props.data.name}`}
      />
      <h4 className="card__name">{props.data.name}</h4>
      <p className="card__species">{props.data.species}</p>
    </Link>
  );
}

export default CharacterItem;
