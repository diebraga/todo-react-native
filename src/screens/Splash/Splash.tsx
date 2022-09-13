import { Center, Flex } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/Logo.png'
// import { Container } from './styles';

export const Splash: React.FC = () => {
  return (
    <Flex
      _dark={{ bg: "purple.800" }}
      _light={{ bg: "purple.600" }}
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

