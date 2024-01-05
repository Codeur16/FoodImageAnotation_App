import React, { useEffect,useState } from "react";
import { Alert, Button, StyleSheet, Text, Style, Image, View } from "react-native";
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import img from '../assets/salmon.png';
export function RecommendationSreen(){
  // { route, navigation }) {
  // const { Id, Name } = route.params;
// Note: import the cpu and webgl backend and add them to package.json as peer dependencies.



  // Load the model.
  const model = cocoSsd.load();

  // Classify the image.
  const predictions = model.detect(img);

  console.log('Predictions: ');
  console.log(predictions);

  return (
    <View style={{ flex: 1, height:100, alignItems: "center", justifyContent: "center" }} className="w-full h-full bg-white">
      <Text>Recommendation</Text>
      <Image
        source={import('../assets/salmon.png')} // Remplacez par le chemin de votre image
        style={{width:200, height:200 }}
      />
    </View>
  );
}




