import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.onDelete(props.id);
      }}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default ListItem;
