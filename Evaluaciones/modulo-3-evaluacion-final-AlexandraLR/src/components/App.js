import { useState, useEffect } from 'react';
import getCharactersFromApi from '../services/RickAndMortyApi';
import CharacterList from './CharacterList';
import CharacterItem from './CharacterItem';
// import Filters from './Filters';

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('all');


  useEffect(() => {
    getCharactersFromApi().then(initialData => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  }
  const handleChangeSearchStatus = (ev) => {
    setSearchStatus(ev.currentTarget.value);
  }
  
  const filteredData = data
    .filter((data) => data.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
    .filter ((data) => searchStatus === 'all' || data.status === searchStatus
  );

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
          value={searchName}
          onChange={handleChangeSearchName}
        />
        {/* FILTRO */}
        <label className='filter__species' htmlFor='species'>Busca por status</label>
        <select className="select__filter" value={searchStatus}
          onChange={handleChangeSearchStatus}>
        <option value="all">Todos</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
        </select>
        {/* Cards */}
        <CharacterList data={filteredData} CharacterItem={CharacterItem} />
      </div>
    </>
  );
}

export default App;

