import React from 'react';
import {Box, Divider, VStack, Icon, Text, Avatar} from 'native-base';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {SelectedPostState} from '../redux/slices/selectedPostSlice';

const PostComponent = ({
  postBody,
  item,
  navigation,
  creatorName,
  creatorImage,
}) => {
  const width = Dimensions.get('screen').width;

  const selectedPost = useSelector(state => state.selectedPost.selectedPost);
  const dispatch = useDispatch();

  return (
    <Box
      width={width * 0.92}
      border="1"
      borderWidth="1"
      borderColor="#60a5fa"
      borderRadius="10"
      marginY="2"
      marginX="3"
      width={width * 0.92}
      backgroundColor="blue.50">
      <VStack space="2" divider={<Divider />}>
        <Box px="2">{postBody}</Box>
        <Box px="2" width={width * 0.6} flexDir="row">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                source={{uri: creatorImage}}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: 'black',
                  marginRight: width * 0.02,
                  marginVertical: width * 0.005,
                }}
              />
            </TouchableOpacity>
            <Text marginX="1" bold>
              {creatorName}
            </Text>
          </View>

          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => {
              dispatch(SelectedPostState(item));
              console.log('Selected Post: ', selectedPost);
              navigation.navigate('ViewPost');
            }}>
            <Text marginX="2">Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Icon
              as={<FontAwesome5 name="thumbs-up" />}
              size={5}
              mr="2"
              color="muted.400"
            />
          </TouchableOpacity>
        </Box>
      </VStack>
    </Box>
  );
};

export default PostComponent;
