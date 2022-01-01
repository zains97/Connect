import {Box} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const Footer = () => {
  const width = Dimensions.get('screen').width;
  return (
    <Box //Footer
      alignItems="center"
      justifyContent="center"
      display="flex"
      bgColor="blue.500"
      flex={0.05}
      w={width}>
      c
    </Box>
  );
};

export default Footer;
