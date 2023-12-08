// src/screens/AddTaskScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { executeSql } from '../utils/Database';

const AddTaskScreen = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = async () => {
    await executeSql('INSERT INTO tasks (title) VALUES (?)', [taskTitle]);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o título da tarefa"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
};

export default AddTaskScreen;
