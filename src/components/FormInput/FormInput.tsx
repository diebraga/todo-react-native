import { HStack, IconButton, Input } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const FormInput: React.FC = () => {
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
    />
    <TouchableOpacity>
      <IconButton
        _icon={{
          as: <MaterialIcons name="chevron-right" size={62} />,
          name: "Enter",
          size: 'lg',
          color: "gray.700"
        }}
        variant="unstyled"
        h="16"
        w="12"
        bg="gray.100"
        borderLeftWidth="1px"
        borderLeftColor="gray.200"
      />
    </TouchableOpacity>
  </HStack>
  )
}

