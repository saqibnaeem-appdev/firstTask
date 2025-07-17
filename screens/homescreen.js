import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation,useNavigation} from '@react-navigation/native';

const recommendedData = [
  {
    id: '1',
    title: 'Honey lime combo',
    price: '₦ 2,000',
    image: require('./honeylimecombo.png'),
  },
  {
    id: '2',
    title: 'Berry mango combo',
    price: '₦ 8,000',
    image: require('./berrymangocombo.png'),
  },
];

const hottestData = [
  {
    id: '3',
    title: 'Quinoa fruit salad',
    price: '₦ 10,000',
    image: require('./quinoafruitsalad.png'),
    bg: '#FFF7E8',
  },
  {
    id: '4',
    title: 'Tropical fruit salad',
    price: '₦ 10,000',
    image: require('./tropicalfruitsalad.png'),
    bg: '#FFEFEF',
  },
  {
    id: '5',
    title: 'Melon fruit salad',
    price: '₦ 10,000',
    image: require('./melonfruitsalad.png'),
    bg: '#F0F0FF',
  },
];

const  HomeScreen=()=> {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.greetingText}>
            Hello Tony, <Text style={styles.bold}>What fruit salad combo do you want today?</Text>
          </Text>
          <TouchableOpacity style={styles.basketContainer} onPress={() => navigation.navigate('Basket')}>
            <Image source={require('./fa_shopping-basket.png')} style={styles.basketIcon} />
            <Text style={styles.basketText}>My basket</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#999" style={{ marginLeft: 12 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for fruit salad combos"
            placeholderTextColor="#999"
          />
          <Ionicons name="options-outline" size={20} color="#070648" style={{ marginRight: 12 }} />
        </View>

        <Text style={styles.sectionTitle}>Recommended Combo</Text>
        <FlatList
          data={recommendedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>Hottest</Text>
        <FlatList
          data={hottestData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.id === '3') {
                  navigation.navigate('QuinoaSalad');
                }
              }}
              style={[styles.card, { backgroundColor: item.bg }]}
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
              {item.id === '3' && (
                <View style={styles.plusIcon}>
                  <Ionicons name="add" size={20} color="#FFA451" />
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingHorizontal: 21,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    width: 257,
    fontSize: 18,
    color: '#27214D',
  },
  bold: {
    fontWeight: 'bold',
  },
  basketContainer: {
    alignItems: 'center',
  },
  basketIcon: {
    width: 41,
    height: 42,
    resizeMode: 'contain',
  },
  basketText: {
    fontSize: 10,
    color: '#27214D',
  },
  searchBarContainer: {
    marginTop: 20,
    height: 56,
    backgroundColor: '#F3F3F3',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 8,
    color: '#070648',
  },
  sectionTitle: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: '600',
    color: '#27214D',
  },
  card: {
    width: 152,
    borderRadius: 16,
    backgroundColor: '#FFF',
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#FFA451',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#27214D',
  },
  cardPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#FFA500',
  },
  plusIcon: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
  },
});
export default HomeScreen;
