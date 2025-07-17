/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

import {SafeAreaView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStaticNavigation,useNavigation} from '@react-navigation/native';

import WelcomeScreen from './screens/welcomescreen.js'
import LoginScreen from './screens/loginscreen.js'
import HomeScreen from './screens/homescreen.js'
import QuinoaSaladScreen from './screens/qunioascreen.js'
import BasketScreen from './screens/basketscreen.js'
import SplashScreen from './screens/splashscreen.js'






const Stack = createNativeStackNavigator();

function RootStack(){
  return(
  
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}
    >
    <Stack.Screen name="Auth" component={AuthStack}/>
    <Stack.Screen name="Homestack" component={HomeStack}/>

</Stack.Navigator>
    );
  
}

function AuthStack(){

  return(
  
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
   
</Stack.Navigator>
    );
  
}

function HomeStack(){
  return(
  
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Quinoa" component={QuinoaSaladScreen}/>
    <Stack.Screen name="Basket" component={BasketScreen}/>

</Stack.Navigator>
    );
  
}




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (

    <NavigationContainer>
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <RootStack />
  </View>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
