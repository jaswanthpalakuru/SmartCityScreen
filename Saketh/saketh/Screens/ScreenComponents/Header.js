import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Header({
  image = "https://www.divyadesam.com/hindu-articles/images/tirumala-tirupathi-hills.jpg",
}) {
  return (
    <View>
      <Image
        source={{
          uri: image,
          height: 300,
          width: "100%",
        }}
        style={{ borderRadius: 20 }}
      />
      <View
        style={{
          position: "absolute",
          padding: 10,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="reorder-three" size={24} color="white" />
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#FFF",
            paddingHorizontal: 10,
            borderRadius: 100,
            flexDirection: "row",
            paddingLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <Text>Tirupathi</Text>
          <Entypo name="chevron-down" size={20} color="green" />
        </View>
        <FontAwesome name="search" size={20} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
