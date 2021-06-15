import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const NameInput = props =>{
    const [getName, setName]=useState('');

    const setNameHandler = enteredText =>{
        setName(enteredText);
      };

    const addNameHandler = ()=> {
        props.onAddName(getName);
        setName('');
    };

    return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder="  Name"
        onChangeText={setNameHandler}
        value={getName}/>
        <View style={styles.buttonContainer}>   
            <View style={styles.buttons}>
                <Button title="Add" onPress={addNameHandler}/>
            </View>
            <View styles={styles.buttons}>
                <Button title="Cancel" color="red" onPress={props.onCancel}/>
            </View>
        </View>
        </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttons:{
        marginVertical:  10
    },
    buttonContainer:{
        width: '60%'
    }
    
});

export default NameInput;