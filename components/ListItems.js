import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItems = props =>{
    return(
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
    listItem:{
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#00bfff',
        padding: 10,
        marginTop: 10,
        marginBottom:10
      }
})

export default ListItems;