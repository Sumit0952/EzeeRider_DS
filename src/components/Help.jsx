import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const FloatingBottomSheet = ({ isVisible, onClose }) => {
  const options = [
    { key: '1', title: 'Help Center', image: require('../screens/help_center.png'), extraText: 'Find answers to your queries and raise tickets',screen :'HelpCenter'},
    { key: '2', title: 'Support Ticket', image: require('../screens/ticket.png'), extraText: 'Check status of tickets raised', screen:'SupportTicket'},
    { key: '3', title: 'Change Language', image: require('../screens/lang.png'), extraText: '' ,screen:''},
    { key: '4', title: 'Report Rain', image: require('../screens/rain.png'), extraText: '',screen:'' },
  ];

  const navigation = useNavigation();
  const handlePress = (screen) => {
    navigation.navigate(screen);
    onClose();

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
          <Text style={styles.modalTitle}>How Can We Help?</Text>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option}
              onPress={() => handlePress(item.screen)}>
                <Image source={item.image} style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.optionText}>{item.title}</Text>
                  <Text style={styles.extraText}>{item.extraText}</Text>
                </View>
                {item.extraText.includes('Coming Soon') && (
                  <View style={styles.comingSoonButton}>
                    <Text style={styles.comingSoonText}>Coming Soon</Text>
                  </View>
                )}
                <Ionicons name="chevron-forward" size={24} color="#000" style={styles.chevronIcon} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.key}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FloatingBottomSheet;

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
    maxHeight: '50%', // Set to occupy half the screen
  },
  modalTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // Space between icon and text
  },
  textContainer: {
    flexDirection: 'column', // Align title and extra text vertically
    flex: 1, // Allow text container to take available space
  },
  optionText: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  extraText: {
    fontSize: 12,
    color: 'gray',
  },
  comingSoonButton: {
    backgroundColor: '#0056f6',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  comingSoonText: {
    
    fontSize: 16,
    color: '#fff',
  },
  chevronIcon: {
    marginLeft: 10,
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
