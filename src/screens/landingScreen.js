import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet,Text, View,Image} from 'react-native';
import { ActivityIndicator } from 'react-native';
export default function LandingScreen() {
  return (
    <View style={styles.container}>
         <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <ActivityIndicator color='#ffff' size='large' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'rgb(2,0,36)',
    backgroundColor: "#86C724",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
