import axios from "axios";
import { addPokemons } from "../reducers/index";

export const allPokemons = () => {
  return (dispatch) => {
    let endpoints = [];
    for (var i = 1; i < 70; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((results) => dispatch(addPokemons(results)))
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  };
};
