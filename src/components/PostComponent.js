import React from 'react';
import {Box, Text} from 'native-base';
import {Dimensions} from 'react-native';

const PostComponent = () => {
  const width = Dimensions.get('screen').width;
  return (
    <Box //Post Container
      flex={0.25}
      width={width}
      maxHeight="1/2"
      borderRadius="xs"
      borderColor="black">
      <Box>Kaisy ho yar</Box>
      <Box>
        <Text>Hello world</Text>
      </Box>
    </Box>
  );
};

export default PostComponent;
