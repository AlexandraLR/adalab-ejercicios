import CharacterItem from './CharacterItem'

function CharacterList(props) {
    console.log('Character List', props);
    const html = props.data.map((cardData, index) => (
        <li className='card' >
            <CharacterItem cardData={cardData} />
        </li>
    ));
    
    return (
    <ul className='cards'>
        {html}
    </ul>
);
}

export default CharacterList;