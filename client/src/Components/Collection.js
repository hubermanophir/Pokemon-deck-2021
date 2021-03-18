import React from "react";

function Collection({ collection }) {
  return (
    <div>
      <ul>
        {collection.map((pokemon, i) => {
          return <li key={`pokemonCollection: ${i}`}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Collection;
