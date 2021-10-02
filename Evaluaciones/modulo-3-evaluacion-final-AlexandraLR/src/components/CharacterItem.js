function CharacterItem(props) {
    console.log('Character Item', props);
    return (
        <>
        <img className='card__img'
                src={props.data.photo}
                alt={`foto de ${props.data.name}`}
                title={`foto de ${props.data.name}`} />
        <h4 className='card__name'>{props.data.name}</h4>
        <p className='card__species'>{props.data.species}</p>
        </>
    );
}

export default CharacterItem;