import {Box, Button, Heading, Icon, Input, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {signUp} from '../api/api';

export default function SignUpScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = (firstName, lastName, email, password, gender) => {
    if (password == confirmPassword) {
      signUp(firstName, lastName, email, password, gender).then(data => {
        if (data.firstName === firstName) {
          navigation.navigate('Login');
        }
      });
    } else {
      Alert.alert("Passwords don't match");
    }
  };

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
          Sign Up for Connect to meet people with similar interests.{' '}
        </Text>
        <Stack marginBottom="2.5" space={4} w="100%" alignItems="center">
          <Input
            onChangeText={text => setFirstName(text)}
            value={firstName}
            variant="filled"
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Enter first name"
          />
          <Input
            onChangeText={text => setLastName(text)}
            value={lastName}
            variant="filled"
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Enter last name"
          />
          <Input
            onChangeText={text => setEmail(text)}
            value={email}
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
            placeholder="Enter email"
          />
          <Input
            onChangeText={text => setPassword(text)}
            value={password}
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
          <Input
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
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
            placeholder="Confirm password"
          />
        </Stack>
        <Button
          onPress={() =>
            register(firstName, lastName, email, password, confirmPassword)
          }
          colorScheme="blue"
          w={{
            base: '75%',
            md: '25%',
          }}
          marginBottom="1">
          Sign Up
        </Button>
      </Box>
      <Box
        flexDir="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={0.05}
        backgroundColor="blue.200">
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text bold color="blue.800">
            {' '}
            Login
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
