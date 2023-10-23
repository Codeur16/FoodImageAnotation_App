import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingSreen } from "../views/landingScreen";
import { HomeSreen } from "../views/Home";
import { AccueilSreen } from "../views/Annotation";
import { NotificationSreen } from "../views/Recommendation";
import { ParametreSreen } from "../views/Search";
import { LogoTitle } from "../components/logoTitle";
import { FontFamily } from "../../GlobalStyles";
import { HomeRoot } from "./HomeRoot";
const Stack = createNativeStackNavigator();

export default function MainRoot() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        unmountOnBlur: false,
        headerTitleStyle: {
          fontFamily: FontFamily.Salsa,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#29C752",
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarOptions: {
          style: {
            backgroundColor: "#ffff", // Remplacez 'votreCouleur' par la couleur de votre choix
          },
        },
      }}
    >
      <Stack.Screen
        name="Landing"
        component={LandingSreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeRoot"
        component={HomeRoot}
        options={{
          title: "FIAR",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#29C752",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: FontFamily.Salsa,
            fontSize: 25,
            fontWeight: "200",
          },
          
          headerLeft: (props) => <LogoTitle {...props} />,
        }}
      />
      {/* <Stack.Screen name="Accueil" component={AccueilSreen} />
      <Stack.Screen name="Parametre" component={ParametreSreen} />
      <Stack.Screen name="Notification" component={NotificationSreen} /> */}
    </Stack.Navigator>
  );
}
