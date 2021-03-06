import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const BASE_URL = "/api";

function Pokemon({ pokemon, setType, checkIfCollection, setCollection }) {
  const [isCatch, setIsCatch] = useState(false);

  useEffect(async () => {
    if (await checkIfCollection(pokemon.id)) {
      setIsCatch(true);
    } else {
      setIsCatch(false);
    }
  }, [pokemon]);

  useEffect(async () => {
    if (!isCatch || (await checkIfCollection(pokemon.id))) {
      return;
    }
    (async function postPokemon() {
      try {
        await axios.post(`${BASE_URL}/collection/catch`, pokemon);
        const res = await axios.get(`${BASE_URL}/collection`);
        setCollection(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [isCatch]);

  useEffect(() => {
    if (isCatch) {
      return;
    }
    (async function postPokemon() {
      try {
        await axios.delete(`${BASE_URL}/collection/release/${pokemon.id}`);
        const res = await axios.get(`${BASE_URL}/collection`);
        setCollection(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [isCatch]);

  return (
    <div className="pokemon-div">
      <ul>
        <li>Name: {pokemon.name}</li>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>
          Types:{" "}
          {pokemon.types.map((type, i) => {
            return (
              <span
                key={`typeKey: ${i}`}
                onClick={() => {
                  setType(type);
                }}
              >
                {type}{" "}
              </span>
            );
          })}
        </li>
      </ul>
      <div className="img-button-div">
        <img
          onMouseOut={(e) =>
            (e.currentTarget.src = `${pokemon.sprites.front_default}`)
          }
          onMouseOver={(e) =>
            (e.currentTarget.src = `${pokemon.sprites.back_default}`)
          }
          src={pokemon.sprites.front_default}
        />
        {pokemon.name ? (
          <button
            onClick={() => {
              setIsCatch(!isCatch);
            }}
          >
            {isCatch ? `Release` : `Catch`}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Pokemon;
