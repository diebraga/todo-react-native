import { Flex, HStack, Button, Icon } from 'native-base';
import React from 'react';
import { Alert, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useTodos } from '../../hooks/useTodos';

type Props = {
  name: string
  isDone: boolean
  id: string
}

type IconIsDoneReturnStateReturn = {
  checkbox: "check-box-outline-blank" | "check-box"
  line: "none" | "line-through"
  bgColor: "transparent" | "gray.300"
}

const TodoItem: React.FC<Props> = ({ isDone, name, id }) => {
  const { handleDeleteTodo, handleMarkAsCompleted } = useTodos()

  const iconIsDoneReturnState = (): IconIsDoneReturnStateReturn => {
    if (!isDone) {
      return {
        checkbox: "check-box-outline-blank",
        line: "none",
        bgColor: "gray.300"
      }
    } else {
      return {
        checkbox: "check-box",
        line: "line-through",
        bgColor: "transparent"
      }
    }
  }

  const onDelete = (): void => {
    handleDeleteTodo(id)
  }

  const onPressMark = (): void => {
    handleMarkAsCompleted(id)
  }

  return (
    <HStack
      h="50px"
      justifyContent="space-between"
      bg={iconIsDoneReturnState().bgColor}
      w="100%"
      alignItems="center"
    >
      <Flex px='5' w="50%">

        <Button
          onPress={onPressMark}
          variant="unstyled"
          leftIcon={<Icon
            as={MaterialIcons}
            name={iconIsDoneReturnState().checkbox}
            color="blue.500"
          />}
          justifyContent="flex-start"
        >
          <Text 
          style={{ 
            textDecorationLine: iconIsDoneReturnState().line 
          
          }}
          >
            {name}
          </Text>
        </Button>
      </Flex>

      <Flex px='5' w="50%">
        <Button
          onPress={onDelete}
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