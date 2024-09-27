import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { colors } from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const RideCompleted = () => {
  const [rating, setRating] = useState(0);
    const navigation = useNavigation();
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>₹500</Text>
          <Text style={styles.cashText}>Cash to collect</Text>
        </View>
        
        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Subtotal:</Text>
            <Text style={styles.summaryValue}>₹600</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Discount:</Text>
            <Text style={styles.summaryValue}>- ₹100</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Wallet:</Text>
            <Text style={styles.summaryValue}>- ₹0</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Time:</Text>
            <Text style={styles.detailValue}>15 mins</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Distance:</Text>
            <Text style={styles.detailValue}>5 km</Text>
          </View>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>Rate your customer</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                <MaterialIcons
              name={rating >= star ? 'star' : 'star'}
              size={40}
              color={rating >= star ? '#FFD700' : '#1c1b1f'}
            />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
      </View>
      <View style={{ width: '100%', alignItems: 'center', alignSelf: 'center' }}>
  <TouchableOpacity style={{ height: 50, backgroundColor: '#24a665', width: '90%', justifyContent: 'center', alignItems: 'center',borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10, }}>
    <Text style={{ color: 'white',fontSize:18 }}>Get ready for the next ride</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

export default RideCompleted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  box: {
    width: '90%',
    height:"60%",
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  amountText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  cashText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  summaryContainer: {
    paddingTop:20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryItem: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'flex-start',
  },
  summaryLabel: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  detailsContainer: {
    paddingTop:40,
    paddingLeft:70,
    paddingRight:70,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'flex-end',
  },
  detailItem: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailLabel: {
    color:colors.textPrimary,
    fontSize: 18,
    
  },
  detailValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  ratingLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
  },
});
