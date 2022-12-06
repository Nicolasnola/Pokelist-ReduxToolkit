import React from "react";
import { useEffect } from "react";
import {
  HeaderArea,
  Header,
  SearchArea,
  InputArea,
  SearchInput,
  SearchButton,
  List,
  Container,
  ListArea,
} from "./style";
import Pokelist from "./pokeList";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPokemons } from "../../store/reducers";

export default function Home() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(addPokemons());
  }, [pokemons, dispacth]);

  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   getPokemons();
  // }, []);

  // const getPokemons = () => {
  //   let endpoints = [];
  //   for (var i = 1; i < 70; i++) {
  //     endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  //   }

  //   axios
  //     .all(endpoints.map((endpoint) => axios.get(endpoint)))
  //     .then((results) => {
  //       setPokemon(results);
  //     })
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro : " + err);
  //     });
  // };

  // const pokemonFilter = (name) => {
  //   var filteredPokemons = [];
  //   console.log(pokemon[i]);
  //   // if (name === "") {
  //   //   getPokemons();
  //   // }
  //   for (var i in pokemon) {
  //     if (pokemon[i].data.name.includes(name)) {
  //       filteredPokemons.push(pokemon[i]);
  //     }
  //   }
  //   console.log(filteredPokemons);
  //   //setPokemon(filteredPokemons);
  // };

  return (
    <Container>
      <HeaderArea>
        <Header source={require("../../../assets/pokemonLogo.png")} />
        <InputArea>
          <SearchInput
            placeholder="Pesquisar"
            onChangeText={(e) => pokemonFilter(e.target.value)}
            placeholderTextColor="white"
          />
          <SearchArea>
            <SearchButton
              source={require("../../../assets/SearchButton.png")}
            />
          </SearchArea>
        </InputArea>
      </HeaderArea>

      <ListArea>
        {pokemons ? (
          <List
            data={pokemons}
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
