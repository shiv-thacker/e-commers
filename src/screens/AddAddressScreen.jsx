import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../../UserCOntext";
import { Entypo } from "@expo/vector-icons";
// import Header from "../Common/Header";

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  useEffect(() => {
    fetchaddresses();
  }, []);

  const fetchaddresses = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.101:8000/addresses/${userId}`
      );

      const { addresses } = response.data;

      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };

  //refresh the addresses when the component comes into the focus is basically when we navigate back

  useFocusEffect(
    useCallback(() => {
      fetchaddresses();
    }, [])
  );
  console.log("addresses", addresses);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Header /> */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>
        <Pressable
          onPress={() => navigation.navigate("AddressScreen")}
          style={{
            marginTop: 10,
            borderColor: "#D0D0D",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}
        >
          <Text>Add a New Address</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>
        {/* all the added addresses */}
        <Pressable>
          {addresses?.map((item, index) => {
            return (
              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: "#D0D0D0",
                  padding: 10,
                  flexDirection: "column",
                  gap: 5,
                  marginVertical: 10,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item?.name}
                  </Text>
                  <Entypo name="location-pin" size={24} color="red" />
                </View>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.houseNo}, {item?.landmark}
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.streeet}
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  India, Rajkot
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  phone no: {item?.mobileNo}
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  pin code: {item?.postalCode}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 7,
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.5,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Edit</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.5,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Remove</Text>
                  </Pressable>
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.5,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Set as Default</Text>
                  </Pressable>
                </View>
              </Pressable>
            );
          })}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  headerbackground: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
});
