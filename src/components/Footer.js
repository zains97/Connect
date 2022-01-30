import {Box, Icon} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Footer = ({navigation}) => {
  const width = Dimensions.get('screen').width;
  return (
    <Box //Footer
      alignItems="center"
      justifyContent="space-around"
      display="flex"
      bgColor="blue.500"
      flexDir={'row'}
      flex={0.075}
      w={width}>
      <Box>
        <TouchableOpacity
          style={{flex: 0.2, justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('Feed');
          }}>
          <Icon as={<FontAwesome5 name="newspaper" />} size={8} color="white" />
        </TouchableOpacity>
      </Box>
      <Box>
        <TouchableOpacity style={{flex: 0.2, justifyContent: 'center'}}>
          <Icon as={<FontAwesome5 name="envelope" />} size={8} color="white" />
        </TouchableOpacity>
      </Box>
      <Box>
        <TouchableOpacity
          style={{flex: 0.2, justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('Publish');
          }}>
          <Icon
            as={<FontAwesome5 name="plus-square" />}
            size={10}
            color="white"
          />
        </TouchableOpacity>
      </Box>
      <Box>
        <TouchableOpacity
          style={{flex: 0.2, justifyContent: 'center'}}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Icon as={<FontAwesome5 name="user" />} size={8} color="white" />
        </TouchableOpacity>
      </Box>
      <Box>
        <TouchableOpacity style={{flex: 0.2, justifyContent: 'center'}}>
          <Icon
            as={<FontAwesome5 name="map-marked" />}
            size={8}
            color="white"
          />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Footer;
