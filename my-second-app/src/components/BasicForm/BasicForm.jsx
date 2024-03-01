import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './BasicFormStyles';

const BasicForm = () => {

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.headerText}> Simple Form </Text>
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                keyboardType='default'
            ></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your age"
                keyboardType='numeric'
            />
        </View>
        <Button title="Submit" color="black" onPress={() => console.log('Form Submitted')} />
      </View>
      
    </View>
  )
}

export default BasicForm
