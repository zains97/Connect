import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function FeedScreen() {
  const width = Dimensions.get('screen').width;
  return (
    <Box
      bgColor="rose.900"
      alignItems="center"
      justifyContent="center"
      flex={1}>
      <Box
        paddingX="2"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        display="flex"
        bgColor="blue.100"
        flex={0.05}
        w={width}>
        <Text>Connect</Text>
        <FontAwesome5Icon size={40} name="comments" />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        bgColor="blue.500"
        flex={0.9}
        w={width}>
        b
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        bgColor="blue.900"
        flex={0.05}
        w={width}>
        c
      </Box>
    </Box>
  );
}
