import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootPokemons from "./reducers";

export default configureStore({
  reducer: {
    pokemons: rootPokemons,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
});
