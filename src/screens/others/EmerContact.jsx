import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { dimension } from '../../utils/dimension';
import { colors } from '../../utils/colors';

const EmerContact = () => {
  // State to store the list of contacts
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Mr. Roy', phone: '+91 1234567890' }, // Example default contact
  ]);

  // Function to add a new empty contact card
  const addContact = () => {
    const newId = contacts.length + 1;
    setContacts([...contacts, { id: newId, name: `Contact ${newId}`, phone: 'Phone Number' }]);
  };

  // Function to render each contact card
  const renderContact = ({ item }) => (
    <View style={styles.row1}>
      <View style={styles.textContainer}>
        <Text style={[styles.heading, { fontWeight: '500' }]}>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
      <Entypo name='chevron-right' size={30} color='#666' style={[styles.chevronIcon, { paddingBottom: '5%' }]} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.Mainheading}>Emergency Contact</Text>
      <Text style={styles.subText}>Keep your friend and family in your</Text>
      <Text style={styles.subTextSmall}>emergency contact</Text>

      <TouchableOpacity style={styles.row} onPress={addContact}>
        <Text style={{ fontSize: dimension.xxl, color: colors.textPrimary }}>+</Text>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Add Emergency Contact</Text>
        </View>
        <Entypo name='chevron-right' size={30} color='#666' style={styles.chevronIcon} />
      </TouchableOpacity>

      {/* FlatList to dynamically render contact cards */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderContact}
      />
    </View>
  );
};

export default EmerContact;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 40,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  Mainheading: {
    fontSize: dimension.xl,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  heading: {
    fontSize: dimension.lg,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  subText: {
    fontSize: dimension.md,
    color: '#888888',
    marginVertical: 20,
  },
  subTextSmall: {
    fontSize: dimension.md,
    color: '#888888',
    marginTop: -20,
  },
  chevronIcon: {
    alignSelf: 'flex-end',
  },
});
