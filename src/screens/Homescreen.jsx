import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import axios from "axios";
import { Logs } from "expo";
import ProductItem from "../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

const Homescreen = () => {
  // Logs.enableExpoCliLogging();
  const navigation = useNavigation();
  const list = [
    {
      id: "0",
      image:
        "https://m.media-amazon.com/images/I/513qXEW9uKL._AC_UF894,1000_QL80_.jpg",
      name: "Home",
    },
    {
      id: "1",
      image:
        "https://t4.ftcdn.net/jpg/00/87/20/47/360_F_87204794_w0Be1DErGJRGNKRBNx8Mlc7tlnhwTfQG.jpg",
      name: "Deals",
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg",
      name: "Handsfree",
    },
    {
      id: "3",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      name: "Mobiles",
    },
    {
      id: "3",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/musical-toy/e/e/z/i-square-enterprises-rc-band-original-imaefsz9zm9ufgzm.jpeg?q=90",
      name: "Music",
    },
    {
      id: "4",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/toothbrush-holder/c/q/f/1-deo22034-gift-corner-original-imagkgxuhmsgs6kn.jpeg?q=90",
      name: "Daily products",
    },
    {
      id: "5",
      image:
        "https://img.freepik.com/premium-vector/beauty-skincare-product-square-banner-social-media-vector-illustration_262376-154.jpg",
      name: "Beauty products",
    },
    {
      id: "6",
      image:
        "https://m.media-amazon.com/images/I/512JS8VsoGL._AC_UF1000,1000_QL80_.jpg",
      name: "Painting",
    },
  ];
  const images = [
    "https://m.media-amazon.com/images/I/512JS8VsoGL._AC_UF1000,1000_QL80_.jpg",
    "https://img.freepik.com/premium-vector/beauty-skincare-product-square-banner-social-media-vector-illustration_262376-154.jpg",
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/toothbrush-holder/c/q/f/1-deo22034-gift-corner-original-imagkgxuhmsgs6kn.jpeg?q=90",
  ];

  const deals = [
    {
      id: "0",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "1",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "2",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "3",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "4",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "5",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "6",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
  ];
  const offers = [
    {
      id: "0",
      offer: "72% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "1",

      offer: "65% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "2",
      offer: "80% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "3",
      offer: "60% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "4",
      offer: "70% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "5",
      offer: "40% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "6",
      offer: "65% off",
      title: "One Plus Nord CE Lite 5G Mobile",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      carouseImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/619HxtxhfqL._AC_UF1000,1000_QL80_.jpg",
      ],
      color: "Steller Green",
      size: "6 GB RAM 128GB Storage",
    },
  ];

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("jewelery");
  const [items, setItems] = useState([
    { label: "Mens's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response.data);
      } catch (error) {
        console.log("error message", error);
      }
    };
    fetchData();
  }, []);

  const onGenderOpen = useCallback(() => {});

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            padding: 10,
            backgroundColor: "#AFEEEE",
          }}
        >
          <Ionicons name="location-outline" size={24} color="black" />
          <Pressable>
            <Text style={{ fontSize: 13, fontWeight: "500" }}>
              Deliver to sujan - Banglore 560021
            </Text>
          </Pressable>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={{
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item?.image }}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "100",
                    marginTop: 50,
                    color: "black",
                  }}
                >
                  {item?.name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <SliderBox
          images={images}
          autoPlay
          circleLoop
          dotColor={"#13274F"}
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{
            width: "100%",
          }}
        />
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Trending Deals Of The Week
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {deals.map((item, index) => {
            return (
              <Pressable
                key={item?.id}
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  key={item?.id}
                  source={{ uri: item?.image }}
                  style={{ width: 180, height: 180, resizeMode: "contain" }}
                />
              </Pressable>
            );
          })}
        </View>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        ></Text>

        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Today's Deals
        </Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          {offers.map((item, index) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("ProductInfoscreen", {
                    id: item?.id,
                    offer: item?.offer,
                    title: item?.title,
                    oldPrice: item?.oldPrice,
                    price: item?.price,
                    image: item?.image,
                    carouseImages: item?.carouseImages,
                    color: item?.color,
                    size: item?.size,
                    item: item,
                  });
                }}
                key={item?.id}
                style={{
                  marginVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item?.image }}
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                />
                <View
                  style={{
                    backgroundColor: "#E31837",
                    paddingVertical: 5,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: "bold",
                    }}
                  >
                    Upto {item?.offer}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        ></Text>
        <View
          style={{
            marginHorizontal: 10,
            width: "45%",
            marginBottom: open ? 50 : 15,
          }}
        >
          <DropDownPicker
            style={{
              marginTop: 20,
              borderColor: "#B7B7B7",
              height: 30,
              marginBottom: open ? 120 : 15,
            }}
            open={open}
            value={category}
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            placeholder="choose category"
            placeholderStyle={styles.placeholderStyles}
            onOpen={onGenderOpen}
            //onChangeValue={onChange}
            zIndex={3000}
            zIndexInverse={1000}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {products
            ?.filter((item) => item.category === category)
            .map((item, index) => {
              return <ProductItem item={item} key={index} />;
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
