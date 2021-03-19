import React from "react";
import photoArr from "../pokemonPhotos";

function Collection({ collection }) {
  return (
    <div className="collection-div">
      <h1>Collection list</h1>
      <ul>
        {collection.map((pokemon, i) => {
          return (
            <li key={`pokemonCollection: ${i}`}>
              <img
                src={photoArr.find((obj) => obj.name === pokemon.name).image}
              />
              {pokemon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Collection;
