import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductInfoscreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const height = (width * 100) / 100;
  return (
    <ScrollView
      style={{ marginTop: 55, backgroundColor: "white", flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={24}
            color="black"
          />
          <TextInput placeholder="Search amazon.in" />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouseImages.map((item, index) => {
          return (
            <ImageBackground
              source={{ uri: item }}
              style={{ width, marginTop: 25, resizeMode: "contain", height }}
              key={index}
            >
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C60C30",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    {route.params.offer}
                  </Text>
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E0E0E0",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="share-variant"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#E0E0E0",
                  flexDirection: "row",
                  marginTop: "auto",
                  marginLeft: 20,
                  marginBottom: 20,
                }}
              >
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {route?.params?.title}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
          ₹{route?.params?.price}
        </Text>
      </View>
      <Text
        style={{ padding: 1, borderColor: "#E0E0E0", borderWidth: 1 }}
      ></Text>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Color:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.color}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Size:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.size}
        </Text>
      </View>
      <Text
        style={{ padding: 1, borderColor: "#E0E0E0", borderWidth: 1 }}
      ></Text>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
          Total : {route?.params?.price}
        </Text>
        <Text style={{ color: "#00CED1" }}>
          Free Delivery Tomorrow by 3 PM. Order within 10hrs 30 mins
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductInfoscreen;

const styles = StyleSheet.create({});
