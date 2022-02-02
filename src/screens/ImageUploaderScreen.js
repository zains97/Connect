import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {uploadPicture} from '../api/api';
import {useDispatch, useSelector} from 'react-redux';
import {TokenState} from '../redux/slices/jwtSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ImageUploader = ({navigation}) => {
  const jwt = useSelector(state => state.jwt.token);
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(
    'https://res.cloudinary.com/ogcodes/image/upload/v1581387688/m0e7y6s5zkktpceh2moq.jpg',
  );
  const [user, setUser] = useState();

  console.log('Type', typeof jwt);
  console.log(jwt.user._id);

  const cloudinaryUpload = photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'connect');
    data.append('cloud_name', 'connect123');
    fetch('https://api.cloudinary.com/v1_1/connect123/upload', {
      method: 'post',
      body: data,
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        uploadPicture(jwt.user._id, data.secure_url);
        const updatedState = {
          ...jwt,
          profilePic: data.secure_url,
        };
        dispatch(TokenState(updatedState));
        const json = JSON.stringify(jwt);
        AsyncStorage.setItem('token', json);
        setPhoto(data.secure_url);
        navigation.navigate('Profile');
      })
      .catch(err => {
        Alert.alert('An Error Occured While Uploading');
      });
  };

  const selectPhotoTapped = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      // Use launchImageLibrary to open image gallery

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        const type = response.assets[0].type;
        const name = response.assets[0].fileName;
        const source = {
          uri,
          type,
          name,
        };
        cloudinaryUpload(source);
      }
    });
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.backgroundImage}></Image>
      </View>
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadContainerTitle}>ImagePicker</Text>
        <TouchableOpacity
          onPress={selectPhotoTapped}
          style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#fe5b29',
    flex: 0.925,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  uploadContainer: {
    backgroundColor: '#f6f5f8',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 200,
  },
  uploadContainerTitle: {
    alignSelf: 'center',
    fontSize: 25,
    margin: 20,
    fontFamily: 'Roboto',
  },
  uploadButton: {
    borderRadius: 16,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1.58,
    shadowRadius: 9,
    elevation: 4,
    margin: 10,
    padding: 10,
    backgroundColor: '#fe5b29',
    width: Dimensions.get('window').width - 60,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#f6f5f8',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});
export default ImageUploader;
