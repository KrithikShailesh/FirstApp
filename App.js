import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [getName, setName]=useState('');
  const [enteredName, setEnteredName]=useState([]);

  const setNameHandler = (enteredText) =>{
    setName(enteredText);
  };
  
  const setListHandler = () =>{
    setEnteredName(currName => [...currName, {id: Math.random().toString(), val: getName}] );
  };
  
  return (
    
    <View style={styles.screen}>
      <View style={{flexDirection:'column',padding: 10}}>
      <TextInput 
      style={styles.input} 
      placeholder="  Name"
      onChangeText={setNameHandler}
      value={getName}/>
      <Button title="Add" onPress={setListHandler}/>
      </View>
      <View>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={enteredName}
      renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.val}</Text>
        </View>
      )}
      />
      </View>
      
    </View>
    
  );
}



const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  input: {
    borderWidth: 1,
    borderColor: 'black'
  },
  listItem:{
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#00bfff',
    padding: 10,
    marginTop: 10,
    marginBottom:10
  }
})
