import React, {useState} from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Avatar, Box, Icon, Text} from 'native-base';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const image = require('../assets/goku.png');
const width = Dimensions.get('screen').width;

const ViewPostScreen = () => {
  const tags = {
    id: 5,
    name: 'Badminton',
  };

  const [post, setPost] = useState();
  const [tag, setTag] = useState();
  console.log(tag);
  return (
    <View style={styles.container}>
      <View style={{flex: 0.9}}>
        <View
          style={{
            paddingHorizontal: 10,
            width: width * 0.9,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 14}}>I wonder what's for dinner?</Text>
          <Box paddingY={2} px="2" marginY={2} borderTopWidth="1" flexDir="row">
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Avatar marginX="1" source={image} size="sm"></Avatar>
              </TouchableOpacity>
              <Text marginX="1" bold>
                Zain
              </Text>
            </View>

            <TouchableOpacity>
              <Text marginX="2">Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                as={<FontAwesome5Icon name="thumbs-up" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </TouchableOpacity>
          </Box>
        </View>
        <View style={{backgroundColor: 'blue', width}}></View>
      </View>
      <View style={{flex: 0.1}}></View>
    </View>
  );
};

export default ViewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
});
