// OnlineConfirmationModal.js
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModelDialog1 = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Image source={require("../screens/exclam_green.png")}/>
          <Text style={styles.modalTitle}>Go Online again?</Text>
          <Text style={styles.modalMessage}>
           After going online you will start receiving new ride requests
          </Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={{color:"grey",fontWeight: 'bold',}}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModelDialog1;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    color:"green",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#24a665',
    borderRadius: 30,
    padding: 10,
    flex: 1,
    marginRight: 5,
    marginleft: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff', // Set background color to white
    borderColor: 'gray', // Set border color to gray
    borderWidth: 1, // Add border width
    borderRadius: 30,
    padding: 10,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
