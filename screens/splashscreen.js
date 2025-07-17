import { StyleSheet, Text, View,ImageBackground,Image } from "react-native";
import React, { useEffect } from "react";

import { createStaticNavigation,useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
    const navigation=useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
<Image source={require('./splashscreen.png')} style={styles.image} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image:{
    width: 184,
    height: 205,
    resizeImage: 'center'
  }
});