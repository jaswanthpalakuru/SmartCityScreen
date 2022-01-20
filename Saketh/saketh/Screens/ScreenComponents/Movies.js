import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MovieCard from "./MovieCard";
import { AntDesign } from "@expo/vector-icons";

export default function Movies({
  onPress = () => {
    console.log("Movies Pressed");
  },
  nav = "Visit Movie Theatre",
}) {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 5 }}>
        Movies Now Playing
      </Text>
      <ScrollView horizontal={true}>
        <MovieCard
          name="Sreekaram"
          image="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2021/01/01/Telugu-Movies-2021-New-Year-and-Announcement-HD-Posters-3.jpg?quality=80&zoom=1&ssl=1"
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BZWExNjQyMGQtNTIyZS00NGRlLWE3NGItOTk4ZjFmNmJmNTU3XkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg"
          name="Aacharya"
        />
        <MovieCard
          image="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00304440-bbnbjclasy-portrait.jpg"
          name="Viraata Parvam"
        />
        <MovieCard
          name="Sreekaram"
          image="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2021/01/01/Telugu-Movies-2021-New-Year-and-Announcement-HD-Posters-3.jpg?quality=80&zoom=1&ssl=1"
        />
      </ScrollView>
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          alignSelf: "flex-end",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "black", fontSize: 17, marginRight: 10 }}>
          {nav}
        </Text>
        <AntDesign name="arrowright" size={20} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
