import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importing the Picker component
import { useNavigation } from '@react-navigation/native';
import { useSubmission } from './SubmissionContext';

const AddVehicle = () => {
  const [vehicleCompany, setVehicleCompany] = useState('');
  const [modelNo, setModelNo] = useState('');
  const [vehicleColor, setVehicleColor] = useState('Red');
  const [vehicleYear, setVehicleYear] = useState('2023');
  const navigation = useNavigation();
  const { setSubmissionStatus } = useSubmission();

  // Submit handler
  const handleSubmit = async () => {
    if (!vehicleCompany || !modelNo) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Prepare the vehicle data to send to the server
    const vehicleData = {
      vehicleCompany,
      modelNo,
      vehicleColor,
      vehicleYear,
    };

    try {
      // Sending the data to the server using fetch
      const response = await fetch('https://your-api-url.com/add-vehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });

      if (response.ok) {
        Alert.alert('Success', 'Vehicle data sent successfully.');
        setSubmissionStatus(prev => ({ ...prev, isSubmitted_AddVehicle: true }));
        navigation.navigate('RiderRegistration');

        console.log(vehicleData)
      } else {
        Alert.alert('Error', 'Failed to send vehicle data.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred: ' + error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Vehicle Company Input */}
      <Text style={styles.label}>Vehicle Company</Text>
      <TextInput
        style={styles.input}
        value={vehicleCompany}
        onChangeText={setVehicleCompany}
        placeholder="Enter Vehicle Company"
        placeholderTextColor={'#888'}
      />

      {/* Model No Input */}
      <Text style={styles.label}>Model No</Text>
      <TextInput
        style={styles.input}
        value={modelNo}
        onChangeText={setModelNo}
        placeholder="Enter Model Number"
        placeholderTextColor={'#888'}
      />

      {/* Vehicle Color Picker */}
      <Text style={styles.label}>Color</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={vehicleColor}
          onValueChange={(itemValue) => setVehicleColor(itemValue)}
          style={styles.picker}
          dropdownIconColor={'#000'}
        >
          <Picker.Item label="Red" value="Red" />
          <Picker.Item label="Blue" value="Blue" />
          <Picker.Item label="Black" value="Black" />
          <Picker.Item label="White" value="White" />
          <Picker.Item label="Grey" value="Grey" />
        </Picker>
      </View>

      {/* Vehicle Year Picker */}
      <Text style={styles.label}>Year</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={vehicleYear}
          onValueChange={(itemValue) => setVehicleYear(itemValue)}
          style={styles.picker}
        >
          {Array.from({ length: 20 }, (_, i) => {
            const year = (2024 - i).toString();
            return <Picker.Item key={year} label={year} value={year} />;
          })}
        </Picker>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    color:'#000'
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
