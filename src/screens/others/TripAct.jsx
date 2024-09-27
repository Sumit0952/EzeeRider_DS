import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


const tripData = [
  {
    date: "2024-09-17",
    earnings: 20.50,
    tripTime: "15 mins",
    distance: "5 km",
    pickup: "123 Main St, Springfield",
    dropoff: "456 Oak St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-18",
    earnings: 35.75,
    tripTime: "25 mins",
    distance: "12 km",
    pickup: "789 Pine St, Springfield",
    dropoff: "101 Maple St, Springfield",
    TripId:"782381263"

  },
  {
    date: "2024-09-19",
    earnings: 15.00,
    tripTime: "10 mins",
    distance: "3 km",
    pickup: "678 Elm St, Springfield",
    dropoff: "910 Cedar St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-20",
    earnings: 42.30,
    tripTime: "30 mins",
    distance: "15 km",
    pickup: "102 Birch St, Springfield",
    dropoff: "304 Walnut St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-21",
    earnings: 28.20,
    tripTime: "20 mins",
    distance: "8 km",
    pickup: "205 Ash St, Springfield",
    dropoff: "678 Beech St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-22",
    earnings: 50.75,
    tripTime: "35 mins",
    distance: "18 km",
    pickup: "314 Chestnut St, Springfield",
    dropoff: "910 Fir St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-23",
    earnings: 12.60,
    tripTime: "8 mins",
    distance: "2.5 km",
    pickup: "112 Redwood St, Springfield",
    dropoff: "221 Oak St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-24",
    earnings: 22.40,
    tripTime: "18 mins",
    distance: "6.5 km",
    pickup: "555 Spruce St, Springfield",
    dropoff: "101 Maple St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-25",
    earnings: 47.00,
    tripTime: "28 mins",
    distance: "13 km",
    pickup: "202 Magnolia St, Springfield",
    dropoff: "303 Poplar St, Springfield",
    TripId:"782381263"
  },
  {
    date: "2024-09-26",
    earnings: 18.90,
    tripTime: "12 mins",
    distance: "4 km",
    pickup: "404 Sycamore St, Springfield",
    dropoff: "505 Willow St, Springfield",
    TripId:"782381263"
  }
];

const TripAct = ({navigation}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress ={()=> navigation.navigate('TripDetails',{trip:item})}>
      <Text style={styles.date}>Date: {item.date}</Text>
      <Text>Earnings: ${item.earnings}</Text>
      <Text>Trip Time: {item.tripTime}</Text>
      <Text>Distance: {item.distance}</Text>
      <Text>Pickup: {item.pickup}</Text>
      <Text>Dropoff: {item.dropoff}</Text>
      <Text>TripID: {item.TripId}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tripData}
      renderItem={renderItem}
      keyExtractor={(item) => item.date}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TripAct;
