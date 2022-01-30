import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Footer from '../components/Footer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'native-base';

const Profile = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const image = require('../assets/goku.png');
  return (
    <>
      <ImageBackground
        source={image}
        style={{
          flex: 0.925,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000c0',
        }}
        imageStyle={{opacity: 0.2}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UpdateProfile');
          }}
          style={{
            paddingRight: width * 0.03,
            marginVertical: width * 0.03,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width,
          }}>
          <Icon as={<FontAwesome5 name="edit" />} size={6} color="white" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 300,
              width: 300,
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: 'black',
            }}>
            <Image
              source={image}
              resizeMode="contain"
              style={{width: 250, height: 250}}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{color: 'white', fontSize: 24}}>Ahsan here</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                width: 130,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dotted',
                borderColor: 'white',
                borderRadius: 10,
                margin: 15,
              }}>
              <Text style={{color: 'white', fontSize: 24}}>10</Text>
              <Text style={{color: 'white', fontSize: 24}}>POSTS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                width: 130,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dotted',
                borderColor: 'white',
                borderRadius: 10,
                margin: 15,
              }}>
              <Text style={{color: 'white', fontSize: 24}}>20</Text>
              <Text style={{color: 'white', fontSize: 24}}>FRIENDS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Footer navigation={navigation} />
    </>
  );
};

export default Profile;
