import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MovieCard({
  image = "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2021/01/01/Telugu-Movies-2021-New-Year-and-Announcement-HD-Posters-3.jpg?quality=80&zoom=1&ssl=1",
  name = "Movie Name",
}) {
  return (
    <View style={{ paddingRight: 10 }}>
      <Image
        source={{
          uri: image,
          height: 150,
          width: 100,
        }}
        //   style={{ position: "absolute", top: -50, left: 10 }}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
