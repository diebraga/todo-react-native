import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import { Splash } from "./src/screens/Splash/Splash";
import Home from "./src/screens/Home/Home";


export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}

