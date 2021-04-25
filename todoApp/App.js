// Akbota Mautkazy, 20MD0194

import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import uuid from 'react-native-uuid';
//import {uuid} from 'uuidv4';

const App = () => {
   const [items, setItems] = useState([
    {
      id: uuid.v4(),
      text: 'Task 1',
    },
    {
      id: uuid.v4(),
      text: 'Task 2',
    },
    {
      id: uuid.v4(),
      text: 'Task 3',
    },
    {
      id: uuid.v4(),
      text: 'Task 4',
    },
    {
      id: uuid.v4(),
      text: 'Task 5',
    },
  ]); 

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No task entered',
        'Please enter a task when adding to your todo list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <TodoList
            item={item}
            deleteItem={deleteItem}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;