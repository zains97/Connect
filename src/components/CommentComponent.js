import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const CommentComponent = () => {
  return (
    <View
      style={{
        backgroundColor: '#0078fe',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: '5%',
        alignSelf: 'flex-start',
        borderRadius: 20,
        width: '95%',
      }}>
      <Text style={{fontSize: 16, color: '#fff', justifyContent: 'center'}}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </Text>
      <View style={styles.leftArrow}></View>
      <View style={styles.leftArrowOverlap}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#0078fe',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});

export default CommentComponent;
