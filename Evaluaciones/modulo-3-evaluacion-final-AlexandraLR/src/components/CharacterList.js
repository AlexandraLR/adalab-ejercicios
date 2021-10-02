import CharacterItem from './CharacterItem'

function CharacterList(props) {
    console.log('Character List', props);
    const html = props.data.map((data, index) => (
        <li className='card' >
            <CharacterItem data={data} />
        </li>
    ));
    
    return (
    <ul className='cards'>
        {html}
    </ul>
);
}

export default CharacterList;