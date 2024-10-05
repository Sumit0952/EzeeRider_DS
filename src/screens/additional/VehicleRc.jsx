import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker'; // Image picker for gallery
import { Picker } from '@react-native-picker/picker'; // Picker for dropdown options
import { useNavigation } from '@react-navigation/native';
import { useSubmission } from './SubmissionContext';

const VehicleRc = () => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [ownership, setOwnership] = useState(''); // State for Vehicle Ownership
  const [vehicleType, setVehicleType] = useState(''); // State for Vehicle Type
  const [frontImageUri, setFrontImageUri] = useState(null);
  const [backImageUri, setBackImageUri] = useState(null);
  const [plateImageUri, setPlateImageUri] = useState(null);

  const navigation = useNavigation();
  const { setSubmissionStatus } = useSubmission();

  // Helper function to pick images from the gallery
  const handleImagePicker = (setter) => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        setter(uri); // Set the selected image URI
      }
    });
  };

  // Function to send data to the server
  const sendDataToServer = async () => {
    try {
      const data = new FormData();
      data.append('vehicleNo', vehicleNo);
      data.append('ownership', ownership);
      data.append('vehicleType', vehicleType);

      // Append images to FormData if they exist
      if (frontImageUri) {
        data.append('frontImage', {
          uri: frontImageUri,
          type: 'image/jpeg',
          name: 'front.jpg',
        });
      }
      if (backImageUri) {
        data.append('backImage', {
          uri: backImageUri,
          type: 'image/jpeg',
          name: 'back.jpg',
        });
      }
      if (plateImageUri) {
        data.append('plateImage', {
          uri: plateImageUri,
          type: 'image/jpeg',
          name: 'plate.jpg',
        });
      }

      console.log('Data being sent to the server:', {
        vehicleNo,
        ownership,
        vehicleType,
        frontImageUri,
        backImageUri,
        plateImageUri,
      });

      const response = await fetch('https://your-api-url.com/vehicle-rc', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });

      if (response.ok) {
        Alert.alert('Success', 'Vehicle RC data sent to the server.');
        setSubmissionStatus(prev => ({ ...prev, isSubmitted_VehicleRC: true }));
        navigation.navigate('RiderRegistration');

      } else {
        Alert.alert('Error', 'Failed to send vehicle RC data to the server.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Vehicle Registration No.</Text>
      <TextInput
        style={styles.input}
        value={vehicleNo}
        onChangeText={setVehicleNo}
        placeholder="Enter Vehicle Registration Number"
      />

      <Text style={styles.label}>Vehicle Ownership</Text>
      <Picker
        selectedValue={ownership}
        style={styles.picker}
        onValueChange={(itemValue) => setOwnership(itemValue)}
      >
        <Picker.Item label="Select Ownership" value="" />
        <Picker.Item label="Personal" value="personal" />
        <Picker.Item label="Rented" value="Rented" />
      </Picker>

      <Text style={styles.label}>Vehicle Type</Text>
      <Picker
        selectedValue={vehicleType}
        style={styles.picker}
        onValueChange={(itemValue) => setVehicleType(itemValue)}
      >
        <Picker.Item label="Select Vehicle Type" value="" />
        <Picker.Item label="Scooty" value="Scooty" />
        <Picker.Item label="Bike" value="bike" />
        
      </Picker>

      <Text style={styles.label}>Upload Front Side of RC</Text>
      <TouchableOpacity onPress={() => handleImagePicker(setFrontImageUri)}>
        <View style={styles.imagePicker}>
          {frontImageUri ? (
            <Image source={{ uri: frontImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Pick Front Image</Text>
          )}
        </View>
      </TouchableOpacity>

      <Text style={styles.label}>Upload Back Side of RC</Text>
      <TouchableOpacity onPress={() => handleImagePicker(setBackImageUri)}>
        <View style={styles.imagePicker}>
          {backImageUri ? (
            <Image source={{ uri: backImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Pick Back Image</Text>
          )}
        </View>
      </TouchableOpacity>

      <Text style={styles.label}>Upload License Plate Image</Text>
      <TouchableOpacity onPress={() => handleImagePicker(setPlateImageUri)}>
        <View style={styles.imagePicker}>
          {plateImageUri ? (
            <Image source={{ uri: plateImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Pick License Plate Image</Text>
          )}
        </View>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={sendDataToServer}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default VehicleRc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  label: {
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: '#000',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imagePickerText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreview: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#0056f6',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
