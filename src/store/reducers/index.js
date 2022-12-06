import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addPokemons = createAction("ADD-POKEMONS");

export default createReducer(INITIAL_STATE, {
  [addPokemons.type]: (state, action) => [...action.payload],
});
