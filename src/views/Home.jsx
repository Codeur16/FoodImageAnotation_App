import React from "react";
import { Platform, StyleSheet, Button, View } from "react-native";
import { FontFamily } from "../../GlobalStyles";
import Navbar from "../components/Navbar";

// function d'un autre ecran de navigation

export function HomeSreen({ navigation }) {
  // on utilise la fonction useEffect pour charger le composant une seule fois au chargement du component

  return (
    <View style={styles.container} className="bg-white">
      <View style={styles.container1}>
        <Button
          title="Accueil"
          onPress={() => {
            navigation.navigate("Accueil", {
              Id: 80,
              Name: "loico",
            });
          }}
        />
      </View>
      <View style={styles.container2}></View>
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
  container1: {
    width: "100%",
    height: "33%",
    justifyContent: "center",
    alignItem: "center",
  },
  container2: {
    width: "100%",
    height: "57%",
    //   justifyContent:'center',
    //   alignItem:'center',
  },
  container3: {
    display:'flex',
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
    ...Platform.select({
      web: {
        width:"auto",
        
      }})
   
    // alignItem: "flex-end",
  },
});

