import { Flex, HStack, Switch } from 'native-base';
import { useColorMode } from 'native-base';
import React from 'react';

// import { Container } from './styles';

export const ToggleDarkMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      alignItems="flex-end"
      w="100%"
      marginTop="20"
      h="100px"
    >
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
    </Flex>
  );
}

