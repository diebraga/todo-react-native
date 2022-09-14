import { Flex, Text } from 'native-base';
import React from 'react';
import { useSplash } from '../../hooks/useSplash';
import { Splash } from '../Splash/Splash';
import { Header } from '../../components/Header/Header';
import TodoItem from '../../components/TodoItem/TodoItem';
import { useTodos } from '../../hooks/useTodos';
import { FlatList } from 'react-native';

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
      bg="gray.200"
      flex={1}
      onLayout={onLayoutRootView}
    >
      <Header />
      <Flex
        mt="70px"
        height="60%"
      >
        <FlatList
          data={todos}
          keyExtractor={item => (item.id)}
          ListEmptyComponent={() =>
            <Text>
              You don't have anybody listed in your event.
            </Text>
          }
          renderItem={({ item }) => <TodoItem key={item.id} {...item} />
          }
        />
      </Flex>
    </Flex>
  )
}

export default Home;