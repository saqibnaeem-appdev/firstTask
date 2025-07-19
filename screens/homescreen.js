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
  Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation,useNavigation} from '@react-navigation/native';
const {width, height}=Dimensions.get('window');
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
        <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#27214D" />
          </TouchableOpacity>
          <Text style={styles.greetingText}>
            Hello Tony, <Text style={styles.bold}>What fruit salad combo do you want today?</Text>
          </Text>
          <TouchableOpacity style={styles.basketContainer} onPress={() => navigation.navigate('Basket')}>
            <Image source={require('./fa_shopping-basket.png')} style={styles.basketIcon} />
            <Text style={styles.basketText}>My basket</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={width*(16/375)} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for fruit salad combos"
            placeholderTextColor="#999"
          />
          <Ionicons name="options-outline" size={width*(20/375)} color="#070648" />
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
              <View style={styles.plusIcon}><Ionicons name="add" size={width*(16/375)} color="#FFA451"/></View>
            </View>
          )}
        />

       
        
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
              <View style={styles.pluaIcon}><Ionicons name="add" size={width * (16 / 375)} color="#FFA451" /></View>
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
    paddingTop: height*(44/812),
    paddingHorizontal: width*(21/375),
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height*(16/812) 
   },
  greetingText: {
    width: width*(257/375),
    fontSize: 18,
    color: '#27214D',
  },
  bold: {
    fontWeight: 'bold',
  },
  basketContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: width*(8/375),
  },
  basketIcon: {
    width: width*(60/375),
    height: height*(60/812),
    resizeMode: 'contain',
  },
  basketText: {
    fontSize: 10,
    color: '#27214D',
  },
  searchBarContainer: {
    marginTop: height*(20/812),
    height: height*(56/812),
    backgroundColor: '#F3F3F3',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width*(8/375),
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: width*(8/375),
    color: '#070648',
  },
  sectionTitle: {
    marginTop: (32/812)*height,
    marginBottom: (12/812)*height,
    fontSize: 24,
    fontWeight: '500',
    color: '#27214D',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
    paddingRight: width * 0.05,
    marginTop: height*0.03
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#FFA451',
    paddingBottom: 4,
  },
  inactiveTab: {
    paddingBottom: 4,
  },
  activeTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27214D',
  },
  inactiveTabText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  card: {
    width: (152/375)*width,
    height: (183/812)*height,
    borderRadius: 16,
    backgroundColor: '#FFF',
    padding: (12/375)*width,
    marginRight: (12/375)*width,
    borderWidth: 1,
    borderColor: '#FFA451',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: height*(100/812),
    borderRadius: 12,
    resizeMode: 'cover',
  },
  cardTitle: {
    marginTop: height*(8/812),
    fontSize: 16,
    color: '#27214D',
  },
  cardPrice: {
    marginTop: height*(4/812),
    fontSize: 14,
    color: '#FFA500',
  },
  plusIcon: {
    position: 'absolute',
    bottom: height*(12/812),
    right: width*(12/375),
    width:width*(24/375),
    height: width*(24/375),
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  menuButton: {
    padding: 8,
  },
 
});
export default HomeScreen;
