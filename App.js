import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import LoginScreen from './src/screens/LoginScreen';
import FeedScreen from './src/screens/FeedScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ProfileScreen from './src/screens/Profile';
import Publish from './src/screens/Publish';
import UpdateProfile from './src/screens/UpdateProfile';
import SplashScreen from './src/screens/SplashScreen';
import ViewPostScreen from './src/screens/ViewPostScreen';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {jwtStore} from './src/redux/store/jwtTokenStore';
const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      'NativeBase',
      'Each child in a list should have a unique "key" prop.',
    ]);
  }, []);

  return (
    <Provider store={jwtStore}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Publish" component={Publish} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Feed" component={FeedScreen} />
            <Stack.Screen name="ViewPost" component={ViewPostScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
