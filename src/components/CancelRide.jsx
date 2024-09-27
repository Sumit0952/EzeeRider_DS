import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, Linking, PermissionsAndroid, Platform, Alert } from 'react-native';
import CancelReason from './CancelReason';

const CancelRide = ({ isVisible, onClose },Cancel_Left="9") => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleYesPress = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
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
          <Text style={styles.modalTitle}>Do you wanna cancel pickup</Text>
          <Text style={styles.modalMessage}>
            You cannot undo this action <Text style={{color:'red',fontWeight:'bold'}}>{Cancel_Left}</Text>/10 cancellation left
          </Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleYesPress}>
              <Text style={styles.modalButtonText}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CancelReason
        isVisible={isModalVisible} 
        onClose={closeModal} 
      />
      </View>
    </Modal>
  );
};

export default CancelRide;

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
