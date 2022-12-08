import styled from "styled-components/native";

export const HeaderArea = styled.View`
  // background-color: white;
  margin-top: 130px;

  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  //padding-right: 100%;
  //padding-left: 100%;
  //padding-bottom: 20px;
`;

export const Header = styled.Image`
  margin-top: 90px;
  width: 230px;
  height: 80px;
  object-fit: contain;
`;
export const SearchArea = styled.TouchableOpacity``;
export const SearchButton = styled.Image`
  /* width: 26px;
  height: 26px;
  margin-left: 10px;
  margin-top: 10px;
  position: "absolute";
  left: 30;
  top: 12; */
`;
export const InputArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
  margin-left: 6%;
  margin-right: 6%;
`;
export const SearchInput = styled.TextInput`
  background-color: #273746;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20 px;
  padding: 12px;
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const List = styled.FlatList``;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #17202a;
`;

export const ListArea = styled.View`
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 3%;
  margin-bottom: 45%;
`;

export const Area = styled.TouchableOpacity`
  background-color: #273746;
  margin-bottom: 20px;
  padding-left: 220px;
  padding-right: 220px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 20px;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background-color: #ffffff;
  align-items: center;
`;

export const InfoArea = styled.View`
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
  align-items: center;
`;

export const InfoPoke = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #2ecc71;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const InfoPokeText = styled.Text`
  font-size: 14px;
  color: #2ecc71;
  margin-bottom: 5px;
  align-items: center;
`;
