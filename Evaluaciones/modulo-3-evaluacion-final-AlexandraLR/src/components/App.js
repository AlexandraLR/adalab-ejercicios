import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getCharactersFromApi from "../services/RickAndMortyApi";
import CharacterList from "./CharacterList";
import CharacterItem from "./CharacterItem";
import Filters from "./Filters";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchStatus, setSearchStatus] = useState("all");

  useEffect(() => {
    getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, [searchName]);

  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };
  const handleChangeSearchStatus = (ev) => {
    setSearchStatus(ev.currentTarget.value);
  };

  const filteredData = data
    .filter((data) =>
      data.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter((data) => searchStatus === "all" || data.status === searchStatus);

  return (
    <>
      <h1 className="title--big">Rick and Morty</h1>
      {/* IMAGEN DE RICK Y MORTY */}

      <Switch>
        <Route path="/user/:id">
          <section>Aquí va el componente card sin hacer</section>
        </Route>

        <Route exact path="/">
          <div className="col2">
            {/* BÚSQUEDAS */}
            <section>
              <Filters
                searchName={searchName}
                searchStatus={searchStatus}
                handleChangeSearchName={handleChangeSearchName}
                handleChangeSearchStatus={handleChangeSearchStatus}
              />
            </section>
            {/* TARJETAS */}
            <section>
              <CharacterList
                data={filteredData}
                CharacterItem={CharacterItem}
              />
            </section>
          </div>
        </Route>

        <Route>
          <section>Ups, página errónea, paz entre los mundos!</section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
