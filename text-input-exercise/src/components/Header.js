import React from 'react';
import { View, Text, Alert, TextInput, Button, Switch } from 'react-native';

const Header = ({styles, toggleSwitch, darkTheme}) => {
  return (
    <View>
        <Text>Dark Theme Switch</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  )
}

export default Header
