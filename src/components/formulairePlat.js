// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);

  

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }


import React, { useState, useEffect } from "react";
import { StyleSheet, View,Button, Text, TextInput,Pressable, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons, Feather,MaterialIcons } from "@expo/vector-icons";
import('@tensorflow/tfjs-backend-cpu');
import('@tensorflow/tfjs-backend-webgl');
const cocoSsd = import('@tensorflow-models/coco-ssd');
import { FontFamily } from "../../GlobalStyles";


export default function Form() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [origine, setOrigine] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

 const handleSubmit = async () => {
  // (async () => {
    // const img = document.getElementById('img');
  
    // Load the model.
    const model = await cocoSsd.load();
  
    // Classify the image.
    const predictions = await model.detect(image);
  
    console.log('Predictions: ');
    console.log(predictions);
  // })();

  // const options = {
  //   method: 'POST',
  //   mode: "no-cors",
  //   headers: {'Content-Type': 'application/json',  Accept: 'application/json'},
  //   body: '{"nom":"ndoleee","description":"bon","origine":"237","type":"Entree","image":"https://example.com/images/soupe_aux_pois.jpg"}'
  // };
  
  // await fetch('http://localhost:4000/api/newplat', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));


  // try {
  //   const response = await fetch('http://192.168.49.1:4000/api/newplat', {
  //     mode: "no-cors",
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       nom,
  //       description,
  //       origine,
  //       type,
  //       image: image,
  //     }),
  //   });
    
  //   if (response.ok) {
  //     const result = await response.json();
  //     console.log(result);
  //     Alert.alert("Le plat a été enregistré");
  //   } else {
  //     console.error('Réponse du serveur avec un statut non-ok :', response.status);
  //     Alert.alert("Erreur lors de l'enregistrement du plat");
  //   }
  // } catch (error) {
  //   console.error('Erreur lors de la requête Fetch :', error);
  //   Alert.alert("Erreur lors de la requête Fetch");
  // }
  
  };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
  
//     if (!result.canceled) {
//       setImage(result);
//     }
//   };
  
async function getPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access image library is required!");
    }
  }
  // function to picked image

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
    
      setImage(result.assets[0].uri);
    }

    

  };

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
    })();  })


    // Note: import the cpu and webgl backend and add them to package.json as peer dependencies.




  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Nom"
            value={nom}
            onChangeText={text => setNom(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Description"
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Origine"
            value={origine}
            onChangeText={text => setOrigine(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Type"
            value={type}
            onChangeText={text => setType(text)}
          />
        </View>
        {/* <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.imageButtonText}>Choisir une image</Text>
        </TouchableOpacity> */}
         <Pressable style={styles.pressable} className=" "
          onPress={pickImage}>
            <Ionicons name="cloud-upload" size={70} color="#29c7" />
            <Text
              style={{ fontFamily: FontFamily.Laila, color: "#29c7" }}
              className="font-bold text-2xl"
            >
              Upload a food Image
            </Text>
          </Pressable>
        {image && (
          <View>
            <Image source={{ uri: image }} style={{width:100, height:100}} />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Soumettre</Text>
            </TouchableOpacity>
          </View>
        )}
      
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  inputContainer: {
    marginTop: 10,
    width: "80%",
  },
  inputField: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F5FCFF",
    marginBottom: 10,
    width: "80%",
  },
  imageButton: {
    backgroundColor: "#200",
    marginTop: 10,
  },
  imageButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    marginBottom: 10,
  },
  imagePreview: {
    width: "80%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

























// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import axios from 'axios';

// const FormulairePlat = () => {
//   const [nom, setNom] = useState('');
//   const [description, setDescription] = useState('');
//   const [origine, setOrigine] = useState('');
//   const [type, setType] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = () => {
//     const plat = {
//       nom,
//       description,
//       origine,         
//       type,
//       image,
//     };

//     axios.post('https://example.com/api/endpoint', plat)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Nom"
//         value={nom}
//         onChangeText={text => setNom(text)}
//       />
//       <TextInput
//         placeholder="Description"
//         value={description}
//         onChangeText={text => setDescription(text)}
//       />
//       <TextInput
//         placeholder="Origine"
//         value={origine}
//         onChangeText={text => setOrigine(text)}
//       />
//       <TextInput
//         placeholder="Type"
//         value={type}
//         onChangeText={text => setType(text)}
//       />
//       <TextInput
//         placeholder="Image"
//         value={image}
//         onChangeText={text => setImage(text)}
//       />
//       <Button title="Envoyer" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default FormulairePlat;
