import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import Home from "./src/screens/Home/Home";
import { TodosProvider } from "./src/hooks/useTodos";
import { StatusBar } from "react-native";


export default function App() {
  return (
    <NativeBaseProvider>
      <TodosProvider>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor="transparent"
        />
        <Home />
      </TodosProvider>
    </NativeBaseProvider>
  );
}

