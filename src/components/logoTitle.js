import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { ActivityIndicator } from "react-native";
import logo from "../assets/images/icon.512.png";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function LogoTitle() {
  return <Image style={{ width: 50, height: 50 }} source={logo} />;
}
