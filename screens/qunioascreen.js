import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation,useNavigation} from '@react-navigation/native';

const QuinoaSaladScreen=()=> {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={20} color="#27214D" />
          <Text style={styles.backText}>Go back</Text>
        </TouchableOpacity>
        <Image
          source={require('./quinoafruitsalad.png')}
          style={styles.foodImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Quinoa Fruit Salad</Text>
        <View style={styles.counterRow}>
          <TouchableOpacity style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>1</Text>
          <TouchableOpacity style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.price}>₦ 2,000</Text>
        </View>

        <Text style={styles.subtitle}>One Pack Contains:</Text>
        <Text style={styles.ingredients}>
          Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
        </Text>

        <Text style={styles.description}>
          If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you.
        </Text>

        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart-outline" size={24} color="#FFA451" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.basketButton}
            onPress={() => navigation.navigate('BasketScreen')}
          >
            <Text style={styles.basketButtonText}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA451',
  },
  header: {
    alignItems: 'center',
    paddingTop: 32,
  },
  backButton: {
    position: 'absolute',
    top: 64,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#202020',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.1,
    shadowRadius: 60,
  },
  backText: {
    color: '#27214D',
    fontSize: 14,
    marginLeft: 4,
  },
  foodImage: {
    width: 176,
    height: 176,
    marginTop: 24,
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    marginTop: 32,
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#27214D',
    marginBottom: 16,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  counterButton: {
    borderWidth: 1,
    borderColor: '#FFA451',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  counterText: {
    fontSize: 16,
    color: '#27214D',
  },
  count: {
    fontSize: 16,
    color: '#27214D',
  },
  price: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#27214D',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#27214D',
    marginBottom: 8,
  },
  ingredients: {
    fontSize: 16,
    color: '#27214D',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginBottom: 24,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heartButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#FFA451',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF7F0',
  },
  basketButton: {
    backgroundColor: '#FFA451',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  basketButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default QuinoaSaladScreen;
