import styled from "styled-components/native";

export const HeaderArea = styled.View`
  // background-color: white;
  margin-top: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //padding-right: 100%;
  //padding-left: 100%;
  //padding-bottom: 20px;
`;

export const Header = styled.Image`
  margin-top: 50px;
  margin-left: 50px;
  width: 230px;
  height: 80px;
  object-fit: contain;
`;
export const SearchArea = styled.TouchableOpacity``;
export const SearchButton = styled.Image`
  width: 26px;
  height: 26px;
  margin-top: 65px;
  margin-left: 35px;
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
  margin-top: 30px;
  margin-bottom: 140px;

  //background-color: white;
`;

export const Area = styled.TouchableOpacity`
  background-color: #273746;
  margin-bottom: 20px;
  padding-left: 200px;
  padding-right: 200px;

  border-radius: 20px;
  padding: 10px;

  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: #ffffff;
  //padding: 10px;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  margin-top: 5px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;

export const InfoPoke = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #2ecc71;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoPokeText = styled.Text`
  font-size: 14px;
  color: #2ecc71;
  margin-bottom: 5px;
  //align-items: center;
`;
