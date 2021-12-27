import {Text, Box, TextArea} from 'native-base';
import React, {useState} from 'react';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('screen').width;
const NewPostScreen = () => {
  const [postBody, setPostBody] = useState({});
  const [tags, setTags] = useState([]);

  return (
    <Box alignItems="center" flex={1} w={width}>
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
      <Box marginTop={4} borderWidth={1}>
        <TextArea
          onChangeText={body => setPostBody(body)}
          h={20}
          placeholder="Text Area Placeholder"
          width={width}
        />
      </Box>
      <Box flexDir="row" width={width} height={10} borderWidth={1}>
        <TouchableOpacity
          style={styles.tags}
          onPress={tag => setTags([...tags].push(tag))}>
          <Text>Cricket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tags}
          onPress={tag => setTags([...tags].push(tag))}>
          <Text>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tags}
          onPress={tag => setTags([...tags].push(tag))}>
          <Text>Programming</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  tags: {
    marginHorizontal: 5,
    borderWidth: 0.5,
    backgroundColor: '#bfdbfe',
  },
});

export default NewPostScreen;
