import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Places({
  name = "Must Visit Places in City",
  image = "https://cms.tstdc.in/fetch?payload=bb6c033a-b0f4-4584-8c2c-609ffc116839.jpg",
}) {
  return (
    <View
      style={{
        backgroundColor: "#272727",
        paddingVertical: 10,
        flexDirection: "row",
        // marginBottom: 50,
        marginTop: 50,
      }}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <Image
          source={{
            uri: image,
            height: 100,
            width: "100%",
          }}
          style={{
            position: "absolute",
            marginHorizontal: 10,
            marginTop: -50,
          }}
        />
      </View>
      <View style={{ flex: 1, padding: 5 }}>
        <Text style={styles.text}> {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
  },
});
