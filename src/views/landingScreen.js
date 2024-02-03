import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, Image, View,  ToastAndroid  } from "react-native";
import { ActivityIndicator } from "react-native";
import logo from "../assets/images/icon.512.png";
import food1 from "../assets/images/ellipse-1.png";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";
import { FontFamily } from "../../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StyledView = styled(View);
const StyledText = styled(Text);



// function d'un autre ecran de navigation

export function LandingSreen() {
  const [userToken, setUserToken]=useState(null);
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // Fonction pour vérifier si l'utilisateur est déjà connecté
const checkIfUserIsLoggedIn =  () => {

   AsyncStorage.getItem("userToken")
  .then((token)=>{
    setUserToken(token);
    console.log(">>TOKEN:"+userToken+">>token="+token)
    checkUserStatusOnAppStart(token)
  })
  .catch((e)=>{console.error(e)})
     
 

};

// utilisation au démarrage de l'application
const checkUserStatusOnAppStart = async (token) => {
  
  if (token!=null) {
    // Utilisateur déjà connecté, procédez en conséquence
    ToastAndroid.show(
      `\n Redirection Automatique \n`,
      ToastAndroid.LONG)
      // setIsLoggedIn(isLoggedIn)
      return navigation.navigate("HomeRoot");
   
  } else {
    // Redirigez vers l'écran de connexion
    // setIsLoggedIn(isLoggedIn)
    ToastAndroid.show(
      `Nouveau utilisateur !!`,
      ToastAndroid.LONG)
   return  navigation.navigate("AuthRoot"); 
  }
};

  useEffect(() => {
   
    // Naviguer automatiquement vers Ecran2 après un délai de 2 secondes (2000 ms)
    const timer = setTimeout(() => {
      checkIfUserIsLoggedIn()
      navigation.navigate("AuthRoot");        
    }, 6000);

    // N'oubliez pas de nettoyer le timer pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  },[]);

  return (
    <View style={styles.container}>
      <StyledView style={styles.container1} className="">
        <StyledText style={styles.StyledText.title2}> FIAR</StyledText>
        <StyledText style={styles.StyledText.title}>
          {" "}
          Food Image Annotation and Recommendation
        </StyledText>
      </StyledView>
      <StyledView style={styles.container2}>
        <Animatable.View
          animation="fadeInLeft"
          duration={1500}
          style={styles.imageContainer}
        >
          <Image source={logo} style={{ width: 200, height: 200 }} />
        </Animatable.View>
        <ActivityIndicator color="#ffff" size="large" />
      </StyledView>
      <StyledView style={styles.container3} className="w-full">
        <StyledView style={styles.image}>
          {Platform.OS === "web" ? (
            <></>
          ) : (
            <>
              <Image source={food1} className="w-full h-40 " />
            </>
          )}
        </StyledView>
      </StyledView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "block",
    backgroundColor: "#29C752",
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
    height: "33%",
    //   justifyContent:'center',
    //   alignItem:'center',
  },
  container3: {
    width: "100%",
    height: "34%",
    // justifyContent: "center",
    // alignItem: "flex-end",
  },
  StyledText: {
    title: {
      color: "#ffff",
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 17,
      //  marginBottom:'150px',
      //  marginTop:'-200px',
      fontFamily: FontFamily.Poppins,
      textAlign: "center",
    },
    title2: {
      color: "#ffff",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 35,
      //  marginBottom:'150px',
      //  marginTop:'-240px',
      fontFamily: FontFamily.North,
      textAlign: "center",
      padding: "15px",
    },
  },
  image: {
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "colum",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    alignItems: "center", // Align the image to the left
  },
  cover: {
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    // backgroundColor:'rgba(41, 199, 82, 0.25)',
    width: "100%",
    height: "100%",
    marginBottom: 0,
    marginLeft: 0,
    position: "absolute",
  },
});
