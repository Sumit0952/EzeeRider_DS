import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, TextInput, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dimension } from '../../utils/dimension';
import { colors } from '../../utils/colors';

const EmerContact = () => {
  // State to store the list of contacts
  const [contacts, setContacts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });

  // Load contacts from storage when the component mounts
  useEffect(() => {
    loadContacts();
  }, []);

  // Function to load contacts from AsyncStorage
  const loadContacts = async () => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      }
    } catch (error) {
      console.log('Error loading contacts: ', error);
    }
  };

  // Function to save contacts to AsyncStorage
  const saveContacts = async (contacts) => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log('Error saving contacts: ', error);
    }
  };

  // Function to add a new contact
  const addContact = () => {
    if (newContact.name && newContact.phone) {
      const newId = contacts.length + 1;
      const updatedContacts = [...contacts, { id: newId, ...newContact }];
      setContacts(updatedContacts);
      saveContacts(updatedContacts); // Save to AsyncStorage
      setNewContact({ name: '', phone: '' });
      setIsModalVisible(false);
    } else {
      Alert.alert('Please fill in both fields');
    }
  };

  // Function to delete a contact
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveContacts(updatedContacts); // Save updated list to AsyncStorage
  };

  // Function to render each contact card
  const renderContact = ({ item }) => (
    <TouchableOpacity onLongPress={() => deleteContact(item.id)} style={styles.row1}>
      <View style={styles.textContainer}>
        <Text style={[styles.heading, { fontWeight: '500' }]}>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
      <Entypo name='chevron-right' size={30} color='#666' style={[styles.chevronIcon, { paddingBottom: '5%' }]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.Mainheading}>Emergency Contact</Text>
      <Text style={styles.subText}>Keep your friend and family in your</Text>
      <Text style={styles.subTextSmall}>emergency contact</Text>

      <TouchableOpacity style={styles.row} onPress={() => setIsModalVisible(true)}>
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

      {/* Modal for adding new contact */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={newContact.name}
              onChangeText={(text) => setNewContact({ ...newContact, name: text })}
            />
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              keyboardType="phone-pad"
              value={newContact.phone}
              onChangeText={(text) => setNewContact({ ...newContact, phone: text })}
            />
            <TouchableOpacity style={styles.addButton} onPress={addContact}>
              <Text style={styles.addButtonText}>Add Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: colors.textPrimary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#ff0000',
  },
});
