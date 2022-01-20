import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Eat({
  title = "Explore Local Cuisines",
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: image,
            height: 125,
            width: "100%",
          }}
          style={{ position: "absolute", top: -50, left: 10 }}
        />
        <View
          style={{
            marginTop: 50,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 17,
              marginTop: 20,
              alignSelf: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 150,
    padding: 10,
    marginBottom: 10,
    marginTop: 50,
  },
  content: {
    backgroundColor: "#272727",
    elevation: 5,
    height: 150,
    padding: 10,
  },
});
