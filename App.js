import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import ListItem from "./components/ListItem";
import InputGoal from "./components/InputGoal";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: currentGoals.length.toString(), value: goalTitle }
    ]);
    setOpenModal(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return courseGoals.filter(goal => {
        return goal.id !== goalId;
      });
    });
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        title='Add Goal'
        onPress={() => {
          setOpenModal(true);
        }}
      />
      <InputGoal
        show={openModal}
        addGoal={addGoalHandler}
        closeModal={closeModalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={data => (
          <ListItem
            id={data.item.id}
            title={data.item.value}
            onDelete={removeGoalHandler}></ListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
