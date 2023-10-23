import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, Image, View } from "react-native";
import { ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function SettingSreen() {
  // { route, navigation }) {
  // const { Id, Name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User Screen</Text>
      {/* <Text> User Id: {JSON.stringify(Id)}</Text>
      <Text> User Name: {JSON.stringify(Name)}</Text> */}
    </View>
  );
}
