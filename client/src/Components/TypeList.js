import React from "react";
import photoArr from "../pokemonPhotos";
import "../App.css";

function TypeList({ pokemonList, onPokemonClick }) {
  return (
    <div className="pokemon-list-div">
      <ul>
        {pokemonList.map((pokemon, i) => {
          return (
            <li
              key={`pokemon: ${i}`}
              onClick={() => {
                onPokemonClick(pokemon.name);
              }}
            >
              {pokemon.name}
              <img
                src={photoArr.find((obj) => obj.name === pokemon.name).image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TypeList;
