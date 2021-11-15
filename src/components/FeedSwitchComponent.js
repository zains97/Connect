import React from 'react';
import {Box, Text} from 'native-base';
import {Dimensions} from 'react-native';

export default function FeedSwitchComponent() {
  const width = Dimensions.get('screen').width;
  return (
    <Box
      flexDirection="row"
      width={width}
      height="100%"
      justifyContent="space-around"
      bgColor="white">
      <Box justifyContent="center" alignItems="center">
        <Text fontStyle="">Main Feed</Text>
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Text>Friend Feed</Text>
      </Box>
    </Box>
  );
}
