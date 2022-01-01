import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Text} from 'native-base';

const {width, height} = Dimensions.get('screen');

export default function SplashScreen({navigation}) {
  useEffect(() => {
    //    setTimeout(() => navigation.navigate('Login'), 3000);
  });
  const logo = require('../assets/ConnectLogo.png');
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
      </View>
      <Text fontSize="2xl" bold>
        Connect
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
