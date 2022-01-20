import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Stay({
  onPress = () => {
    console.log("Visit Accommodation Pressed");
  },
}) {
  return (
    <View style={{ height: 400, width: "100%" }}>
      <Image
        source={{
          uri: "https://w0.peakpx.com/wallpaper/673/220/HD-wallpaper-dark-city-city-buildiongs-night-dark.jpg",
          height: 400,
          width: "100%",
        }}
      />
      <View
        style={{
          position: "absolute",
          //   backgroundColor: "red",
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 20 }}>
          Need a Place to Stay?
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              marginVertical: 50,
              alignItems: "flex-end",
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20 }}>
              PG: Paying Guest
            </Text>
            <Text style={{ color: "#FFF", fontSize: 20 }}>Hotels & Lodges</Text>
            <Text style={{ color: "#FFF", fontSize: 20 }}>Youth Hostels</Text>
            <Text style={{ color: "#FFF", fontSize: 20 }}>Guest Houses</Text>
            <Text style={{ color: "#FFF", fontSize: 20 }}>IRCTC Hotels</Text>
          </View>
          <Pressable
            onPress={onPress}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, marginRight: 10 }}>
              Visit Accomodation
            </Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
