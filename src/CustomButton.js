import { Button, StyleSheet, Text, View, Pressable } from "react-native";

import React from "react";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const CustomButton = ({ title, clickHandle }) => {
  return (
    <Pressable style={styles.button} onPress={clickHandle}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop:10,
    marginLeft: 180,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#3ea9e2",
    width: width*0.5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default CustomButton;
