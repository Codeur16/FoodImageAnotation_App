<<<<<<< HEAD
import React, { isValidElement, useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Alert,ToastAndroid } from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import {
  HelperText,
  TextInput,
  Button,
  configureFonts,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url } from "../globalConfig/networkConfig"


      







const LoginScreen = () => {


=======
import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { TextInput } from 'react-native-paper';

export const LoginScreen = () => {
>>>>>>> 6e55108f84c9fadbefd6cf211a37deca252ea923
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
<<<<<<< HEAD
  const [tinkMe, setTinkMe] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMessage, setisLoadingMessage] = useState("Connexion");
  const [isValidEmail, setisValidEmail]=useState(false);
  const [isValidPassword,setisValidPassword]=useState(false)
  const customFont = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 34,
    fontSize: 16,
  };
 
  // save token
const SaveToken = async (token) => {
  if(tinkMe){
  try{
    await AsyncStorage.setItem('userToken', token);
    }catch(e){
      console.log("error saving userToken: ", e);
      }
    }
      }
// validate inputs
  const validateEmail=()=>{
    const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    const passwordReg = /^.{4,}$/;
    setisValidEmail(emailReg.test(email));
    setisValidPassword(passwordReg.test(password))
     
}
  
  // Handle validation
  useEffect(()=>{validateEmail()});

  //handleLogin
  const handleLogin = () => {

    if (!isValidEmail) { ToastAndroid.show(
      `Adresse email ${email} est invalide! doit etre sous la forme nom@messagerie.domaine`,
      ToastAndroid.LONG
    ); return; }
    if (!isValidPassword) { ToastAndroid.show(
      `Le Mot de passe ${password} doit avoir a moins 4 caracteres`,
      ToastAndroid.LONG
    );
     
      return;
    }
    // if (!hasErrors()) {
      setisLoading(true);
      setisLoadingMessage("Traitement");
      // return navigation.navigate("HomeRoot");
      const user = { email: email, password: password };

      console.log(user);
      axios
        .post(url+"/api/user/login", user)
        .then((response) => {
          const user = response.data;
          if (user.data) {
            console.log("user connected");
            console.log(
              "\nMessage:\n" + user.message,
              "\n Data: \n " + JSON.stringify(user.data)
              
            );
            let data= JSON.stringify(user.token)
            console.log("TOKEN: "+data)
            SaveToken(data)
            ToastAndroid.show(user.message, ToastAndroid.SHORT );
            navigation.navigate("HomeRoot");
          }
          console.log(user);
        })
        .catch((error) => {
          setisLoading(false);
          setisLoadingMessage("Connexion");
          ToastAndroid.show('Information mal formé!', ToastAndroid.SHORT );
          console.log(error);
        });
    // } else {
    //   ToastAndroid.show('Information mal formé!', ToastAndroid.SHORT );
     
    // }
  };
  const onChangeText = (email) => setEmail(email);
  const [focusEmail, setfocusEmail]=useState(false);
  return (
    <View className="flex-1 justify-start items-center bg-white">
      <Text className=" items-start text-3xl font-bold mt-12 font-salsa text-default ">
        😎 Hereux de vous revoir 🥳
      </Text>
      <Text className="text-l font-medium mb-12 font-salsa text-slate-800 ">
        Connecter vous pour continuer
      </Text>

      <View className="relative w-64 ">
        <View className="flex flex-col mb-4">
          <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded `}
            mode="outlined"
            label="Email input"
            placeholder="Enter your email"
            right={<TextInput.Affix />}
            value={email}
            onFocus={setfocusEmail}
            onPress={setfocusEmail}
            onChangeText={onChangeText}
            theme={{
              colors: {
                primary: "rgba(41, 199, 82, 1)"
              },
            }}
          />
          {/* { isValidEmail &&  <HelperText type="error" >
            Email address is invalid!
          </HelperText> } */}
        </View>

        <View className="relative w-64 ">
          <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded mb-8 `}
            mode="outlined"
            label="Password input"
            placeholder="Mot de passe"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          />
          <TouchableOpacity
            className="absolute top-4 right-2 "
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center mb-4">
        <TouchableOpacity
          className="mr-2"
          onPress={() => {
            setTinkMe(!tinkMe);
          }}
        >
          {!tinkMe ? (
            <MaterialCommunityIcons
              name="square-outline"
              size={20}
              color="black"
            />
          ) : (
            <Feather
              name="check-square"
              size={20}
              color="rgba(41, 199, 82, 1)"
            />
          )}
        </TouchableOpacity>
        <Text className="text-gray-600">Se souvenir de moi</Text>
      </View>
     
      <Button
      className="w-64"
        icon="login"
        labelStyle={customFont}
        mode="contained"
        theme={{
          colors: { primary: "rgba(41, 199, 82, 1)" },
          roundness: 1,
         
        }}
        loading={isLoading}
        buttonColor="rgba(41, 199, 82, 1)"
        onPress={handleLogin}
      >
        {isLoadingMessage}
      </Button>
      <View className="flex flex-row  justify-center items-center">
        <Text className=" w-auto text-slate-500  text-md font-medium ">
          Je suis nouveau?
        </Text>
        <TouchableOpacity
          className="bg-none w-auto h-12  justify-center mx-2 items-center py-2"
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Text className="text-default  text-xl font-medium  ">S'inscrire</Text>
        </TouchableOpacity>
      </View>

      {/* Footer -------------------------------- */}
      <View
        style={{
          marginTop: 90,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 10, color: "black" }}>Powered by</Text>
        <Text
          style={{
            color: "black",
            fontWeight: 500,
            fontSize: 20,
            fontFamily: FontFamily.Plento,
          }}
        >
          NTCL-tech
        </Text>
      </View>
    </View>
  );
};

module.exports={ LoginScreen }
=======
  const handleLogin = () => {
    const user = { email: email, password: password}
    // console.log(user);
    axios.post("http://192.168.43.235:3000/api/user/login", user)
    .then((user)=>{
        if(user.data.data){
            console.log("user connected");
            console.log("\nMessage:\n"+user.data.message, "\n Data: \n "+user)
            Alert.alert(user.data.message)
            navigation.navigate("HomeRoot");   
        }
        console.log(user)
    })
    .catch((e)=>{
        Alert.alert("Erreur lors de la connexion ! \n veillez reessayer")
        console.log(e);
    })

  };

  return (
    <View className="flex-1 justify-center items-center">
       <Text className="text-3xl font-bold mb-20 font-salsa text-default" >Connexion</Text>
      
    <TextInput
        className={`w-64 h-12 p-2 border text-l text-black border-gray-300 rounded mb-6`}
        mode="Email"
        label="Email input"
        placeholder="Enter your email"
        right={<TextInput.Affix text="/100" />}
        // value={email}
    />
      <View className="relative w-64">
        <TextInput
           className={`w-64 h-10 p-2 border text-l text-black border-gray-300 rounded mb-6`}
          placeholder="Mot de passe"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="absolute top-2 right-2"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mb-4">
        <TouchableOpacity className="mr-2">
          <Feather name="check-square" size={20} color="gray" />
        </TouchableOpacity>
        <Text className="text-gray-600">Se souvenir de moi</Text>
      </View>
      <TouchableOpacity
        className="bg-blue-500 rounded px-4 py-2"
        onPress={handleLogin}
      >
        <Text className="text-white">Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};
>>>>>>> 6e55108f84c9fadbefd6cf211a37deca252ea923
