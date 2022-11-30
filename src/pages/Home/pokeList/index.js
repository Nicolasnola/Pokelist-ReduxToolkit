import React from "react";
import {
  Area,
  Avatar,
  InfoArea,
  Title,
  InfoPoke,
  InfoPokeText,
} from "../style";

export default function Pokelist({ name, image, types }) {
  const typeHender = () => {
    if (types[1]) {
      return types[0].type.name + "  " + types[1].type.name;
    }
    return types[0].type.name;
  };
  return (
    <Area>
      <Avatar source={{ uri: image }} />
      <InfoArea>
        <Title>{name}</Title>
        <InfoPoke>
          <InfoPokeText>{typeHender()}</InfoPokeText>
        </InfoPoke>
      </InfoArea>
    </Area>
  );
}
