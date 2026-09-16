import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//declrae the data type - this is reduandant we will
//learn a better way later

type dataType = {
  id: string;
  title: string;
};

//declare our props data types

type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
};

const ListItem: React.FC<propsType> = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.titleContainer,
        {
          backgroundColor: isSelected ? colors.primary : colors.secondary,
        },
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            color: isSelected ? colors.text.light : colors.text.dark,
          },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
