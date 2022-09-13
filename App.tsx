import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import Home from "./src/screens/Home/Home";
import { TodosProvider } from "./src/hooks/useTodos";


export default function App() {
  return (
    <NativeBaseProvider>
      <TodosProvider>
        <Home />
      </TodosProvider>
    </NativeBaseProvider>
  );
}

