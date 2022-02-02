import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import {newPost} from '../api/api';
import Footer from '../components/Footer';
import {useSelector} from 'react-redux';
const image = require('../assets/goku.png');

const Publish = ({navigation}) => {
  useEffect(() => {
    setPostBody(null);
    setTag(null);
  }, []);

  const jwt = useSelector(state => state.jwt.token);
  const {width} = Dimensions.get('screen');
  const tags = [
    {
      id: 0,
      name: 'General',
    },
    {
      id: 1,
      name: 'Football',
    },
    {
      id: 2,
      name: 'Sports',
    },
    {
      id: 3,
      name: 'Programming',
    },
    {
      id: 4,
      name: 'Cricket',
    },
    {
      id: 5,
      name: 'Cooking',
    },
    {
      id: 6,
      name: 'Marital Arts',
    },
    {
      id: 7,
      name: 'Tech',
    },
    {
      id: 8,
      name: 'Science',
    },
    {
      id: 9,
      name: 'Religion',
    },
    {
      id: 10,
      name: 'Islam',
    },
    {
      id: 11,
      name: 'Health',
    },
    {
      id: 12,
      name: 'Fitness',
    },
    {
      id: 13,
      name: 'Weapons',
    },
    {
      id: 14,
      name: 'Politics',
    },
    {
      id: 15,
      name: 'Econimics',
    },
    {
      id: 16,
      name: 'Gaming',
    },
    {
      id: 17,
      name: 'Philosophy',
    },
  ];

  const [postBody, setPostBody] = useState('');
  const [tag, setTag] = useState(null);
  const publishPost = () => {
    if (postBody.length < 10) {
      Alert.alert('Post must be more than 10 characters long.');
    } else {
      if (tag) {
        console.log('TOKEN', jwt.user._id);
        newPost(
          postBody,
          tag,
          jwt.user._id,
          jwt.profilePic,
          jwt.user.firstName,
        );
        Alert.alert('Post created');
        setTimeout(() => navigation.navigate('Feed'), 2000);
      } else {
        Alert.alert('You must select a tag.');
      }
    }
  };
  console.log('PIC', jwt);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header />
      <View style={{flex: 0.875}}>
        <View style={{marginBottom: 5, justifyContent: 'center'}}>
          <TextInput
            onChangeText={text => setPostBody(text)}
            value={postBody}
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
              source={{uri: jwt.profilePic}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'black',
              }}
              resizeMode="cover"
            />
            <Text style={{color: 'black', fontSize: 16, left: 10}}>
              {jwt.user.firstName}
            </Text>
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
