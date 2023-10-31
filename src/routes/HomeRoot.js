import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";
// Thanks for watching
import {
  HomeSreen,
  RecommendationSreen,
  AnnotationSreen,
  SearchSreen,
  SettingSreen,
} from "../views/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.09)",
    // borderColor: "rgba(41, 199, 82, 0.5)",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
    width: Platform.select({
      ios: "100%",
      android: "100%",
      web: "100%",
    }),
    left: Platform.select({
      // web: "10%",
    }),


  },
};

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

export function HomeRoot() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
     
      <Tab.Screen
        name="Annotation"
        component={AnnotationSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0.15)",
                        flex: 1,
                        width: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 110,
                        }),
                        height: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 100,
                        }),
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                {/* <Entypo
                  name="form"
                  size={24}
                  color={focused ? "#29C752" : "#111"}
                /> */}
                <AntDesign
                  name="form"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                />

                <Text
                  style={{
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: FontFamily.Salsa,
                  }}
                >
                  Annotation
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Recommendation"
        component={RecommendationSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0.15)",
                        flex: 1,
                        width: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 110,
                        }),
                        height: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 100,
                        }),
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                {/* <Entypo
                  name="wallet"
                  size={24}
                  color={focused ? "#29C752" : "#111"}
                /> */}
                <Ionicons
                  name="fast-food-sharp"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: FontFamily.Salsa,
                  }}
                >
                  Food
                </Text>
              </View>
            );
          },
        }}
      />
 <Tab.Screen
        name="Home"
        component={HomeSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#29C752",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -30,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  ...(focused
                    ? {
                        shadowColor: "#29C752",
                        shadowOffset: {
                          width: 2,
                          height: -1,
                        },
                        shadowRadius: 1,
                        elevation: 10,
                        shadowOpacity: 5,


                      }
                    : {}),
                }}
              >
                <Ionicons
                  name="ios-menu"
                  size={35}
                  color={focused ? "#FFF" : "rgba(0, 0, 0, 0.5)"}
                />
                <Text
                  style={{
                    position: "absolute",
                    fontSize:12,
                    color: "rgba(0, 0, 0, 0.4)",
                    fontFamily: FontFamily.North,
                    top: 63,
                    ...(focused?{
                      color:'rgba(41, 199, 82, 1)'
                    }:{})
                  }}
                >
                  HOME
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0.15)",
                        flex: 1,
                        width: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 110,
                        }),
                        height: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 100,
                        }),
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                {/* <MaterialIcons
                  name="stacked-line-chart"
                  size={24}
                  color={focused ? "#29C752" : "#111"}
                /> */}
                <Ionicons
                  name="search"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: FontFamily.Salsa,
                  }}
                >
                  Search
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingSreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: "rgba(41, 199, 82, 0.15)",
                        flex: 1,
                        width: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 110,
                        }),
                        height: Platform.select({
                          ios: "100%",
                          android: "100%",
                          web: 100,
                        }),
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={focused ? "#29C752" : "rgba(0, 0, 0, 0.7)"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: FontFamily.Salsa,
                  }}
                >
                  Settings
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
