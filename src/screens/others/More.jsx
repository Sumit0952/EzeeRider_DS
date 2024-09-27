import { StyleSheet, Text, TouchableOpacity, View, Switch, Image } from 'react-native';
import React, { useState } from 'react';
import UserComponent from '../../components/UserComponent';
import { driver } from '../../utils/inputs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../utils/colors';
import { FlatList } from 'react-native-gesture-handler';
import { dimension } from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';

const More = () => {
  const [switchValues, setSwitchValues] = useState([false, false]); // State for switches
  const [selectedItem, setSelectedItem] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  


  const navigation = useNavigation();
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };


  
  const options = [
    { key: '1', title: 'Auto accept', hasSwitch: true,image: require('../../../assets/images/AutoAccept.png'),screen:'Profile' },
    { key: '2', title: 'My routeBooking', hasSwitch: true,image: require('../../../assets/images/MyRouteBooking.png'),screen:'Profile' },
    { key: '3', title: 'Manage Profile', hasSwitch: false,image: require('../../../assets/images/Manageprofile.png'),screen:'Profile'},
    { key: '4', title: 'Trip Activity', hasSwitch: false,image: require('../../../assets/images/TripActivity.png'),screen:'TripAct' },
    { key: '5', title: 'Documents', hasSwitch: false,image: require('../../../assets/images/Document.png') ,screen:'Profile'},
    { key: '6', title: 'Vehicles', hasSwitch: false,image: require('../../../assets/images/Vehicle.png') ,screen:'Profile'},
    { key: '7', title: 'Offers', hasSwitch: false,image: require('../../../assets/images/offers.png') ,screen:'Profile'},
    { key: '8', title: 'Bank details', hasSwitch: false,image: require('../../../assets/images/bank.png'),screen:'Bank Details' },
    { key: '9', title: 'Vidios for you', hasSwitch: false,image: require('../../../assets/images/Video.png'),screen:'Profile' },
    { key: '10', title: 'Emergency Contact', hasSwitch: false,image: require('../../../assets/images/sos.png'),screen:'Profile' },
    { key: '11', title: 'Logout', hasSwitch: false,image: require('../../../assets/images/logout.png') ,screen:'Profile'},
  ];

  const handleSwitchChange = (index) => {
    const newValues = [...switchValues];
    newValues[index] = !newValues[index];
    setSwitchValues(newValues);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <UserComponent />
        <Text>{driver.userId}</Text>
      </View>
      <View style={styles.details}>
        <Text>
          <Ionicons name='phone-portrait-sharp' size={15} /> Phone: {driver.PhoneNo}
        </Text>
        <Text>
          <FontAwesome name='map-marker' size={15} /> Zone: {driver.Address}
        </Text>
      </View>

      <FlatList
        data={options}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            
            style={[styles.option,selectedItem === item.key && styles.selectedOption,]}
            onPress={() => handlePress(item.screen)} // Handle item press
          >
            <View style={styles.transparentBox}>
              {/* Start Icon */}
              <Image source={item.image} style = {styles.icon}/>

              <View style={styles.textContainer}>
                <Text style={styles.optionText}>{item.title}</Text>
              </View>

              {/* Conditional Rendering of Switch or Arrow Icon */}
              {item.hasSwitch ? (
                <Switch
                  value={switchValues[index]}
                  onValueChange={() => handleSwitchChange(index)}
                />
              ) : (
                <Ionicons name='chevron-forward' size={20} style={styles.icon} />
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userContainer: {
    padding: 10,
    backgroundColor: '#dfe6fc',
    marginTop: '5%',
    marginLeft: '3%',
    marginRight: '3%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  details: {
    margin: 20,
  },
  option: {
    marginBottom: 10,
    //borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden', // Ensure the border radius applies correctly
  },
  transparentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Transparent white background
    borderRadius: 10,
  },
  icon: {
    fontSize:dimension.lg,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  optionText: {
    color: colors.textPrimary,
    fontSize: dimension.lg,
    
  },
  selectedOption: {
    borderWidth:1,
    //borderColor: '#0056F6', // Green border for selected item
    backgroundColor:'#dcfede'
  },
});
