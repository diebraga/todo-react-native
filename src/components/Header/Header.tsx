import { Flex, HStack, Text } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/logo-sm.png'
import { useTodos } from '../../hooks/useTodos';
import { FormInput } from '../FormInput/FormInput';

export const Header: React.FC = () => {
  const { todos } = useTodos()
  return (
    <Flex
      bg='purple.600'
      alignItems="center"
      px="5"
      h="200px"
    >
      <HStack
        justifyContent="space-between"
        flex={1}
        alignItems="center"
        w="100%"
        mt="8"
      >
        <Image source={Logo} />
        <Text color="gray.50">
          You have {""}
          <Text fontWeight="bold">
            {todos.filter(item => item.isDone === false).length} Todos
          </Text>
        </Text>
      </HStack>

      <FormInput />
    </Flex>
  )
}
