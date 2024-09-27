import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { driver } from '../../utils/inputs'; // Assuming you have the driver details here
import { colors } from '../../utils/colors';
import { dimension } from '../../utils/dimension';
import { fontFamilies } from '../../utils/fonts';

const ManageProfile = () => {
  const [alternatePhone, setAlternatePhone] = useState(driver.AlternatePhoneNo);
  const [vehicleNumber, setVehicleNumber] = useState(driver.Vehicle_number);
  const [imageUri, setImageUri] = useState(driver.image);
  
  // State for modal visibility and input values
  const [modalVisible, setModalVisible] = useState(false);
  const [newValue, setNewValue] = useState('');

  const handleImageChange = () => {
    console.log('Image change triggered');
  };

  const handleAlternatePhoneChange = (text) => {
    setAlternatePhone(text);
    driver.AlternatePhoneNo = text; 
  };

  const handleVehicleNumberChange = (text) => {
    setVehicleNumber(text);
    driver.Vehicle_number = text;
    console.log(driver.Vehicle_number)
  };

  const openModal = (type) => {
    setModalVisible(true);
    setNewValue(type === 'vehicle' ? vehicleNumber : alternatePhone);
  };

  const handleUpdate = () => {
    // Update driver details based on the type
    if (newValue.trim()) {
      if (newValue === vehicleNumber) {
        handleVehicleNumberChange(newValue);
      } else {
        handleAlternatePhoneChange(newValue);
      }
    }
    setModalVisible(false); // Close the modal after update
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/user.png')} style={styles.profileImage} />
          <Ionicons name="pencil" size={25} color="#0056f6" style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      {/* Rating Section */}
      <TouchableOpacity style={styles.ratingContainer}>
        <Text style={styles.rating}>
          {driver.rating}
          <MaterialIcons name="star" size={20} color="#FFD700" />
        </Text>
      </TouchableOpacity>

      {/* Driver Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Rider Details</Text>
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>{driver.Name}</Text>
          <Text style={styles.detailValue}>{driver.userId}</Text>
        </View>
        
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>Zone:</Text>
          <Text style={styles.detailValue}>{driver.Address}</Text>
        </View>
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>City:</Text>
          <Text style={styles.detailValue}>{driver.City}</Text>
        </View>
       
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>Vehicle Number:</Text>
          <Text style={styles.detailValue}>{vehicleNumber}</Text>
          <TouchableOpacity onPress={() => openModal('vehicle')}>
            <Ionicons name="pencil" size={20} color="#0056f6" />
          </TouchableOpacity>
        </View>
        
      </View>

      {/* Personal Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>Phone:</Text>
          <Text style={styles.detailValue}>{driver.PhoneNo}</Text>
        </View>
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>Alternate Phone:</Text>
          <Text style={styles.detailValue}>{alternatePhone}</Text>
          <TouchableOpacity onPress={() => openModal('alternate')}>
            <Ionicons name="pencil"  size={20} color="#0056f6" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailText}>
          <Text style={styles.detailLabel}>DL Expiry:</Text>
          <Text style={styles.detailValue}>{driver.DLExpiry}</Text>
        </View>
      </View>

      {/* Modal for updating vehicle number or alternate phone */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Update Value</Text>
            <TextInput
              style={styles.modalInput}
              value={newValue}
              onChangeText={setNewValue}
            />
            <View style = {{flexDirection:'row',margin:10,width:"80%",justifyContent:'space-between'}}>
            <Button title="Update" onPress={handleUpdate} color={colors.grn} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color={colors.red} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: -20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular shape
    borderWidth: 2,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    marginBottom: 90,
  },
  ratingContainer: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    padding: 1,
    paddingRight: 7,
    paddingLeft: 7,
    marginBottom: 20,
  },
  rating: {
    fontSize: 20,
    color: colors.textPrimary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '100%',
    borderRadius: 10,
    padding: 15,
    // elevation: 5, // Add shadow
  },
  sectionTitle: {
    color: '#0056F6',
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: dimension.lg,
    color: '#333',
    paddingLeft: 10,
    marginBottom: 10,
    fontFamily: fontFamilies.regular,
    fontWeight: '700',
  },
  detailLabel: {
    fontSize: dimension.lg,
    fontWeight: '500',
    color:colors.textPrimary,
    marginBottom: 10,
  },
  detailValue: {
    fontSize: dimension.lg,
    fontWeight: '500',
    color:colors.textPrimary,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    color: colors.textPrimary,
  },
  modalInput: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default ManageProfile;
