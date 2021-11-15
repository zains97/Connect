import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeedSwitchComponent from '../components/FeedSwitchComponent';
import PostComponent from '../components/PostComponent';

export default function FeedScreen() {
  const width = Dimensions.get('screen').width;
  return (
    <Box //Container
      bgColor="blue.900"
      alignItems="center"
      justifyContent="center"
      flex={1}>
      <Box //Header
        paddingX="2"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        display="flex"
        bgColor="blue.900"
        flex={0.07}
        w={width}>
        <Text color="white">Connect</Text>
        <FontAwesome5Icon size={40} name="comments" color="white" />
      </Box>
      <Box //Feed Body
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bgColor="purple.600"
        flex={0.88}
        w={width}>
        <Box flex={0.05}>
          <FeedSwitchComponent />
        </Box>
        <Box flex={0.95} height="100%" bgColor="teal.500">
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </Box>
      </Box>
      {/* Feed Body end */}
      <Box //Footer
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
