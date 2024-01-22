import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert,SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import {
  TextInput,
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import { Input } from "@rneui/themed";
import { DropDown } from "react-native-paper-dropdown";

export const AnnotationSreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [selectI, setSelectI] = useState("");
  const [Language] = useState(["java", "js", "python"]);
  const [age, setAge] = React.useState("");

  //   const [borderColor, setBorderColor] = useState("gray-300");
  const handleSignup = () => {
    const user = { name: name, email: email, password: password };
    // console.log(user);
    axios
      .post("http://192.168.43.235:3000/api/user/signup", user)
      .then((user) => {
        if (user.data.data) {
          console.log("user connected");
          console.log(
            "\nMessage:\n" + user.data.message,
            "\n Data: \n " + user
          );
          Alert.alert(user.data.message);
          navigation.navigate("login");
        }
        console.log(user);
      })
      .catch((e) => {
        Alert.alert("Erreur lors de la connexion ! \n veillez reessayer");
        console.log(e);
      });
  };
  const selectedItem = {
    title: "Selected item title",
    description: "Secondary long descriptive text ...",
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-20 font-salsa text-default">
        Enregistrer un Repas
      </Text>

      <View className="w-60 justify-center items-center content-center ">
        {/* <Picker
          style={{ marginVertical: 10 }}
          placeholder="selection"
          selectedItem={selectI}
          onValueChange={(item) => {
            setSelectI(item);
          }}
        >
          {Language.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
        </Picker> */}

        <TextInput
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          className="my-2 w-64 bg-white  "
          style={{ borderColor: "white" }}
          mode="outlined"
          label="Nom"
          placeholder="Nom du repas"
          right={<TextInput.Affix text="" />}
        />

        <TextInput
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          className="my-2 w-64 bg-white  "
          style={{ borderColor: "white" }}
          mode="outlined"
          label="Nom"
          placeholder="Nom du repas"
          right={<TextInput.Affix text="" />}
        />
        <TextInput
          theme={{ colors: { primary: "rgba(41, 199, 82, 1)" } }}
          className="my-2 w-64 bg-white  "
          style={{ borderColor: "white" }}
          mode="outlined"
          label="Classe de voyage"
          placeholder="VIP"
          right={<TextInput.Affix text="" />}
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 rounded px-4 py-2"
        onPress={handleSignup}
      >
        <Text className="text-white">Inscription</Text>
      </TouchableOpacity>
    </View>
  );
};
