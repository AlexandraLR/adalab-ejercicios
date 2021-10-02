function CharacterItem(props) {
    console.log('Character Item', props);
    return (
        <a href=''>
        <img className='card__img'
                src=''
                alt=''
                title='' />
        <h4 className='card__title'>Morty</h4>
        <p className='card__name'></p>
        <p className='card__species'></p>             
    </a>

    );
}

export default CharacterItem;