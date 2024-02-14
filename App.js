import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stacknavigator from "./src/navigation/Stacknavigator";
import { Provider } from "react-redux";
import Store from "./Store";
import { ModalPortal } from "react-native-modals";
import { UserContext } from "./UserCOntext";

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <UserContext>
          <Stacknavigator />
          <ModalPortal />
        </UserContext>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
