import React, {useState} from 'react';
import { StyleSheet, View, Button, ScrollView, FlatList } from 'react-native';
import ListItems from './components/ListItems';
import NameInput from './components/NameInput';

export default function App() {
  
  const [enteredName, setEnteredName]=useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addNameHandler = nameTitle => {
    setEnteredName(currentName => [...currentName, 
      {id: Math.random().toString(), value: nameTitle}]);

      setIsAddMode(false);
  };
  
  const removeNameHandler = nameId => {
    setEnteredName(currentName => {
      return currentName.filter(name => name.id !== nameId);
    });
  };
  
  const cancelNameAdditionHandler = () =>{
    setIsAddMode(false);
  };
  
  return (
    
    <View style={styles.screen}>
      
      <Button title="Add New Name" onPress={() => setIsAddMode(true)}/>
      <NameInput visible={isAddMode} onAddName={addNameHandler} onCancel={cancelNameAdditionHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={enteredName}
      renderItem={itemData => (
        <ListItems 
        id={itemData.item.id}
        title={itemData.item.value}
        onDelete={removeNameHandler}
        />
      )}
      />
      </View>
    
  );
}



const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  
});
