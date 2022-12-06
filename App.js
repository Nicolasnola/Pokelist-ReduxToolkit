import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";
import store from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
