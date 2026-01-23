

const getPokemonById = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url).then(resp => resp.json())
        .then(() => { throw new Error('Este es un error de prueba') })
        .then((pokemon) => pokemon.name)
        .finally(() => console.log('Se terminó la petición'));
};



module.exports = getPokemonById;