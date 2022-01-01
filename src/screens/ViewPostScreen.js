import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';

const image = require('../assets/goku.png');

const ViewPostScreen = () => {
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

  const [post, setPost] = useState();
  const [tag, setTag] = useState();
  console.log(tag);
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 0.88}}>
        <View
          style={{flex: 0.3, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
          <View>
            <Text>Hello what's up</Text>
          </View>
          <View
            style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
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
                      backgroundColor: 'black',
                      marginHorizontal: 5,
                      borderWidth: 3,
                      borderColor: data.name === tag ? 'orange' : null,
                    }}>
                    <Text style={{color: 'white', fontSize: 16}}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default ViewPostScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
