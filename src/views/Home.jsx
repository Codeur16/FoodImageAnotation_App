import React from "react";
import { Platform, StyleSheet, Button, View, Text } from "react-native";
import { FontFamily } from "../../GlobalStyles";
import Navbar from "../components/Navbar";
import SearchBar from "../components/searchBar";
import AutoScrollImageSlider from "../components/AutoSrool";

// function d'un autre ecran de navigation

export function HomeSreen({ navigation }) {
  // on utilise la fonction useEffect pour charger le composant une seule fois au chargement du component

  return (
    <View style={styles.container} className="bg-white">
      <View style={styles.container0} className=" bg-slate-0 ">
        <SearchBar />
      </View>
      <View style={styles.container1}>
        <View
          style={{ 
            // backgroundColor: "rgba(0, 0, 0, 0.3)" ,
            backgroundColor:'rgba(41, 199, 82, 0.3)'

          }}
          className=" absolute w-full h-full z-10"
        ></View>
        <AutoScrollImageSlider />
      </View>
      <View style={styles.container2} className=" content-center items-center ">
        <Button title="bout"  className=" bg-orange-600 w-80 h-14 m-1 radius"><Text>boot1</Text></Button >
        <Button  title="bout" className=" bg-lime-500 w-80 h-14 m-1"><Text>boot1</Text></Button >
      </View>
      <View style={styles.container3}>
        {/* <Navbar navigation={navigation} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "block",
    height: "100%",
    width: "100%",

    // ...Platform.select({
    //   web: {
    //     backgroundColor: 'lightblue',
    //   }})

    // justifyContent:'center',
    // alignItem:'center'
  },
  container0: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    position: "absolute",
  },
  container1: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItem: "center",
    top: 67,
  },
  container2: {
    width: "100%",
    height: 400,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
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
