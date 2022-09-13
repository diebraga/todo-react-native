import { Flex, HStack, Text, Button, Icon } from 'native-base';
import React from 'react';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const TodoItem: React.FC = () => {
  return (
    <HStack
      h="50px"
      justifyContent="space-between"
      bg='gray.300'
      w="100%"
      alignItems="center"
    >
      <Flex px='5' w="50%">
        {/* check-box-outline-blank */}
        <Button
          onPress={() => Alert.alert("I was pressed")}
          variant="unstyled"
          leftIcon={<Icon as={MaterialIcons} name='check-box' color="blue.500" />}
          justifyContent="flex-start"
        >
          Todo
        </Button>
      </Flex>

      <Flex px='5' w="50%">
        <Button
          onPress={() => Alert.alert("I was pressed")}
          variant="unstyled"
          rightIcon={<Icon as={EvilIcons} name='trash' color="gray.700" size="lg" />}
          justifyContent="flex-end"
        >
        </Button>
      </Flex>
    </HStack>
  )
}

export default TodoItem;