import {Box, FlatList, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeedSwitchComponent from '../components/FeedSwitchComponent';
import PostComponent from '../components/PostComponent';
import {fetchPost, getAllPosts} from '../api/api';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FeedScreen({navigation}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = async () => {
      setPosts(await getAllPosts());
    };
    data();
  }, []);

  const state = {
    refresh: true,
  };

  //fetchPost();
  const width = Dimensions.get('screen').width;
  return (
    <Box //Container
      bgColor="blue.500"
      alignItems="center"
      justifyContent="center"
      flex={1}
      w={width}>
      <Header />
      <Box //Feed Body
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        flex={0.88}>
        <Box flex={0.05} borderBottomWidth="1" borderBottomColor="muted.300">
          <FeedSwitchComponent />
        </Box>
        <Box
          flex={0.95}
          bgColor="white"
          flexDirection="column"
          alignItems="center"
          w={width}>
          <FlatList
            data={posts}
            extraData={posts}
            keyExtractor={item => item._id}
            renderItem={({item, index}) => {
              return (
                <PostComponent
                  navigation={navigation}
                  item={item}
                  postBody={item?.postBody}
                />
              );
            }}
          />
        </Box>
      </Box>
      {/* Feed Body end */}
      <Footer navigation={navigation} />
    </Box>
  );
}
