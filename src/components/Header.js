import {Text, Box} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header() {
  const {width} = Dimensions.get('screen');
  return (
    <Box //Header
      paddingX="2"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      display="flex"
      bgColor="darkBlue.500"
      flex={0.07}
      w={width}>
      <Text color="white">Connect</Text>
      <FontAwesome5Icon size={40} name="comments" color="white" />
    </Box>
  );
}
