import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Greeting = () => {
  return (
    <View>
        <Text style={styles.text}>Domain Expansion</Text>
        <Text style={styles.textSub}>Infinite Void</Text>
        <Button title="Click me" color="black" onPress={() => alert('Button Clicked')} />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold'
    },
    textSub: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });

export default Greeting;
