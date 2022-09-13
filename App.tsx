import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import { Splash } from "./src/screens/Splash/Splash";


export default function App() {
  return (
    <NativeBaseProvider>
      <Splash />
    </NativeBaseProvider>
  );
}

