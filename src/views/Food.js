import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  ToastAndroid,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { TextInput, Button } from "react-native-paper";
import { FontFamily } from "../../GlobalStyles";
import { url } from "../globalConfig/networkConfig";
import ImagePickerComponent from "../components/ImagePicker";
import Couleur from "../utils/color";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FoodSreen = () => {
  const [preference, setpreference] = useState("");
  const [name, setName] = useState("");
  const [origine, setOrigine] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMessage, setisLoadingMessage] = useState("Enregistrer");
  const isAndroid = Platform.OS === "android";

  const customFont = {
    fontFamily: FontFamily.Poppins,
    letterSpacing: 0,
    lineHeight: 34,
    fontSize: 18,
  };

  const getLocaData = async (key) => {
    let res = await AsyncStorage.getItem(key);
    return res;
  };
  // let id = await getLocaData("userId")
  //  console.log("ID= "+id)
const resetValue=()=>{
  setpreference("");
  setName("");
  setOrigine("");
  setImage("");
}
  // Enregistrement des repas
  const handleRegister = async () => {
    let id = await getLocaData("userId");
    let token = await getLocaData("userToken");
    let userId = parseInt(id);
    console.log("ID= " + userId + " >TYpe: " + typeof userId);

    setisLoading(true);
    setisLoadingMessage("Traitement");
    const Plat = {
      name: name,
      preference: preference,
      origine: origine,
      image: image,
    };
    console.log(Plat);
    axios
      .post(url + "/api/food/" + userId + "/create", Plat, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const user = response.data;
        if (user.data) {
          console.log("user connected");
          console.log(
            "\nMessage:\n" + user.message,
            "\n Data: \n " + JSON.stringify(user.data)
          );
          setisLoading(false);
          setisLoadingMessage("Enregistrer");
          resetValue();
          navigation.navigate("Home");
          isAndroid && ToastAndroid.show(user.message, ToastAndroid.SHORT);
        }
        console.log(user);
      })
      .catch((error) => {
        setisLoading(false);
        setisLoadingMessage("Connexion");
        isAndroid &&
          ToastAndroid.show("Erreur d enregistrement", ToastAndroid.SHORT);
        console.log(error);
      });
  };

  const customFontStyle = {
    fontFamily: FontFamily.Poppins,
    color: Couleur.Black5,
    fontSize: 15,
  };
  const customFont3 = {
    fontFamily: FontFamily.Poppins, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 20,
    fontSize: 18,
    color: "white",
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={true}
    >
      <View
        style={{
          width: "200%",
          height: 900,
          top: "2%",
          alignItems: "center",
          alignContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <View className=" w-64 content-start items-center ">
          <Text
            className=" items-start text-2xl font-medium mt-12 mb-12 "
            style={{ color: Couleur.Black5, fontFamily: FontFamily.Poppins }}
          >
            Enregister un Plat 🍽️
          </Text>
        </View>
        <TextInput
          className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4`}
          mode="outlined"
          label="Nom du name"
          placeholder="Enter votre nom"
          right={<TextInput.Affix />}
          value={name}
          onChangeText={setName}
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          contentStyle={customFontStyle}
        />
        <TextInput
          dense="true"
          className={`w-64  h-24 text-l text-slate-700  bg-white border-white rounded mb-4`}
          mode="outlined"
          label="preference"
          // disabled
          // error
          placeholder="preference"
          right={<TextInput.Affix />}
          value={preference}
          onChangeText={setpreference}
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          contentStyle={customFontStyle}
        />
        <TextInput
          className={`w-64 text-l text-black bg-white text-default border-white rounded mb-4`}
          mode="outlined"
          label="Espace"
          placeholder="origine"
          right={<TextInput.Affix />}
          value={origine}
          onChangeText={setOrigine}
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          contentStyle={customFontStyle}
        />
        <View className="w-full justify-center items-center">
          {/* <ImagePickerComponent onChange={setImage} /> */}

          <Button
            className="w-64  mt-4"
            icon="plus"
            labelStyle={customFont}
            mode="contained"
            theme={{
              colors: { primary: "rgba(41, 199, 82, 1)" },
              roundness: 1,
            }}
            loading={isLoading}
            onPress={handleRegister}
          >
            {isLoadingMessage}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   shadow: {
//     borderRadius: 50,
//     width: 200,
//     height: 200,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "rgba(0, 0, 0, 0.5)",
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     margin: 20,
//   },
//   pressable: {
//     backgroundColor: "white",
//     display: "flex",
//     flexDirection: "colum",
//     justifyContent: "space-around",
//     alignItems: "center",
//     width: 300,
//     height: 250,
//     marginTop: 20,
//     borderRadius: 5,
//     borderStyle: "dashed", // Le style de bordure
//     borderWidth: 2, // L'épaisseur de la bordure
//     borderColor: "#29c7", // La couleur de la bordure
//     borderRadius: 5, // Le rayon de la bordure
//     padding: 10, // L'espacement intérieur
//   },
// });
