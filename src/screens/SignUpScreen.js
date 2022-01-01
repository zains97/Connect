import {Box, Button, Heading, Icon, Input, Stack, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SignUpScreen({navigation}) {
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
            placeholder="Enter name"
          />
          <Input
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
            placeholder="Enter user name"
          />
          <Input
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
          colorScheme="blue"
          w={{
            base: '75%',
            md: '25%',
          }}
          marginBottom="1">
          Login
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text bold color="blue.800">
            {' '}
            Login
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}
