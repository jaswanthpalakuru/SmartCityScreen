import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Places from "./Places";
import VisitingForFirstTime from "./VisitingForFirstTime";

export default function Visit({ heading, nav, children, style, styleText }) {
  return (
    <View style={[style, styles.container]}>
      <Text style={[styleText, styles.text]}>{heading}</Text>
      {children}
      <VisitingForFirstTime nav={nav} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    // marginBottom: 50,
  },
});
