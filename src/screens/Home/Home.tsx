import { Flex, HStack, Text } from 'native-base';
import React from 'react';
import { useSplash } from '../../hooks/useSplash';
import { Splash } from '../Splash/Splash';
import Logo from '../../assets/logo-sm.png'
import { Image } from 'react-native';
import { Header } from '../../components/Header/Header';

const Home: React.FC = () => {
  const { appIsReady, onLayoutRootView } = useSplash()

  if (!appIsReady) {
    return (
      <Splash />
    )
  }

  return (
    <Flex
      _dark={{ bg: "gray.200" }}
      _light={{ bg: "gray.200" }}
      flex={1}
      onLayout={onLayoutRootView}
    >
      <Header />
    </Flex>
  )
}

export default Home;