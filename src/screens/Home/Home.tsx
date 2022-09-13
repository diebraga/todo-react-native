import { Flex, HStack, Text } from 'native-base';
import React from 'react';
import { useSplash } from '../../hooks/useSplash';
import { Splash } from '../Splash/Splash';
import Logo from '../../assets/logo-sm.png'
import { Image } from 'react-native';

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
      <HStack
        justifyContent="space-between"
        bg='purple.600'
        w="100%"
        h="200px"
        alignItems="center"
        px="5"
      >
        <Image source={Logo} />
        <Text color="gray.50">
          You have {""}
          <Text fontWeight="bold">
            3 Todos
          </Text>
        </Text>
      </HStack>
    </Flex>
  )
}

export default Home;