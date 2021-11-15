import React from 'react';
import {Box, Text} from 'native-base';
import {Dimensions} from 'react-native';

const PostComponent = () => {
  const width = Dimensions.get('screen').width;
  return (
    <Box //Post Container
      flex={0.25}
      width="100%"
      flexDirection="row"
      marginBottom="2"
      borderRadius="5 ">
      <Box bgColor="blue.500" width="20%">
        Kaisy ho yar
      </Box>
      <Box bgColor="blue.50" width="80%">
        <Text>Hello world</Text>
      </Box>
    </Box>
  );
};

export default PostComponent;
