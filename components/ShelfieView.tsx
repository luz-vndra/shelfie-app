import React from 'react'

import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

type ShelfieViewProps =  React.ComponentProps<typeof View>

const ShelfieView: React.FC<ShelfieViewProps> = ({style, ...props}) => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  return (
    <View style={[{backgroundColor: theme.background}, style]} {...props}/>
      
  )
}

export default ShelfieView