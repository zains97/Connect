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
import {useSelector} from 'react-redux';

const image = require('../assets/goku.png');
const width = Dimensions.get('screen').width;

const ViewPostScreen = ({navigation}) => {
  const selectedPost = useSelector(state => state.selectedPost.selectedPost);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewPostContainer}>
        <View style={styles.postContainer}>
          <Text style={{padding: 10, fontSize: 14}}>
            {selectedPost.postBody}
          </Text>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
          />
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
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
          />
        </View>
        <ScrollView style={styles.commentContainer}>
          {selectedPost.comments.map(comment => (
            <CommentComponent commentBody={comment.commentBody} />
          ))}
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
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
    backgroundColor: 'white',
  },
  viewPostContainer: {
    flex: 0.88,
    width,
  },
  optionsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.04,
  },
  commentContainer: {
    padding: 10,
  },
});
