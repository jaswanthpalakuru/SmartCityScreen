import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ShopComponentShort({
  image = "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2020/01/Webp.net-resizeimage-29-1024x683.jpg",
  name = "Mobiles",
}) {
  return (
    <View style={styles.component}>
      <Image
        source={{
          uri: image,
          height: 100,
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
  component: {
    height: 120,
    // marginBottom: 10,
    marginTop: 10,
  },
});
