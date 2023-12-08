// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { executeSql } from '../utils/Database';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const result = await executeSql('SELECT * FROM tasks');
    setTasks(result.rows._array);
  };

  return (
    <View>
      <Text>Lista de Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
      <Button
        title="Adicionar Tarefa"
        onPress={() => navigation.navigate('AddTask')}
      />
    </View>
  );
};

export default HomeScreen;
