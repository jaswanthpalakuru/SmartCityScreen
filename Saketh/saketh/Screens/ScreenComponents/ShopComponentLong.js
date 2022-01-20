import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ShopComponentLong({
  style,
  name = "Fashion",
  image = "https://st2.depositphotos.com/1177973/5688/i/950/depositphotos_56884997-stock-photo-essentials-fashion-woman-objects.jpg",
}) {
  return (
    <View style={[style, styles.container]}>
      <Image
        source={{
          uri: image,
          height: 225,
          width: "100%",
        }}
        //   style={{ position: "absolute", top: -50, left: 10 }}
      />
      <View
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#FFF",
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    // flex: 1,
    // padding: 10,
    height: 250,
    marginVertical: 10,
    marginRight: 10,
  },
});
