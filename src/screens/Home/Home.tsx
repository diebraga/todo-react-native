import { Flex } from 'native-base';
import React from 'react';
import { useSplash } from '../../hooks/useSplash';
import { Splash } from '../Splash/Splash';
import { Header } from '../../components/Header/Header';
import TodoItem from '../../components/TodoItem/TodoItem';
import { useTodos } from '../../hooks/useTodos';

const Home: React.FC = () => {
  const { appIsReady, onLayoutRootView } = useSplash()
  const { todos } = useTodos()

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

      <Flex
        mt="70px"
      >
        {todos.map(todo => <TodoItem key={todo.id} />)}
      </Flex>
    </Flex>
  )
}

export default Home;