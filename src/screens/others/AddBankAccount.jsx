import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const AddBankAccount = () => {
  const [accountHolder, setAccountHolder] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [reAccountNumber, setReAccountNumber] = useState('');

  const handleDonePress = () => {
    // Add your validation and submit logic here
    if (accountNumber === reAccountNumber) {
      console.log('Account details submitted');
    } else {
      console.log('Account numbers do not match');
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

export default AddBankAccount;