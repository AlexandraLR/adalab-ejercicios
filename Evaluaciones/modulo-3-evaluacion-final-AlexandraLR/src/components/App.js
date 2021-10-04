import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import getCharactersFromApi from "../services/RickAndMortyApi";
import CharacterList from "./CharacterList";
import CharacterItem from "./CharacterItem";
import CharacterDetails from "./CharacterDetails";
import Filters from "./Filters";
import "../stylesheets/main.scss";
import logo from "../images/LetrasRickYMortyConFirmaYPortal(másresplandor) (1) (2).gif";

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
      <img
        class="image_title"
        title="RickAndMortypedia"
        src={logo}
        alt="RickAndMortypedia"
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

      <footer className="footer">
        <h4>Leyenda de símbolos</h4>
        <p>
          Alive:
          <span
            className="iconify"
            data-icon="lucide:smile"
            id="alive-icon"
          ></span>
          Dead:
          <span
            className="iconify"
            data-icon="cil:face-dead"
            id="dead-icon"
          ></span>
          Human:
          <span
            className="iconify"
            data-icon="raphael:smile"
            id="human-icon"
          ></span>
          Alien:
          <span
            class="iconify"
            data-icon="ri:aliens-fill"
            id="alien-icon"
          ></span>
        </p>
      </footer>
    </div>
  );
}

export default App;
