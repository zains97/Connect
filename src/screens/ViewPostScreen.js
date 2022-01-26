import React, {useState} from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';
import {Avatar, Box, Text} from 'native-base';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CommentComponent from '../components/CommentComponent';

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
      <Header />
      <View style={styles.viewPostContainer}>
        <View style={styles.postContainer}>
          <Text
            style={{backgroundColor: 'lightblue', padding: 10, fontSize: 14}}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </Text>
          <View style={styles.optionsBar}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  backgroundColor: 'black',
                  marginRight: width * 0.02,
                }}
              />
              <Text style={{fontWeight: 'bold'}}>Zain Saleem</Text>
            </View>
            <Icon
              as={<FontAwesome5Icon name="thumbs-up" />}
              size={6}
              mr="2"
              color="muted.400"
            />
          </View>
        </View>
        <ScrollView style={styles.commentContainer}>
          <CommentComponent />
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default ViewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  viewPostContainer: {
    flex: 0.88,
    width,
  },
  optionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.02,
  },
  commentContainer: {
    padding: 10,
  },
});
