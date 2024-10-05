import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSubmission } from './SubmissionContext';

const AddAccount = () => {
  const [accountHolder, setAccountHolder] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [reAccountNumber, setReAccountNumber] = useState('');
  const navigation = useNavigation();

  const { setSubmissionStatus } = useSubmission(); // Get the function to update status
    

  const handleDonePress = async () => {
    // Check if any field is empty
    if (!accountHolder || !ifsc || !accountNumber || !reAccountNumber) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Validation: Check if account numbers match
    if (accountNumber !== reAccountNumber) {
      Alert.alert('Error', 'Account numbers do not match.');
      return;
    }

    // Prepare data to be sent
    const accountData = {
      accountHolder,
      ifsc,
      accountNumber,
    };

    try {
      // Send data to the server using fetch
      const response = await fetch('https://your-api-url.com/add-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      });

      if (response.ok) {
        Alert.alert('Success', 'Account details submitted successfully.');
        setSubmissionStatus(prev => ({ ...prev, isSubmitted_AddAccount: true }));
        navigation.navigate('RiderRegistration');
      } else {
        Alert.alert('Error', 'Failed to submit account details.');
      }
    } catch (error) {
      Alert.alert('Error', `An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name of Account Holder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={accountHolder}
        onChangeText={setAccountHolder}
      />

      <Text style={styles.label}>IFSC</Text>
      <TextInput
        style={styles.input}
        placeholder="IFSC"
        value={ifsc}
        onChangeText={setIfsc}
      />

      <Text style={styles.label}>Account Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Re-enter Account Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={reAccountNumber}
        onChangeText={setReAccountNumber}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleDonePress}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddAccount;
