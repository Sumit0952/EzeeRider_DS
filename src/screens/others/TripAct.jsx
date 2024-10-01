import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { dimension } from '../../utils/dimension';
import { colors } from '../../utils/colors';

const tripData = [
  {
    date: "2024-09-17",
    earnings: 20.50,
    tripTime: "15 mins",
    distance: "5 km",
    pickup: "123 Main St, Springfield",
    dropoff: "456 Oak St, Springfield",
    TripId:"7824381263"
  },
  {
    date: "2024-09-18",
    earnings: 35.75,
    tripTime: "25 mins",
    distance: "12 km",
    pickup: "789 Pine St, Springfield",
    dropoff: "101 Maple St, Springfield",
    TripId:"78234381263"

  },
  {
    date: "2024-09-19",
    earnings: 15.00,
    tripTime: "10 mins",
    distance: "3 km",
    pickup: "678 Elm St, Springfield",
    dropoff: "910 Cedar St, Springfield",
    TripId:"78238211263"
  },
  {
    date: "2024-09-20",
    earnings: 42.30,
    tripTime: "30 mins",
    distance: "15 km",
    pickup: "102 Birch St, Springfield",
    dropoff: "304 Walnut St, Springfield",
    TripId:"782546381263"
  },
  {
    date: "2024-09-21",
    earnings: 28.20,
    tripTime: "20 mins",
    distance: "8 km",
    pickup: "205 Ash St, Springfield",
    dropoff: "678 Beech St, Springfield",
    TripId:"7823814263"
  },
  {
    date: "2024-09-22",
    earnings: 50.75,
    tripTime: "35 mins",
    distance: "18 km",
    pickup: "314 Chestnut St, Springfield",
    dropoff: "910 Fir St, Springfield",
    TripId:"782381426263"
  },
  {
    date: "2024-09-23",
    earnings: 12.60,
    tripTime: "8 mins",
    distance: "2.5 km",
    pickup: "112 Redwood St, Springfield",
    dropoff: "221 Oak St, Springfield",
    TripId:"78235281263"
  },
  {
    date: "2024-09-24",
    earnings: 22.40,
    tripTime: "18 mins",
    distance: "6.5 km",
    pickup: "555 Spruce St, Springfield",
    dropoff: "101 Maple St, Springfield",
    TripId:"78263381263"
  },
  {
    date: "2024-09-25",
    earnings: 47.00,
    tripTime: "28 mins",
    distance: "13 km",
    pickup: "202 Magnolia St, Springfield",
    dropoff: "303 Poplar St, Springfield",
    TripId:"7823744181263"
  },
  {
    date: "2024-09-26",
    earnings: 18.90,
    tripTime: "12 mins",
    distance: "4 km",
    pickup: "404 Sycamore St, Springfield",
    dropoff: "505 Willow St, Springfield",
    TripId:"78238521263"
  }
];

const TripAct = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Daily');




  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TripDetails', { trip: item })}>
      <Text style={styles.date}>Date: {item.date}</Text>
      <Text style={{color:'#666'}}>Earnings: ${item.earnings}</Text>
      <Text style={{color:'#666'}}>Trip Time: {item.tripTime}</Text>
      <Text style={{color:'#666'}}>Distance: {item.distance}</Text>
      <Text style={{color:'#666'}}>Pickup: {item.pickup}</Text>
      <Text style={{color:'#666'}}>Dropoff: {item.dropoff}</Text>
      <Text style={{color:'#666'}}>TripID: {item.TripId}</Text>
    </TouchableOpacity>
  );

  return (
    
    <View style={{ flex: 1,backgroundColor:'#fff' }}>


<View style={styles.tabContainer}>
          <Text style={[styles.tabText, activeTab === 'Daily' && styles.activeTabText]} onPress={() => setActiveTab('Daily')}>Daily</Text>
          <Text style={[styles.tabText, activeTab === 'Weekly' && styles.activeTabText]} onPress={() => setActiveTab('Weekly')}>Weekly</Text>
          <Text style={[styles.tabText, activeTab === 'Monthly' && styles.activeTabText]} onPress={() => setActiveTab('Monthly')}>Monthly</Text>
          
          {/* <TouchableOpacity style={styles.filterButton}>
          <View style= {{flexDirection:'row'}}>
          <AntDesign name="filter" size={20} color="#0056f6" />
          <Text style={{color:'#0056f6'}}>Filter</Text>
          </View>
        </TouchableOpacity> */}
        
        </View>
          
        {/* Underline directly below the active tab */}
        <View style = {{flexDirection:'column'}}>
          
          <View style={[styles.underline, { left: activeTab === 'Daily' ? 0 : activeTab === 'Weekly' ? '25%' : '50%' }]} />
          
        </View>


      {/* Filter Section */}
      <View style={styles.filterSection}>
        <View style={styles.filterTextWrapper}>
          <Text style={styles.filterText}>16 Sep to 22 Sep <Entypo name='triangle-down' /></Text>
          <Text style={styles.filterText}>All Trips <Entypo name='triangle-down' /></Text>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Total</Text>
            <Text style={styles.summaryText}>₹7689</Text>
          </View>
          
          

          
        </View>

        {/* Time and Distance */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            <Image source={require('../../../assets/images/bike_blu.png')} style={styles.bikeIcon} />
            <Text style={styles.detailsText}>Total Time: 160 mins</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsText}>Total Distance: 65 km</Text>
          </View>

          <View style={styles.separator}/>

          <View style={styles.detailsRow}>
            <Image source={require('../../../assets/images/bike_blu.png')} style={styles.bikeIcon} />
            <Text style={styles.detailsText}>Total Time: 160 mins</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsText}>Total Distance: 65 km</Text>
          </View>
          <View style={styles.separator}/>

          <View style={styles.detailsRow}>
            <Image source={require('../../../assets/images/bike_blu.png')} style={styles.bikeIcon} />
            <Text style={styles.detailsText}>Total Time: 160 mins</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsText}>Total Distance: 65 km</Text>
          </View>
        </View>

        

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Total Earnings</Text>
            <Text style={styles.summaryText}>₹7689</Text>
          </View>
        </View>
      </View>

      

      {/* Trip List */}
      <FlatList
        data={tripData}
        renderItem={renderItem}
        keyExtractor={(item) => item.TripId}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  filterSection: {
    backgroundColor: '#dfe6fc',
    marginVertical: '5%',
  },
  filterTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  filterText: {
    margin: '2%',
    color: '#0056f6',
  },
  summaryContainer: {
    padding: 10,
  },
  summaryCard: {
    padding: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#D9D9D9',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#dfe6fc',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryText: {
    color: '#0056f6',
    fontSize: dimension.md,
  },
  detailsContainer: {
    padding: 10,
    borderColor: '#D9D9D9',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bikeIcon: {
    width: 40,
    height: 40,
  },
  detailsText: {
    color: colors.textPrimary,
    fontSize: dimension.md,
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
    color:'#666'
  },
  separator: {
    marginTop: 10,              // Adds space above the separator
    height: 1,                  // Height of the line
    backgroundColor: '#D9D9D9',     // Dark grey color for the separator line
    width: '100%',               // Takes the full width of the container
    marginHorizontal: 0,         // Centers the line by ensuring no side margins
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tabText: {
    fontSize: dimension.lg,
    color: colors.textPrimary,
    paddingVertical: 10,
    padding: dimension.lg,
    textAlign: 'center',
  },
  underline: {
    position: 'absolute',
    height: 4,
    width: '20%',
    backgroundColor: '#0056f6',
    bottom: 0,
    zIndex: -1,
  },
});

export default TripAct;
