const { Router } = require("express");
const { getPokemon, formatPokemonData } = require("../utils/pokeAPI");

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  try {
    const pokemonData = await getPokemon(req.params.name);

    if (pokemonData.status === 404)
      return res.status(404).json({ message: "Pokemon not found" });

    const strippedPokemonData = formatPokemonData(pokemonData);
    res.json(strippedPokemonData);
  } catch (e) {
    console.log(e);
    res.json({ message: "Error ocurred", error: e.message });
  }
});

module.exports = pokemon;
