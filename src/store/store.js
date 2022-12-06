import { configureStore } from "@reduxjs/toolkit";
import rootPokemons from "./reducers";

export default configureStore({
  reducer: {
    pokemons: rootPokemons,
  },
});
