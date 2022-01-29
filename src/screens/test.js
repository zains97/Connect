import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const test = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{flex: 0.925}}></View>
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
