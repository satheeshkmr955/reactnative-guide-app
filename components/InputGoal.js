import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal } from "react-native";

const InputGoal = props => {
  const [enterGoals, setEnterGoals] = useState("");

  const goalInputHandler = enteredInput => {
    setEnterGoals(enteredInput);
  };
  const clearInputHandler = () => {
    props.addGoal(enterGoals);
    setEnterGoals("");
  };
  return (
    <Modal visible={props.show} animationType='slide'>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.text}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={props.closeModal} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={clearInputHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: { width: "40%" }
});

export default InputGoal;
