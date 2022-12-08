import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addPokemons = createAction("ADD-POKEMONS");
export const searchPokemons = createAction("SEARCH-POKEMONS");

export default createReducer(INITIAL_STATE, {
  [addPokemons.type]: (state, action) => [...action.payload],
  [searchPokemons.type]: (state, action) => [...state, action.payload],
});
