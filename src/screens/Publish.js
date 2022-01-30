import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import {newPost} from '../api/api';
import Footer from '../components/Footer';

const image = require('../assets/goku.png');

const Publish = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const tags = [
    {
      id: 1,
      name: 'Football',
    },
    {
      id: 2,
      name: 'Cricket',
    },
    {
      id: 3,
      name: 'Basketball',
    },
    {
      id: 4,
      name: 'Tennis',
    },
    {
      id: 5,
      name: 'Badminton',
    },
  ];
  const publishPost = async ({navigation}) => {
    newPost(postBody, tag);
  };

  const [postBody, setPostBody] = useState();
  const [tag, setTag] = useState();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header />
      <View style={{flex: 0.875}}>
        <View style={{marginBottom: 5, justifyContent: 'center'}}>
          <TextInput
            onChangeText={text => setPostBody(text)}
            style={{
              width: '100%',
              height: 60,
              padding: 10,
              color: 'black',
              fontSize: 16,
            }}
            placeholder="What's on your mind"
            selectionColor={'orange'}
          />
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={image}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'black',
              }}
              resizeMode="cover"
            />
            <Text style={{color: 'black', fontSize: 16, left: 10}}>Zain</Text>
          </View>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgrey'}}
          />
          <ScrollView horizontal={true}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                flexDirection: 'row',
              }}>
              {tags.map(data => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setTag(data.name)}>
                  <View
                    style={{
                      padding: 6,
                      borderRadius: 5,
                      backgroundColor: '#3b82f6',
                      borderColor: '#3b82f6',
                      marginHorizontal: 5,
                      borderWidth: 3,
                      borderColor: data.name === tag ? '#1d4ed8' : '#3b82f6',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: data.name === tag ? 18 : 16,
                        fontWeight: data.name === tag ? 'bold' : null,
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              publishPost();
              navigation.navigate('Feed');
            }}>
            <View
              style={{
                width: width * 0.5,
                padding: 6,
                borderRadius: 5,
                backgroundColor: '#3b82f6',
                marginHorizontal: 5,
                borderWidth: 2,
                borderColor: '#1e40af',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Publish Post</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Publish;
