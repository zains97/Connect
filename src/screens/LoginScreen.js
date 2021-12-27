import {Box, Button, Heading, Icon, Input, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {loginUser} from '../api/api';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState(null);
  console.log('MY USER:         \n\n', user, '\n\n');

  return (
    <Box dispaly="flex" flex={1}>
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
