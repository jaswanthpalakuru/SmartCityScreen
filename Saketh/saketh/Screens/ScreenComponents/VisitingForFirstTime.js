import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function VisitingForFirstTime({
  nav,
  onPress = () => {
    console.log(nav + " pressed");
  },
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 17, marginRight: 10 }}>
        {nav}
      </Text>
      <AntDesign name="arrowright" size={20} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
