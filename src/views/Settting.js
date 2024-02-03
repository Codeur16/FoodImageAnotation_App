import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  BackHandler,
  ToastAndroid,
} from "react-native";
import { ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function SettingSreen() {

  
  const navigation = useNavigation();


  const handleBackButton = async() => {
    console.log(AsyncStorage.getItem("userToken"));
    await AsyncStorage.removeItem("userToken");
    navigation.navigate("login");
    if (Platform.OS === "android") {
      ToastAndroid.show("Déconnexion réussie", ToastAndroid.SHORT);
    }
    // Fermez l'application

    BackHandler.exitApp();
    return true; // Empêche le comportement par défaut (retourner à l'écran précédent)
  };

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      className="bg-white"
    >
      <Text>Setting Screen</Text>
      <Button onPress={handleBackButton} title="LogOut"></Button>
    </View>
  );
}
