import { Center, Flex } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/Logo.png'

export const Splash: React.FC = () => {
  return (
    <Flex
      bg="gray.200"
      px={4}
      flex={1}
    >
      <Center
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Image source={Logo} />
      </Center>
    </Flex>
  )
}

