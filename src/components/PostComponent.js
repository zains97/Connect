import React from 'react';
import {Box, Divider, VStack} from 'native-base';
import {Dimensions} from 'react-native';

const PostComponent = ({postBody}) => {
  const width = Dimensions.get('screen').width;
  return (
    <Box
      width={width * 0.92}
      border="1"
      borderWidth="1"
      borderColor="black"
      borderRadius="10"
      marginY="2"
      marginX="3"
      backgroundColor="blue.50">
      <VStack space="2" divider={<Divider />}>
        <Box px="2" pt="4">
          NativeBase
        </Box>
        <Box px="2">{postBody}</Box>
        <Box px="2" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
};

export default PostComponent;
