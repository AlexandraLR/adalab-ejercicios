function CharacterItem(props) {
    console.log('Character Item', props);
    return (
        <>
        <img className='card__img'
                src={props.cardData.photo}
                alt={`foto de ${props.cardData.name}`}
                title={`foto de ${props.cardData.name}`} />
        <h4 className='card__name'>{props.cardData.name}</h4>
        <p className='card__species'>{props.cardData.species}</p>
        </>
    );
}

export default CharacterItem;