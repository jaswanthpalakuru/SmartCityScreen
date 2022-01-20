import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./ScreenComponents/Header";
import TouristFirstTime from "./ScreenComponents/TouristFirstTime";

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <TouristFirstTime />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
