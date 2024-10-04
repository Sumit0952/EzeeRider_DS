import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, Linking, PermissionsAndroid, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SOS = ({ isVisible, onClose }) => {
  const [savedPhoneNumber, setSavedPhoneNumber] = useState('');

  // Function to load the saved emergency contact number from AsyncStorage
  const loadSavedPhoneNumber = async () => {
    try {
      const contacts = await AsyncStorage.getItem('contacts');
      if (contacts !== null) {
        const parsedContacts = JSON.parse(contacts);
        // Assuming you want to use the first contact from the list
        if (parsedContacts.length > 0) {
          setSavedPhoneNumber(parsedContacts[0].phone);
        }
      }
    } catch (error) {
      console.log('Error loading emergency contact:', error);
    }
  };

  // Fetch the emergency contact when the modal becomes visible
  useEffect(() => {
    if (isVisible) {
      loadSavedPhoneNumber();
    }
  }, [isVisible]);

  // Function to dial the saved phone number directly
  const dialNumber = async () => {
    const url = `tel:${savedPhoneNumber}`;

    if (Platform.OS === 'android') {
      try {
        // Request permission to make the call
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
          {
            title: 'Call Permission',
            message: 'This app needs access to make phone calls',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        // If permission is granted, make the call directly
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Linking.openURL(url).catch(err => Alert.alert('Error', 'Unable to call the number.'));
        } else {
          Alert.alert('Permission Denied', 'Call permission was denied.');
        }
      } catch (err) {
        Alert.alert('Error', err.message);
      }
    } else {
      Linking.openURL(url).catch(err => Alert.alert('Error', 'Unable to call this number.'));
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Image source={require("../screens/exclam_red.png")} />
          <Text style={styles.modalTitle}>Call your emergency contact?</Text>
          <Text style={styles.modalMessage}>
            Your location will be shared with your emergency contact along with it!
          </Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={dialNumber}>
              <Text style={styles.modalButtonText}>
                <Image source={require("../screens/call.png")} /> Call
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SOS;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    color: "#E75356",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color:'#666'
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#e75356',
    borderRadius: 30,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
