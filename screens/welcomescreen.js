
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation,useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Image source={require('./group61.png')} style={styles.image} />
      <View style={styles.bottomContainer}>
        <Text style={styles.headerText}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.subText}>
          We deliver the best and freshest fruit salad in town. Order for a combo today!!!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Let’s Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFA451',
  },
  image: {
    width: '100%',
    height: 425,
    resizeMode: 'contain',
  },
bottomContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'BrandonGrotesque-Medium',
    color: '#27214D',
    textAlign: 'center',
    marginBottom: 8,
  },
subText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'BrandonGrotesque-Regular',
    color: '#5D577E',
  
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFA451',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
export default WelcomeScreen;