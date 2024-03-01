import { StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: 30,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
    },
    textInput: {
        width: '100%',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textInputContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: -20,
        marginRight: -20,
        padding: 0,
    }
  });