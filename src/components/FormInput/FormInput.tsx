import { Button, HStack, IconButton, Input } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTodos } from '../../hooks/useTodos';
import uuid from 'react-native-uuid';
import { TodoItem } from '../../@types/todo';

export const FormInput: React.FC = () => {
  const [name, setName] = useState("")
  const { handleAddNewTodo } = useTodos()

  const newTodo: TodoItem = {
    id: uuid.v1() as string,
    name,
    isDone: false
  }

  const onSubmit = () => {
    if (name.length < 1 || name.length > 100) return
    handleAddNewTodo(newTodo)
  }

  return (
    <HStack
      w="100%"
      mb="-7"
    >
      <Input
        variant="filled"
        placeholder="Add new todo"
        h="16"
        flex={1}
        _focus={{ bg: "gray.100", borderColor: "purple.800" }}
        value={name}
        onChangeText={setName}
      />
      <Button
        onPress={onSubmit}
        variant="unstyled"
        bg="gray.100"
        borderLeftWidth="1px"
        borderLeftColor="gray.200"
        rightIcon={<MaterialIcons name="chevron-right" size={22} />}
      >
      </Button>
    </HStack>
  )
}

