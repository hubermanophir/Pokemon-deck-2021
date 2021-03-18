const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const getPokemon = async (name) => {
  try {
    const { data } = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);
    return data;
  } catch (error) {
    if (error.response && error.response.status) return error.response;
    throw error;
  }
};

const getType = async (name) => {
  try {
    const { data } = await axios.get(`${POKEAPI_BASE_URL}/type/${name}`);
    return data;
  } catch (error) {
    if (error.response && error.response.status) return error.response;
    throw error;
  }
};

const formatPokemonData = ({
  name,
  id,
  height,
  weight,
  types,
  sprites: { back_default, front_default },
}) => ({
  name,
  id,
  height,
  weight,
  types: types.map(({ type: { name } }) => name),
  sprites: { back_default, front_default },
});

const formatTypeData = ({ id, name, pokemon }) => ({
  id,
  name,
  pokemons: pokemon.map(({ pokemon }) => pokemon),
});

module.exports = { getPokemon, formatPokemonData, getType, formatTypeData };
