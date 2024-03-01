import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting  from './src/components/Text';
import BasicForm from './src/components/BasicForm/BasicForm';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Greeting /> */}
      <BasicForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
