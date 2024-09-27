import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

const CancelReason = ({ isVisible, onClose }) => {
  // State to track selected item
  const [selectedItem, setSelectedItem] = useState(null);

  const options = [
    { key: '1', title: 'Customer is not piciking up the call ' },
    { key: '2', title: 'Can not find the customer' },
    { key: '3', title: 'Waiting time is too much ' },
    { key: '4', title: 'Misbehaved' },
    { key: '5', title: 'Others' },
  ];

  const handlePress = (key) => {
    setSelectedItem(key); // Set selected item when touched
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Share the reason for cancelling the pickup </Text>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedItem === item.key && styles.selectedOption, // Apply green border if selected
                ]}
                onPress={() => handlePress(item.key)} // Handle item press
              >
                <View style={styles.transparentBox}>
                  
                  <View style={styles.textContainer}>
                    <Text style={styles.optionText}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.key}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CancelReason;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '50%',
  },
  modalTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  selectedOption: {
    borderWidth:3,
    borderColor: 'green', // Green border for selected item
    backgroundColor:'#dcfede'
  },
  transparentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Transparent white background
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  optionText: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#0056f6',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
