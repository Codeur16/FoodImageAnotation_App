import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { ActivityIndicator } from "react-native";
import logo from "./src/assets/images/icon.512.png";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Root } from "./src/Root";
import MainRoot from "./src/routes/MainRoot";
import { NativeWindStyleSheet } from "nativewind";
import  "./nativewind-output" ;
import {useFonts} from "expo-font";

// process(css).then(cb => {
//   // Votre code asynchrone ici
//   NativeWindStyleSheet.setOutput({
//     default: "native",
//   });
// });


//function principale gestion de l'effet principale
export default function App() {
  const [fontsLoaded, error]=useFonts({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "NorthZone": require("./assets/fonts/NorthZone.otf"),
    "salsa":require("./assets/fonts/Salsa-Regular.ttf"),
    "laila":require("./assets/fonts/Laila-Light.ttf"),
    "Ubuntu":require("./assets/fonts/Ubuntu-Light.ttf"),
    "plento":require("./assets/fonts/PLENTO.ttf")
  }); 
  if (!fontsLoaded && !error) {
    return null;
  }
 


  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
