import React from "react";
import { useEffect, useState } from "react";
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
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(pokemons);

  useEffect(() => {
    if (searchText === " ") {
      setList(pokemons);
    } else {
      setList(
        pokemons.filter((item) => {
          if (item.data.name.indexOf(searchText) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText]);

  return (
    <Container>
      <HeaderArea>
        <Header source={require("../../../assets/pokemonLogo.png")} />
        <InputArea>
          <SearchInput
            placeholder="Pesquisar"
            placeholderTextColor="#808B96"
            value={searchText}
            autoCapitalize="none"
            onChangeText={(e) => setSearchText(e)}
          />
          {/* <SearchButton source={require("../../../assets/SearchButton.png")} /> */}
          <SearchArea></SearchArea>
        </InputArea>
      </HeaderArea>

      <ListArea>
        {list ? (
          <List
            data={list}
            numColumns={2}
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
