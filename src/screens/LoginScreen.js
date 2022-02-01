import {Box, Button, Heading, Icon, Input, Stack, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {loginUser} from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {TokenState} from '../redux/slices/jwtSlice';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(null);
  const jwt = useSelector(state => state.jwt.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const setToken = async () => {
      console.log('SAVED USER', user);
      await AsyncStorage.setItem('token', JSON.stringify(user));
      if (user) {
        dispatch(TokenState(user));
        console.log('SAVED USER STATE: ', jwt);
      }
    };
    if (user) {
      setToken();
    }
  }, [user]);

  return (
    <Box dispaly="flex" flex={1} style={{backgroundColor: 'white'}}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={0.95}>
        <Heading size="lg" marginBottom="5">
          Connect
        </Heading>
        <Text textAlign="center" width="80%" marginBottom="2.5">
          Login to connect with people with similar interests.
        </Text>
        <Stack marginBottom="2.5" space={4} w="100%" alignItems="center">
          <Input
            onChangeText={text => setEmail(text)}
            variant="filled"
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="at" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Email"
          />
          <Input
            onChangeText={text => setPassword(text)}
            variant="filled"
            type="password"
            w={{
              base: '75%',
              md: '25%',
            }}
            InputRightElement={
              <Icon
                as={<FontAwesome5 name="eye-slash" />}
                size={5}
                mr="2"
                color="muted.400"
              />
            }
            placeholder="Password"
          />
        </Stack>
        <Button
          onPress={async () => {
            setUser(await loginUser(email, password));
            user ? navigation.navigate('Feed') : null;
          }}
          colorScheme="blue"
          w={{
            base: '75%',
            md: '25%',
          }}
          marginBottom="1">
          Login
        </Button>
        <Text marginBottom="1" fontSize="md" fontWeight="black">
          OR
        </Text>
      </Box>
      <Box
        flexDir="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={0.05}
        backgroundColor="blue.200">
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          flex="1"
          onPress={() => navigation.navigate('SignUp')}>
          <Text bold color="blue.800">
            {' '}
            Sign Up
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
