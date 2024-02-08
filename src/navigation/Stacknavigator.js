import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginscreen from "../screens/Loginscreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../screens/Homescreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProductInfoscreen from "../screens/ProductInfoscreen";
import AddAddressScreen from "../screens/AddAddressScreen";
import AddressScreen from "../screens/AddressScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stacknavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Homescreen"
          component={Homescreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profilescreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Cartscreen"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loginscreen"
          component={Loginscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductInfoscreen"
          component={ProductInfoscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddAddressScreen"
          component={AddAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddressScreen"
          component={AddressScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigator;

const styles = StyleSheet.create({});
