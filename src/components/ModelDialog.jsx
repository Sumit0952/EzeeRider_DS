// ConfirmationModal.js
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModelDialog = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
     
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Image source={require("../screens/exclam_red.png")}/>
         {/* // <Ionicons name="warning" size={30} color="orange" /> */}
          <Text style={styles.modalTitle}>Go Offline?</Text>
          <Text style={styles.modalMessage}>
          After going offline you won't receive ride requests
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

export default ModelDialog;

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
    color:"red",
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 10,
  },
  modalMessage: {
    textAlign: 'center',
    marginBottom: 20,
    color:'#666'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding:7
    
  },
  confirmButton: {
    backgroundColor: '#e75356',
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
