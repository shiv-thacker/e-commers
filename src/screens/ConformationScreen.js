import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { UserType } from "../../UserCOntext";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cleanCart } from "../../redux/CartReducer";
import RazorpayCheckout from "react-native-razorpay";

const ConformationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const steps = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
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
  const [selectedAddress, setSelectedAddress] = useState("");
  const [option, setOption] = useState(false);
  const [selectedOpiton, setSelectedOption] = useState("");

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: selectedAddress,
        paymentMethod: selectedOpiton,
      };

      const response = await axios.post(
        "http://192.168.0.101:8000/orders",
        orderData
      );

      if (response.status === 200) {
        navigation.navigate("OrderScreen");
        dispatch(cleanCart());
        console.log("order created successfully", response?.data?.order);
      } else {
        console.log("error creating order");
      }
    } catch (error) {
      console.log("error blah", error.message);
    }
  };
  const pay = async () => {
    try {
      const options = {
        description: "Credits towards consultation",
        image: "https://i.imgur.com/3g7nmJC.png",
        currency: "INR",
        key: "rzp_test_uX8jtCBs3TjeKn", // Your api key
        amount: "5000",
        name: "foo",
        prefill: {
          email: "void@razorpay.com",
          contact: "9191919191",
          name: "Razorpay Software",
        },
        theme: { color: "#F37254" },
      };
      const data = await RazorpayCheckout.open(options);
      console.log(data);

      const orderData = {
        userId: userId,
        cartItems: cart,
        totalPrice: total,
        shippingAddress: selectedAddress,
        paymentMethod: "card",
      };

      const response = await axios.post(
        "http://192.168.0.101:8000/orders",
        orderData
      );

      if (response.status === 200) {
        navigation.navigate("OrderScreen");
        dispatch(cleanCart());
        console.log("order created successfully", response?.data?.order);
      } else {
        console.log("error creating order");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {steps?.map((step, index) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {index > 0 && (
                  <View
                    style={[
                      { backgroundColor: "green", flex: 1, height: 2 },
                      index <= currentStep && { backgroundColor: "green" },
                    ]}
                  />
                )}
                <View
                  style={[
                    {
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#ccc",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    index <= currentStep && { backgroundColor: "green" },
                  ]}
                >
                  {index < currentStep ? (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      &#10003;
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {index + 1}
                    </Text>
                  )}
                </View>
                <Text style={{ textAlign: "center", marginTop: 8 }}>
                  {step.title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {currentStep === 0 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Select Delivery Address
          </Text>
          <Pressable>
            {addresses?.map((item, index) => {
              return (
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderColor: "#D0D0D0",
                    padding: 10,
                    flexDirection: "row",
                    gap: 5,
                    paddingBottom: 17,
                    marginVertical: 7,
                    alignItems: "center",
                    borderRadius: 6,
                  }}
                >
                  {selectedAddress && selectedAddress._id === item._id ? (
                    <FontAwesome5 name="dot-circle" size={20} color="#008897" />
                  ) : (
                    <Entypo
                      onPress={() => {
                        setSelectedAddress(item);
                      }}
                      name="circle"
                      size={20}
                      color="gray"
                    />
                  )}

                  <View style={{ marginLeft: 6 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {item?.name}
                      </Text>
                      <Entypo name="location-pin" size={20} color="red" />
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
                    <View>
                      {selectedAddress && selectedAddress._id === item._id && (
                        <Pressable
                          onPress={() => setCurrentStep(1)}
                          style={{
                            backgroundColor: "#008397",
                            padding: 10,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 10,
                          }}
                        >
                          <Text style={{ textAlign: "center", color: "white" }}>
                            Deliver to this address
                          </Text>
                        </Pressable>
                      )}
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </Pressable>
        </View>
      )}

      {currentStep === 1 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose your delivery options
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 8,
              gap: 7,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            {option ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008897" />
            ) : (
              <Entypo
                onPress={() => {
                  setOption(!option);
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}
            <Text style={{ flex: 1 }}>
              <Text style={{ color: "green", fontWeight: "500" }}>
                Tommorow by 10pm
              </Text>{" "}
              - FREE delivery with your Prime membership
            </Text>
          </View>
          <Pressable
            onPress={() => setCurrentStep(2)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep === 2 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Select Your Payment Method
          </Text>
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOpiton === "cash" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008897" />
            ) : (
              <Entypo
                onPress={() => {
                  setSelectedOption("cash");
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>Cash On Delivery</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 12,
            }}
          >
            {selectedOpiton === "card" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008897" />
            ) : (
              <Entypo
                onPress={() => {
                  setSelectedOption("card");
                  Alert.alert("UPI/Debit Card", "Pay Online", [
                    {
                      text: "Cancle",
                      onPress: () => console.log("Cancel is Required"),
                    },
                    {
                      text: "Ok",
                      onPress: () => pay(),
                    },
                  ]);
                }}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text>UPI / Credit or Debit Card</Text>
          </View>
          <Pressable
            onPress={() => setCurrentStep(3)}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep === 3 && selectedOpiton === "cash" && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
              </Text>
              <Text style={{ fontSize: 15, marginTop: 5 }}>
                Turn on auto deliveries
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text> Shipping to {selectedAddress?.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Items
              </Text>
              <Text style={{ color: "gray", fontSize: 16 }}>₹{total}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Delivery
              </Text>
              <Text style={{ color: "gray", fontSize: 16 }}>₹0</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Order Total
              </Text>
              <Text
                style={{
                  color: "#C60C30",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                ₹{total}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "gray" }}>Pay With</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 7 }}>
              Pay On Delivery (cash)
            </Text>
          </View>
          <Pressable
            onPress={handlePlaceOrder}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text>Place Your Order</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
};

export default ConformationScreen;

const styles = StyleSheet.create({});
