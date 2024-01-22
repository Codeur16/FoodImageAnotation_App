import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  ToastAndroid,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { TextInput, Button } from "react-native-paper";
import { FontFamily } from "../../GlobalStyles";
import { url } from "../globalConfig/networkConfig"




//Ecran d'inscription

export const SignupSreen = () => {




 // declaration des etats 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMessage, setisLoadingMessage] = useState("Inscription");
  const [isValidEmail, setisValidEmail]=useState(false);
  const [isValidPassword,setisValidPassword]=useState(false)
  const [isValidConfirmPassword, setisValidConfirmPassword]=useState(false)

  const customFont = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 34,
    fontSize: 16,
  };


  // Validation des email et password

  const validateEmail=()=>{
    const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    const passwordReg = /^.{4,}$/;
    setisValidEmail(emailReg.test(email));
    setisValidPassword(passwordReg.test(password));
    if(password === Confirmpassword){ setisValidConfirmPassword(true); console.log(isValidConfirmPassword)}else{
      setisValidConfirmPassword(false)
    }}

  
  // Handle validation
  useEffect(()=>{validateEmail()});


  




  // Handle submit

  const handleSignup = () => {

    if( isValidEmail && isValidPassword && isValidConfirmPassword){
    setisLoading(true);
    setisLoadingMessage("Traitement");
    const user = { name: name, email: email, password: password };
    console.log(user);
    axios
      .post(url+"/api/user/signup", user)
      .then((user) => {
        if (user.data.data) {
          console.log("user connected");
          console.log(
            "\nMessage:\n" + user.data.message,
            "\n Data: \n " + user
          );

          ToastAndroid.show(user.data.message, ToastAndroid.LONG);
          navigation.navigate("login");
        }
        console.log(user);
      })
      .catch((e) => {
        setisLoading(false);
        setisLoadingMessage("Inscription");
        ToastAndroid.show("Erreur de reseau, veillez ressayer !!", ToastAndroid.LONG);
        console.log(e);
      });
    }else{
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

      if (!isValidConfirmPassword) { ToastAndroid.show(
        `Les Mots de passe ${password} et ${Confirmpassword} ne correspondents pas!!!`,
        ToastAndroid.LONG
      );
       
        return;
      }
    }
  };






  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className=" items-start text-3xl font-bold mt-12 font-salsa text-default ">
        😎 Bienvenue 🥳
      </Text>
      <Text className="text-l font-medium mb-12 font-salsa text-slate-800 ">
        Enregister vous pour continuer
      </Text>

      <View className="relative w-64 ">
        <TextInput
          className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4`}
          mode="outlined"
          label="Nom"
          placeholder="Enter votre nom"
          right={<TextInput.Affix />}
          value={name}
          onChangeText={setName}
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
        />
        <TextInput
          className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4`}
          mode="outlined"
          label="Email"
          placeholder="Enter votre email"
          right={<TextInput.Affix />}
          value={email}
          onChangeText={setEmail}
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
        />

        <View className="relative w-64 ">
          <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4 `}
            mode="outlined"
            label="Mot de passe"
            placeholder="Entrer Mot de passe"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          />
          <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4 `}
            mode="outlined"
            label="Confirmer votre Mot de passe"
            placeholder="Entrer Mot de passe"
            secureTextEntry={!showPassword}
            value={Confirmpassword}
            onChangeText={setConfirmPassword}
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

      {/*  soumission du form */}
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
        onPress={handleSignup}
      >
        {isLoadingMessage}
      </Button>

      <View className="flex flex-row  justify-center items-center">
        <Text className=" w-auto text-slate-500  text-md font-medium ">
          J'ai deja un compte?
        </Text>
        <TouchableOpacity
          className="bg-none w-auto h-12  justify-center mx-2 items-center py-2"
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text className="text-default  text-xl font-medium ">
            Se connecter
          </Text>
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

        }