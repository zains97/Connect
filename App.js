// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import LoginScreen from './src/screens/LoginScreen';
import FeedScreen from './src/screens/FeedScreen';
import SignUpScreen from './src/screens/SignUpScreen';
<<<<<<< HEAD
import NewPostScreen from './src/screens/NewPostScreen';
=======
import Profile from './src/screens/Profile';
>>>>>>> c1b233aaeeda8d2605dee86c30d06105d8253bb7

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
<<<<<<< HEAD
          initialRouteName="NewPost"
=======
          initialRouteName="Profile"
>>>>>>> c1b233aaeeda8d2605dee86c30d06105d8253bb7
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Feed" component={FeedScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="NewPost" component={NewPostScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
