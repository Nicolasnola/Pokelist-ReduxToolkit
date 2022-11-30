import React from "react";
import { useEffect, useState } from "react";
import {
  HeaderArea,
  Header,
  SearchArea,
  SearchButton,
  Scroller,
  List,
  Container,
  ListArea,
} from "./style";
import Pokelist from "./pokeList";

import pokeApi from "../../service/api";
import axios from "axios";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (var i = 1; i < 70; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((results) => {
        setPokemon(results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  };

  const pokemonFilter = (name) => {
    let filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemon) {
      if (pokemon[i].data.name.includes(name)) {
        filteredPokemons.push(pokemon[i]);
      }
    }
    setPokemon(filteredPokemons);
  };

  return (
    <Container>
      <HeaderArea>
        <Header source={require("../../../assets/pokemonLogo.png")} />
        <SearchArea onPress={(e) => pokemonFilter(e.target.value)}>
          <SearchButton source={require("../../../assets/SearchButton.png")} />
        </SearchArea>
      </HeaderArea>

      <ListArea>
        {pokemon ? (
          <List
            data={pokemon}
            renderItem={({ item }) => {
              return (
                <Pokelist
                  name={item.data.name}
                  image={item.data.sprites.front_default}
                  types={item.data.types}
                />
              );
            }}
          />
        ) : (
          <Loading />
        )}
      </ListArea>
    </Container>
  );
}
