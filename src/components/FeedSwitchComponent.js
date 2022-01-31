import React from 'react';
import {Box} from 'native-base';
import {Dimensions, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FeedSelectorState} from '../redux/slices/feedSelectorSlice';

export default function FeedSwitchComponent() {
  const feedSelector = useSelector(state => state.feedSelector.feedSelector);
  const dispatch = useDispatch();
  const width = Dimensions.get('screen').width;
  return (
    <Box
      flexDirection="row"
      width={width}
      height="100%"
      justifyContent="space-around"
      bgColor="white">
      <Box justifyContent="center" alignItems="center" flex={0.5} flexDir="row">
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderBottomWidth: feedSelector === 'Main' ? 3 : null,
            borderBottomColor: feedSelector === 'Main' ? '#3b82f6' : null,
          }}
          onPress={() => {
            dispatch(FeedSelectorState('Main'));
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: feedSelector === 'Main' ? 'bold' : null,
            }}>
            Main Feed
          </Text>
        </TouchableOpacity>
      </Box>
      <Box justifyContent="center" alignItems="center" flex={0.5} flexDir="row">
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            borderBottomWidth: feedSelector === 'Friends' ? 3 : null,
            borderBottomColor: feedSelector === 'Friends' ? '#3b82f6' : null,
          }}
          onPress={() => {
            dispatch(FeedSelectorState('Friends'));
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: feedSelector === 'Friends' ? 'bold' : null,
            }}>
            Friends Feed
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
