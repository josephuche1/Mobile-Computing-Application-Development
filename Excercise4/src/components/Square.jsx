import React from 'react';
import { View} from 'react-native';
import { squareStyles } from '../styles/squareStyles';

const Square = ({color}) => {
  return (
    <View style={{...squareStyles.square, backgroundColor:color}}>
      
    </View>
  )
}

export default Square
