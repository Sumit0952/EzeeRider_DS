import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';

const HelpScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const helpOptions = [
    { id: '1', title: 'Found an item in the ride' },
    { id: '2', title: 'Issue with the customer' },
    { id: '3', title: 'Payment issue' },
    { id: '4', title: 'I was involved in an accident' },
    { id: '5', title: 'Cash deposit issue', },
    { id: '6', title: 'Vehicle Verification issue', },
    { id: '7', title: 'Vehicle Verification rejected', },
    { id: '8', title: 'Support tickets',  },
    { id: '9', title: 'App issue',  },
  ];

  const filteredOptions = helpOptions.filter((option) =>
    option.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const sendEmail = () => {
    const email = 'sumitkumar.200259@gmail.com';
    const subject = 'Help Request';
    const body = 'Provide your Credentials, Ride Details and Explain your Problem and attact screenshort if any '; 
    
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    Linking.openURL(mailtoURL)
      .catch(err => console.error('Error opening email app', err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={sendEmail}>
      <Text style={styles.title}>{item.title}</Text>
      <Ionicons name='chevron-forward' size={20} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#888" 
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <Text style={styles.header}>Get Help</Text>
      <Text style={styles.subHeader}>What issue do you need help with?</Text>
      <FlatList
        data={filteredOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginLeft: 16,
    height: 40,
    color:colors.textPrimary
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: colors.textPrimary,
  },
  subHeader: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 16,
    color:colors.textSecondary
  },
  title: {
    fontSize: 18,
    color: colors.textPrimary,
  },
});

export default HelpScreen;
