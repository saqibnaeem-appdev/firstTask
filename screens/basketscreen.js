import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '@react-navigation/elements';
import { createStaticNavigation,useNavigation} from '@react-navigation/native';

const basketItems = [
  {
    id: '1',
    title: 'Quinoa fruit salad',
    subtitle: '2packs',
    price: '₦ 20,000',
    image: require('./fa_shopping-basket.png'),
    bg: '#FFFAEB',
  },
  {
    id: '2',
    title: 'Melon fruit salad',
    subtitle: '2packs',
    price: '₦ 20,000',
    image: require('./melonfruitsalad.png'),
    bg: '#F0F0FF',
  },
  {
    id: '3',
    title: 'Tropical fruit salad',
    subtitle: '2packs',
    price: '₦ 20,000',
    image: require('./tropicalfruitsalad.png'),
    bg: '#FFEFEF',
  },
];

const BasketScreen=()=> {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>


        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={20} color="#000" />
            <Text style={styles.backText}>Go back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>My Basket</Text>
        </View>

        {basketItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <View style={[styles.imageContainer, { backgroundColor: item.bg }]}>
              <Image source={item.image} style={styles.itemImage} />
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}

        <View style={styles.footer}>
          <View>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>₦ 60,000</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => navigation.navigate('CheckoutScreen')}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 44,
  },
  header: {
    backgroundColor: '#FFA451',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#202020',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.1,
    shadowRadius: 60,
  },
  backText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 24,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#F4F4F4',
  },
  imageContainer: {
    width: 65,
    height: 64,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#27214D',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 32,
  },
  totalLabel: {
    fontSize: 14,
    color: '#27214D',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#27214D',
  },
  checkoutButton: {
    backgroundColor: '#FFA451',
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BasketScreen;
