// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerComponent() {
//   const [image, setImage] = useState(null);
//   async function getPermission() {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
//     if (status !== 'granted') {
//       alert('Permission to access image library is required!');
//     }
//   }

// async function pickImage() {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
  
//     if (!result.canceled) {
//       if (result.assets && result.assets.length > 0) {
//         // Access the selected asset's URI from the assets array
//         const selectedImageURI = result.assets[0].uri;
//         setImage(result.assets[0].uri);
//         console.log(selectedImageURI);
//         // You can also upload the image to a server or display it in your UI.
//       }
//     }
//   }
  
//     useEffect(() => {
//         (async () => {
//         if (Platform.OS !== 'web') {
//             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//             // const { status } = await ImagePicker.requestCameraPermissionsAsync();
//             if (status !== 'granted') {
//             alert('Sorry, we need camera roll permissions to make this work!');
//             // alert('Sorry, we need camera permissions to make this work!');
//             }
//         }
//         })();
//     }, []);  

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  Image,
  View,
  Platform,
  Pressable,
  StyleSheet,
  Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Ionicons, Feather,MaterialIcons } from "@expo/vector-icons";
import { FontFamily } from "../../GlobalStyles";



export default function ImagePickerComponent({ onChange }) {
  const [image, setImage] = useState(null);
  // Platform permission
  async function getPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access image library is required!");
    }
  }
  // function to picked image
  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }else{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      // aspect: [4, 3],
      // quality: 1,
    });
// console.log("Image:  << "+result.assets[0].uri +" >>")
// console.table(result.assets[0])
// const formdata= new FormData()
    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        // Access the selected asset's URI from the assets array
        const selectedImageURI = result.assets[0].uri;
        setImage(result.assets[0].uri);
        onChange && onChange(result.assets[0].uri);
        // console.log(selectedImageURI);
        // You can also upload the image to a server or display it in your UI.
      }
    }

  
  
  }
  }



  
  
 









  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        // const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
          // alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
  }, []);

  return (
    <View
      style={{
        
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
      }}
    >
      {!image ? (
        <View className="w-full h-auto items-center">
         
          <Text
            style={{
              fontFamily: FontFamily.Poppins,
              color: "rgba(0, 0, 0, 0.5)",
            }}
            className="italic mt-1"
          >
            Selectionner une image de repas 
          </Text>
          {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
          <Pressable style={styles.pressable} className=" "
           onPress={pickImage}>
            <Ionicons name="cloud-upload" size={40} color="#29c7" />
            <Text
              style={{ fontFamily: FontFamily.Laila, color: "#29c7" }}
              className="font-bold text-l"
            >
              Upload a food Image
            </Text>
          </Pressable>
        </View>
      ) : (
        <View className="w-full  items-center flex flex-col">
          
          <Image source={{ uri: image }} style={styles.shadow} />
         <View className="flex flex-row">
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "red",
            }}
            className="mt-0 p-1 w-auto h-auto  content-center items-center rounded-lg "
            onPress={() => {
              setImage(null)
            }}
          >
            <Text className="font-semibold text-2xlg h-auto w-auto color-white"></Text>
            <MaterialIcons name="delete" size={24} color="white" />
          </Pressable>
          {/* <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#29c752",
            }}
            className="m-1 w-1/2 h-auto  content-center items-center rounded-lg "
            onPress={() => {
              Alert.alert("Annotation Api")
              console.log("ok");
            }}
          >
            <Text className="font-semibold text-lg color-white">Pocessing</Text>
            <Feather name="chevrons-right" size={24} color="white" />
          </Pressable> */}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 50,
    width:100,
    height:100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    margin:20
  },
  pressable: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "colum",
    justifyContent: "space-around",
    alignItems: "center",
    width: '80%',
    height: 'auto',
    marginTop: 20,
    borderRadius: 5,
    borderStyle: "dashed", // Le style de bordure
    borderWidth: 2, // L'épaisseur de la bordure
    borderColor: "#29c7", // La couleur de la bordure
    borderRadius: 5, // Le rayon de la bordure
    padding: 10, // L'espacement intérieur
  },
});
