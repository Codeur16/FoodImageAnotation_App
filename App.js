import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, Image, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import logo from './src/assets/images/icon.512.png';
import tw from 'tailwind-react-native-classnames';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'



// function d'un autre ecran de navigation 

function LandingSreen(){
  const navigation= useNavigation();
  useEffect(() => {
    // Naviguer automatiquement vers Ecran2 après un délai de 2 secondes (2000 ms)
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    // N'oubliez pas de nettoyer le timer pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  });
    return (
      <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" duration={1000} style={styles.imageContainer}>
                  <Image
                    source={logo}
                    style={{ width: 200, height: 200 }}
                  />
            </Animatable.View>
            
            <Text style={styles.text}> Food Annotation</Text>

            <Text> </Text>
            <ActivityIndicator color="#ffff" size="large" />
            <StatusBar style={{backgroundColor:'#29C752'}} />
           
      </View>
    );
  
}
function HomeSreen({navigation}){
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Accueil' onPress={()=>{navigation.navigate('Accueil',{
        Id:80,
        Name:"loico"
      })}} />
      {/* <Button title='premiere page' onPress={()=>{navigation.popToTop()}} /> */}
      <Text>count:{count}</Text>
    </View>
  );

}
function AccueilSreen({route, navigation}){
  const { Id, Name}= route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Accueil</Text>
      <Text> User Id: {JSON.stringify(Id)}</Text>
      <Text> User Name: {JSON.stringify(Name)}</Text>
      <Button title='Back to landing page' onPress={()=>{navigation.goBack()}} />
    </View>
  );

}

// naviger automatiquement d'un ecran vers un autre



function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={logo}
    />
  );
}

// create the stack navigator const 
const Stack = createNativeStackNavigator();




//function principale
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Landing' screenOptions={{headerTitleAlign: "center", headerStyle:{
          backgroundColor:'#29C752',
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        } }}>
       
        <Stack.Screen name='Landing' component={LandingSreen}  options={{ headerShown: false }}/>
        <Stack.Screen 
          name='Home' 
          component={HomeSreen} 
          options={
            {
               
              title:'Home',
              headerTitleAlign: "center", 
              headerStyle:{
                 backgroundColor:'#29C752',
              },
              headerTintColor:'#ffff',
              headerTitleStyle:{
                fontWeight:'bold'
             },
             headerTitleAlign: "left",
            //  headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
            headerLeft: (props) => <LogoTitle {...props} />
           }} 
         />
        <Stack.Screen name='Accueil' component={AccueilSreen} 
        //  options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
         />
        <Stack.Screen name="Home0">
  {(props) => <HomeSreen {...props} extraData={someData} />}
</Stack.Screen>
       </Stack.Navigator>
    </NavigationContainer>
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29C752',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontWeight:'800',   
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'flex-start', // Align the image to the left
  },
});
   

