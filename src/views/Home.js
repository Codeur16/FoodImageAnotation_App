import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Button,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { FontFamily } from "../../GlobalStyles";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchBar";
import AutoScrollImageSlider from "../components/AutoSrool";
import { useNavigation } from "@react-navigation/core";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
  Fontisto,
  FontAwesome6 
} from "@expo/vector-icons";
import { AnnotationSreen } from "./Food";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import Couleur from "../utils/color"
// function d'un autre ecran de navigation

export function HomeSreen({ navigation }) {
  // on utilise la fonction useEffect pour charger le composant une seule fois au chargement du component


const [food, setFood]=useState([{
 foodId:1,
 nom:"food1",
  preference:10,
  capacite:2
},
{
  foodId:2,
  nom:"food2",
   preference:5,
   capacite:3
 },
  {
    foodId:3,
    nom:"food3",
    preference:15,
    capacite:5
  },
  {
    foodId:4,
    nom:"food4",
    preference:2,
    capacite:5
  },
  {
    foodId:5,
    nom:"food5",
    preference:1,
    capacite:6
  },
  {
    foodId:6,
    nom:"food6",
    preference:4,
    capacite:7
  },
  {
    foodId:7,
    nom:"food7",
    preference:3,
    capacite:8
  },
  
])
const [boisson, setBoisson]=useState([{
  drintId:1,
  nom:"drink1",
  preference:1,
  capacity:2
},
{
  drintId:2,
  nom:"drink2",
  preference:1,
  capacity:2
},
])



  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection:'column',
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={true}
    >
      <View style={styles.container} className="bg-white">
        <View className=" bg-white ">{/* <SearchBar /> */}</View>

        <View style={styles.container1} className="  w-full  rounded-b-xl ">
          <Pressable
            style={styles.container00}
            className="w-1/2 h-14  mt-48 ml-3 "
            onPress={() => {
              navigation.navigate("Food");
            }}
          >
            <View style={styles.shadow} className="bg-white ">
              <Ionicons name="fast-food-sharp" size={24} color="#29c752" />
            </View>
            <Text
              style={{
                fontFamily: FontFamily.Poppins,
                color: "rgba(0, 0, 0, 0.5)",
              }}
              className=" mx-10 color-default font-medium  text-l "
            >
              Ajouter un repas
            </Text>
            {/* <Ionicons name="md-arrow-redo-sharp" size={30} color="#29C752" /> */}
          </Pressable>
          <View
            style={{
              // backgroundColor: "rgba(0, 0, 0, 0.3)" ,
              backgroundColor: "rgba(41, 199, 82, 0.3)",
              zIndex: 1,
            }}
            className=" w-full h-full absolute   rounded-b-xl"
          ></View>
          <View className="absolute" style={{ marginTop: -255 }}>
            <AutoScrollImageSlider />
          </View>
        </View>
        <View
          style={styles.container2}
          className=" content-center items-center  "
        >
         
        </View>
      </View>

      {/* Card */}

      <View className=" flex flex-col bg-white justify-start items-center w-full h-auto" >
            <View className=" m-2 flex-row w-80 h-auto rounded-lg border border-none shadow-black opacity-100 shadow-lg outline-cyan-500 bg-slate-400" style={styles.carte}>
              {/* <View className="bg-slate-300 w-1/3 h-full rounded-lg"></View> */}
              <View className=" bg-slate-200 w-full h-38   flex-col rounded-lg items-start">
                <Text className=" ml-2 underline pt-2 text-2xl " style={{ fontFamily:FontFamily.Poppins, color:Couleur.Green9 , height:"auto"}}>Title</Text>
                <Text className=" ml-2 text-l text-left" style={{ fontFamily:FontFamily.Poppins, color:Couleur.Black4 , height:"auto" , minHeight:'50%'}} >Description</Text>
                <View className="flex-row h-auto items-start justify-end content-end">
                   {/* <FontAwesome6 name="location-dot" size={24} color="black" /> */}
                   <Ionicons name="location" size={24} color={Couleur.Green9}  />
                   <Text className=" pt-1 justify-end items-center " style={{fontFamily:FontFamily.Poppins, color:Couleur.Black4, height:"auto"}}>Origine</Text>

                </View>
              </View>
            </View>
           
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carte:{
    fontFamily:FontFamily.Poppins,
    marginTop: '-90%',
    borderRadius:50,
    display: "flex",
    flexDirection: "row",
    backgroundColor: Couleur.Green2,
    borderRadius: 5,
    shadowColor: Couleur.Black1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, // Pour Android
    justifyContent: "space-around",
    alignItems: "center",
    ...Platform.select({
      web: {
        backgroundColor: "white",
        // width:"20%",
        height: 50,
        margin: 10,
      },
    }),
    zIndex: 2,
  },
  shadow: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  container00: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, // Pour Android
    justifyContent: "space-around",
    alignItems: "center",
    ...Platform.select({
      web: {
        backgroundColor: "white",
        // width:"20%",
        height: 50,
        margin: 10,
      },
    }),
    zIndex: 2,
  },

  container: {
    // display: "flex",
    // flexDirection: "col",
    // alignItem: "center",
    // justifyContent: "flex-start",
    width: "100%",
    // marginTop:-200

    // ...Platform.select({
    //   web: {
    //     backgroundColor: 'lightblue',
    //   }})

    // justifyContent:'center',
    // alignItem:'center'
  },
  container0: {
    width: "100%",
  },
  container1: {
    width: "100%",
    height: 200,
  },
  container2: {
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //   alignItem:'center',
  },
  container3: {
    display: "flex",
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    ...Platform.select({
      web: {
        width: "auto",
      },
    }),

    // alignItem: "flex-end",
  },
});
