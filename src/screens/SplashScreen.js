import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Text} from 'native-base';
import {TokenState} from '../redux/slices/jwtSlice';
import {useDispatch, useSelector} from 'react-redux';
//import {getToken} from '../utils/getToken';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}) {
  const logo = require('../assets/ConnectLogo.png');

  const jwt = useSelector(state => state.jwt.token);
  const dispatch = useDispatch();

  useEffect(async () => {
    const getToken = async () => {
      let object = await AsyncStorage.getItem('token');
      typeof object === 'object' ? (object = JSON.parse(object)) : null;
      console.log('USER OBJECT: ', object);
      return object;
    };
    const token = await getToken();
    console.log('USER OBJECT: ', token);
    if (token && token !== 'Logged Out') {
      dispatch(TokenState(token));
      setTimeout(() => {
        navigation.replace('Feed');
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.replace('Login');
      }, 3000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode="contain"
        style={{width: 300, height: 300}}
      />
      <Text fontSize="2xl" bold>
        Connect
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
