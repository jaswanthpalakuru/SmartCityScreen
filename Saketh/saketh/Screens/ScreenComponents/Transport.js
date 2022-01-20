import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Transport({
  image = "https://qph.fs.quoracdn.net/main-qimg-560df5445e5a9cc9a5be42cab7d64eed",
  style = { borderTopRadius: 20 },
  name = "Cab or Taxi",
}) {
  return (
    <View
      style={[
        style,
        {
          width: "50%",
          padding: 10,
          overflow: "hidden",
        },
      ]}
    >
      <Image
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        source={{
          uri: image,
          height: 100,
          width: "100%",
        }}
      />
      <Text style={{ color: "#FFF", textAlign: "center" }}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
