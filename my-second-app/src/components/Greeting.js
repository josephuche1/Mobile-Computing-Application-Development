import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = () => {
  return (
    <View>
        <Text style={styles.text}>Domain Expansion</Text>
        <Text style={styles.textSub}>Infinite Void</Text>
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
