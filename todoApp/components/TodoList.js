import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const colours = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet'];

const getColour = () => colours[Math.floor(Math.random() * colours.length)];

const TodoList = ({
  item,
  deleteItem,
}) => {
  const [colour, setColour] = useState(getColour());
  const handleClick = () => { setColour(getColour()); }

  return (
    <TouchableOpacity style={[styles.listItem, { backgroundColor: colour }]} onPress={handleClick}>
      <View style={styles.listItemView}>
        <Text style= {styles.listItemText}>{item.text}</Text>
        <Icon
            name="remove"
            size={20}
            color="black"
            onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default TodoList;