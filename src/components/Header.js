import {Text, Box} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import Logo from '../assets/modifiedConnectLogo.png';
export default function Header() {
  const {width} = Dimensions.get('screen');
  return (
    <Box //Header
      paddingY="1"
      paddingX="2"
      alignItems="center"
      flexDirection="row"
      justifyContent="flex-start"
      display="flex"
      bgColor="blue.500"
      flex={0.05}
      w={width}>
      <Image
        source={Logo}
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          backgroundColor: '#3b82f6',
          marginRight: width * 0.02,
        }}
      />
      <Text color="white" fontWeight={'extrabold'} fontSize="20">
        Connect
      </Text>
    </Box>
  );
}
