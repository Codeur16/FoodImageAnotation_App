import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  ToastAndroid,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { TextInput, Button } from "react-native-paper";
import { FontFamily } from "../../GlobalStyles";
import { url } from "../globalConfig/networkConfig"
import { openDatabase } from 'expo-sqlite';



//Ecran d'inscription

export const SignupSreen = () => {




 // declaration des etats 
  const [prenom, setprenom] = useState("");
  const [age, setage] = useState("");
  const [Confirmage, setConfirmage] = useState("");
  const [name, setName] = useState("");
  const [sexe, setsexe] = useState(null);
  const [type, setType] = useState("")
  const [showage, setShowage] = useState(false);
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMessage, setisLoadingMessage] = useState("Inscription");
  const [isValidprenom, setisValidprenom]=useState(false);
  const [isValidage,setisValidage]=useState(false)
  const [isValidConfirmage, setisValidConfirmage]=useState(false)
  const isAndroid = Platform.OS === "android";
  const customFont = {
    fontFamily: FontFamily.Salsa, // Remplacez 'VotrePolice' par le nom réel de votre police
    letterSpacing: 1,
    fontWeight: "bold",
    lineHeight: 34,
    fontSize: 16,
  };


  // Validation des prenom et age

  const validateprenom=()=>{
    const prenomReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    const ageReg = /^.{1,}$/;
    setisValidprenom(prenomReg.test(prenom));
    setisValidage(ageReg.test(age));
    if(age === Confirmage){ setisValidConfirmage(true); console.log(isValidConfirmage)}else{
      setisValidConfirmage(false)
    }}

  
  // Handle validation
  useEffect(()=>{validateprenom()});


  




  // Handle submit


  

  const db = openDatabase('Food.db');
  
 const ajouterPersonne = (nom, prenom, age, sexe, type) => {
    db.transaction(
      tx => {
        tx.executeSql('INSERT INTO personnes (nom, prenom, age, sexe, type) VALUES (?, ?, ?, ?, ?)', [nom, prenom, age, sexe, type]);
      },
      null,
      () => console.log('Personne ajoutée avec succès')
    );
  };

  const handleSignup = async() => {
    // if( isValidprenom && isValidage && isValidConfirmage){
      navigation.navigate("HomeRoot");
    setisLoading(true);
    setisLoadingMessage("Traitement");
    
    await ajouterPersonne(name, prenom,age,sexe,type)
    .then((res)=> { ToastAndroid.show(user.data.message, ToastAndroid.LONG);  setisLoading(false);
         setisLoadingMessage("Inscription");} )
    // const user = { name: name, prenom: prenom, age: age, sexe:sexe , type:type };
    // console.log(user);
    // axios
    //   .post(url+"/api/user/signup", user)
    //   .then((user) => {
    //     if (user.data.data) {
    //       console.log("user connected");
    //       console.log(
    //         "\nMessage:\n" + user.data.message,
    //         "\n Data: \n " + user
    //       );

    //       isAndroid && ToastAndroid.show(user.data.message, ToastAndroid.LONG);
    //       navigation.navigate("login");
    //     }
    //     console.log(user);
    //   })
    //   .catch((e) => {
    //     setisLoading(false);
    //     setisLoadingMessage("Inscription");
    //     isAndroid && ToastAndroid.show("Erreur de reseau, veillez ressayer !!", ToastAndroid.LONG);
    //     console.log(e);
    //   });
    // }else{
    //   if (!isValidprenom) { isAndroid && ToastAndroid.show(
    //     `Adresse prenom ${prenom} est invalide! doit etre sous la forme nom@messagerie.domaine`,
    //     ToastAndroid.LONG
    //   ); return; }
    //   if (!isValidage) { isAndroid && ToastAndroid.show(
    //     `Le Mot de passe ${age} doit avoir a moins 4 caracteres`,
    //     ToastAndroid.LONG
    //   );
       
    //     return;
    //   }

    //   if (!isValidConfirmage) { isAndroid && ToastAndroid.show(
    //     `Les Mots de passe ${age} et ${Confirmage} ne correspondents pas!!!`,
    //     ToastAndroid.LONG
    //   );
       
    //     return;
    //   }
    // }
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
          label="prenom"
          placeholder="Enter votre prenom"
          right={<TextInput.Affix />}
          value={prenom}
          onChangeText={setprenom}
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
        />

        <View className="relative w-64 ">
          <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4 `}
            mode="outlined"
            label="age"
            placeholder="age"
            // secureTextEntry={!showage}
            value={age}
            onChangeText={setage}
            theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          />
          <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4 `}
            mode="outlined"
            label="F/H"
            placeholder="F/H"
            // secureTextEntry={!showage}
            value={sexe}
            onChangeText={setsexe}
            theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          />
           <TextInput
            className={`w-64  text-l text-black bg-white text-default border-white rounded mb-4 `}
            mode="outlined"
            label="Etudiant / Enseignant"
            placeholder="Etudiant / Enseignant"
            // secureTextEntry={!showage}
            value={type}
            onChangeText={setType}
            theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          />
          {/* <TouchableOpacity
            className="absolute top-4 right-2 "
            onPress={() => setShowage(!showage)}
          >
            <Feather
              name={showage ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity> */}
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
