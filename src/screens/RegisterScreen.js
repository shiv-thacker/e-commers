import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://purepng.com/public/uploads/large/amazon-logo-s3f.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marinTop: 12,
              color: "#041E42",
            }}
          >
            Register to your account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              name="person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="enter your name"
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your email"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="enter your password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>
        <View style={{ marginTop: 80 }} />
        <Pressable
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an account? SIgn In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});