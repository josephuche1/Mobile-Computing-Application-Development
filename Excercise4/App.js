import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Square from './src/components/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexStyles}>
        <Square color='red'/>
        <Square color='blue'/>
      </View>
      <View style={styles.squarePositioning}>
        <Square color='lime'/>
        <Square color='yellow' positionStyles={styles.positionStyles}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'top',
    paddingTop: 50,
  },
  flexStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  squarePositioning: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  positionStyles: {
    position: 'absolute',
    top: 70,
    left: 200,
  }
});
