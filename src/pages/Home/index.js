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

import { useDispatch, useSelector } from "react-redux";
import { allPokemons } from "../../store/api";

export default function Home() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPokemons());
  }, []);

  //-----------------------------------------//

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
