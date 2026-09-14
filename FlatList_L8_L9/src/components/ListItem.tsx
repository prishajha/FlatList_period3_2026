import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/styles/colors";

// declare data type for props here

const ListItem = () => {
  return <View></View>;
};

export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
});
