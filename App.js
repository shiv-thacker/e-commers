import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stacknavigator from "./src/navigation/Stacknavigator";

export default function App() {
  return (
    <>
      <Stacknavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
