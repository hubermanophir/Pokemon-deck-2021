import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import axios from "axios";
import Pokemon from "./Pokemon";
import TypeList from "./TypeList";
import Collection from "./Collection";

const BASE_URL = "/api";

function Main() {
  const [pokemon, setPokemon] = useState({
    name: "",
    height: "",
    weight: "",
    types: [],
    sprites: {
      back_default: "",
      front_default: "",
    },
  });
  const [userInput, setUserInput] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [type, setType] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [collection, setCollection] = useState([]);
  const [showCollection, setShowCollection] = useState(false);
  const [isError, setIsError] = useState(false);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    (async function getData() {
      try {
        const res = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
        setIsError(false);
        setPokemon(res.data);
      } catch (error) {
        setIsError(true);
      }
    })();
  }, [pokemonName]);

  useEffect(() => {
    (async function getTypeData() {
      const res = await axios.get(`${BASE_URL}/type/${type}`);
      console.log(res);
      setPokemonList(res.data.pokemons);
    })();
  }, [type]);

  const clickHandler = () => {
    resetData();
  };

  const checkIfCollection = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/collection/status/${id}`);
      if (res.data.status === "caught") {
        return true;
      } else return false;
    } catch (error) {
      console.log(error);
    }
  };

  const resetData = async (name = undefined) => {
    setPokemonName(name ? name : userInput);
    setPokemonList([]);
    setType("");
  };

  const showCollectionButton = async () => {
    const res = await axios.get(`${BASE_URL}/collection`);
    setCollection(res.data);
    setShowCollection(!showCollection);
  };

  return (
    <div className="main-div">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.toLowerCase())}
      ></input>
      <button className="search-button" onClick={clickHandler}>
        🔍
      </button>
      <button className="collection-button" onClick={showCollectionButton}>
        {`${showCollection ? "Hide" : "Show"} Collection`}
      </button>
      {isError ? <div>Pokemon not found</div> : null}
      <div className="info-div">
        <Pokemon
          pokemon={pokemon}
          setType={setType}
          checkIfCollection={checkIfCollection}
          setCollection={setCollection}
        />
        {showCollection ? <Collection collection={collection} /> : null}
      </div>
      <TypeList pokemonList={pokemonList} onPokemonClick={resetData} />
    </div>
  );
}

export default Main;
