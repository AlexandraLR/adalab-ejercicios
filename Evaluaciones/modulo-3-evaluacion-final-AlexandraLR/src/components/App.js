import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import getCharactersFromApi from "../services/RickAndMortyApi";
import CharacterList from "./CharacterList";
import CharacterItem from "./CharacterItem";
import CharacterDetails from "./CharacterDetails";
import Filters from "./Filters";
import "../stylesheets/main.scss";

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
    ev.preventDefault();
    setSearchName(ev.currentTarget.value);
  };
  const handleChangeSearchStatus = (ev) => {
    ev.preventDefault();
    setSearchStatus(ev.currentTarget.value);
  };

  const routeData = useRouteMatch("/user/:id");

  const characterId = routeData !== null ? routeData.params.id : "";
  const selectedCharacter = data.find(
    (data) => data.id === parseInt(characterId)
  );

  const filteredData = data
    .filter((data) =>
      data.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter((data) => searchStatus === "all" || data.status === searchStatus);

  return (
    <div className="allpage">
      <h1 className="title--big">Rick and Morty</h1>
      <img
        className="title_img"
        src=""
        alt="RickANDMortypedia"
        title="RickANDMortypedia"
      />
      {/* IMAGEN DE RICK Y MORTY */}

      <Switch>
        {/* RUTA DE LAS TARJETAS */}
        <Route path="/user/:id">
          <CharacterDetails data={filteredData} user={selectedCharacter} />
        </Route>
        {/* RUTA DE PÁGINA PRINCIPAL */}
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
        {/* RUTA DE PÁGINA ERRÓNEA */}
        <Route>
          <section>Ups, página errónea, paz entre los mundos!</section>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
