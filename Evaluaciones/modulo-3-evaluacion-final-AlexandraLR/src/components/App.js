import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/RickAndMortyApi';
import CharacterList from './CharacterList';
import CharacterItem from './CharacterItem';
// import Filters from './Filters';

function App() {
  const [data, setData] = useState([]);
  // const [searchName, setSearchName] = useState('');
  // const [searchGender, setSearchGender] = useState('all');

  useEffect(() => {
    getCharactersFromApi().then(initialData => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);



  return (
    <>
      <h1 className='title--big'>Rick and Morty</h1>
      {/* IMAGEN DE RICK Y MORTY */}
      <div className='col2'>
        {/* BUSCADOR */}
          <input
            className="search__character"
            type="text"
            name="search"
            id="search"
            placeholder="Encuentra a tu personaje"
        />
        {/* FILTRO */}
        {/* <select className="select__clubs">
          <option value="all" selected>Todos</option>
          <option value="onWeekdays">los que abren entre semana</option>
          <option value="onWeekends">los que abren el fin de semana</option>
        </select> */}
        {/* Cards */}
        <CharacterList data={data}/>
      </div>
    </>
  );
}

export default App;

