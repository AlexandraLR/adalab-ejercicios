function getCharactersFromApi() {
  return fetch(`https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json`)
  .then(response => response.json())
  .then(json => {

    return json.results.map(data => {
      return {       
        id: data.id,
        name: data.name,
        photo: data.image,
        species: data.species,
        status: data.status,
      };
    })

  });
}


export default getCharactersFromApi;