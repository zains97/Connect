import {Box, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeedSwitchComponent from '../components/FeedSwitchComponent';
import PostComponent from '../components/PostComponent';
import {fetchPost, getAllPosts} from '../api/api';

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = async () => {
      setPosts(await getAllPosts());
    };
    data();
  }, []);
  console.log('Testing 0: ', posts);
  //fetchPost();
  const width = Dimensions.get('screen').width;
  return (
    <Box //Container
      bgColor="blue.500"
      alignItems="center"
      justifyContent="center"
      flex={1}
      w={width}>
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
      <Box //Feed Body
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        // bgColor="blue.50"
        flex={0.88}
        // w={width}
      >
        <Box flex={0.05} borderBottomWidth="1" borderBottomColor="muted.300">
          <FeedSwitchComponent />
        </Box>
        <Box
          flex={0.95}
          bgColor="white"
          flexDirection="column"
          alignItems="center"
          w={width}>
          <ScrollView>
            {posts.map(post => (
              <PostComponent postBody={post?.postBody} />
            ))}
          </ScrollView>
        </Box>
      </Box>
      {/* Feed Body end */}
      <Box //Footer
        alignItems="center"
        justifyContent="center"
        display="flex"
        bgColor="blue.500"
        flex={0.05}
        // w={width}
      >
        c
      </Box>
    </Box>
  );
}
