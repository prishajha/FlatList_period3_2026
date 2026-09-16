import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeperator";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  //inside the curly brace and before the return
  //function is where you will put declare your
  //fuctions and variables

  //this generic datatype will represent the objects in FlatList

  type dataType = {
    id: string; //unique identifier so the list knows which item it is
    title: string; //text or label for the object
  };

  //Create an array of the type dataType call is DATA
  //using all caps because the array values won't change
  //fill it with at least 3 items, need unique ID values
  //each object will be in curly braces, seperated by commas, and
  //you need to give a value to all the part of the dataType

  const DATA: dataType[] = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
    { id: "3", title: "Third Item" },
    { id: "4", title: "Fourth Item" },
  ];

  //add a state variable to keep track of what item has been selected
  const [selectedID, setSelectedID] = useState<string>("");

  //this simple function is called whenver the user clicks on the item
  //in FlatList

  const handleRowPress = (item: dataType) => {
    setSelectedID(item.id);
    console.log(item.title);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedID}
            ItemSeparatorComponent={() => <ListItemSeparator color={"blue"} />}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                isSelected={item.id === selectedID}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
