import colors from "@/styles/colors";
import { StyleSheet, View } from "react-native";

type propsType = {
  color?: string;
};
//the background color will either be a color passed in as a prop, or the color defined in
//the colors.tsx file
//basically if nothing is passed in, the color prop has no value
//so the color will default to colors.theme.text.light

const ListItemSeparator: React.FC<propsType> = ({ color }) => {
  return (
    <View
      style={[
        styles.separator,
        { backgroundColor: color || colors.theme.light.text },
      ]}
    />
  );
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: "100%", //long ver short/skinny line
  },
});
