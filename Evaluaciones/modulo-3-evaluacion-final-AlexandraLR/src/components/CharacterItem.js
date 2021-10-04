import { Link } from "react-router-dom";

function CharacterItem(props) {
  return (
    <Link to={`./user/${props.data.id}`}>
      <div className="container__card">
        <img
          className="card__img"
          src={props.data.image}
          alt={`foto de ${props.data.name}`}
          title={`foto de ${props.data.name}`}
        />
        <h4 className="card__name">{props.data.name}</h4>
        <p className="card__species">{props.data.species}</p>
      </div>
    </Link>
  );
}

export default CharacterItem;
