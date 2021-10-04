function Filters(props) {
  return (
    <form>
      {/* BUSCADOR */}
      <input
        className="search__character"
        type="text"
        name="search"
        id="search"
        placeholder="Encuentra a tu personaje"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
      {/* FILTRO STATUS*/}
      <label className="filter__status" htmlFor="status">
        Busca por status
      </label>
      <select
        className="select__filter"
        value={props.searchStatus}
        onChange={props.handleChangeSearchStatus}
      >
        <option value="all">Todos</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
    </form>
  );
}
export default Filters;
