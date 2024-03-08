import React from 'react';
import { View} from 'react-native';
import { squareStyles } from '../styles/squareStyles';

const Square = ({color, positionStyles}) => {
  return (
    <View style={{...squareStyles.square, backgroundColor:color, ...positionStyles}}>
      
    </View>
  )
}

export default Square
