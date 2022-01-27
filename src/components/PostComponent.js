import React from 'react';
import {Box, Divider, VStack, Icon, Text, Avatar} from 'native-base';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {SelectedPostState} from '../redux/slices/selectedPostSlice';

const PostComponent = ({postBody, item, navigation}) => {
  const image = require('../assets/goku.png');
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
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Avatar marginX="1" source={image} size="sm"></Avatar>
            </TouchableOpacity>
            <Text marginX="1" bold>
              Zain
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              dispatch(SelectedPostState(item));
              console.log('Selected Post: ', selectedPost);
              navigation.navigate('ViewPost');
            }}>
            <Text marginX="2">Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
