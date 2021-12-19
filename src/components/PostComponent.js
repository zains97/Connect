import React from 'react';
import {Box, Divider, Text, VStack} from 'native-base';
import {Dimensions} from 'react-native';

const PostComponent = () => {
  const width = Dimensions.get('screen').width;
  return (
    <Box
      border="1"
      borderWidth="1"
      borderColor="black"
      borderRadius="10"
      marginY="5"
      marginX="3"
      backgroundColor="blue.50">
      <VStack space="2" divider={<Divider />}>
        <Box px="2" pt="4">
          NativeBase
        </Box>
        <Box px="2">
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px="2" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
};

export default PostComponent;
