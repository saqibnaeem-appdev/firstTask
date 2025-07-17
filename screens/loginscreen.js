import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation,useNavigation} from '@react-navigation/native';
 const LoginScreen=() => {
    const navigation=useNavigation()
  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./group62.png')} style={styles.image} />
      <View style={styles.formContainer}>
        <Text style={styles.label}>What is your firstname?</Text>
        <TextInput
          style={styles.input}
          placeholder="Tony"
        />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Homestack')}>
          <Text style={styles.buttonText}>Start Ordering</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFA54F', 
      alignItems: 'center',
    },
    image: {
      width: 375,
      height: 425,
      marginTop: 44,
      resizeMode: 'contain',
    },
    formContainer: {
      width: 327,
      height: 199,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
      marginTop: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: '600',
      color: '#1C1243',
      marginBottom: 12,
    },
    input: {
      height: 101,
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#F5F4F6',
      paddingHorizontal: 16,
      fontSize: 18,
      color: '#1C1243',
      marginBottom: 12,
      justifyContent: 'center',
    },
    button: {
      height: 56,
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#FFA54F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 18,
    },
  });
  export default LoginScreen;
  