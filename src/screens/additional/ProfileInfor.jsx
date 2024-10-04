import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Modal, Button, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioForm from 'react-native-simple-radio-button'; // For radio buttons
import * as ImagePicker from 'react-native-image-picker'; // Image picker for gallery
import DatePicker from 'react-native-date-picker'; // Date picker for selecting DOB
import { colors } from '../../utils/colors';
import { dimension } from '../../utils/dimension';

const ProfileInfor = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(''); // For display purpose
  const [gender, setGender] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false); // Control DatePicker visibility
  const [date, setDate] = useState(new Date()); // Holds the selected date

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const handleImagePicker = () => {
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
        setImageUri(uri);
      }
    });
  };

  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    setDob(selectedDate.toDateString()); // Format the date as you prefer
    setIsDatePickerVisible(false);
  };

  const sendProfileDataToAPI = async () => {
    try {
      const data = new FormData();
      data.append('fullName', fullName);
      data.append('email', email);
      data.append('dob', dob);
      data.append('gender', gender);
      data.append('referralCode', referralCode);

      if (imageUri) {
        data.append('profileImage', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'profile.jpg',
        });
      }

      console.log('Data being sent to the server:', {
        fullName,
        email,
        dob,
        gender,
        referralCode,
        imageUri,
      });

      const response = await fetch('https://your-api-url.com/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });

      if (response.ok) {
        Alert.alert('Success', 'Profile data sent to the server.');
      } else {
        Alert.alert('Error', 'Failed to send profile data to the server.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker}>
          <Image source={imageUri ? { uri: imageUri } : require('../../../assets/images/user.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      <MaterialCommunityIcons name="pencil-box" size={30} color="#fff" style={styles.editIcon} />

      <Text style={styles.subHeadings}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter Full Name"
      />

      <Text style={styles.subHeadings}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      <Text style={styles.subHeadings}>Date of Birth</Text>
      <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
        <TextInput
          style={styles.input}
          value={dob}
          placeholder="Select Date of Birth"
          editable={false} // Makes the TextInput non-editable
        />
      </TouchableOpacity>

      {/* DatePicker Modal */}
      <Modal visible={isDatePickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalContent}>
          <DatePicker
            date={date}
            mode="date"
            onDateChange={setDate}
          />
          <Button title="Confirm" onPress={() => handleConfirmDate(date)} />
          <Button title="Cancel" onPress={() => setIsDatePickerVisible(false)} />
        </View>
      </Modal>

      <Text style={styles.subHeadings}>Gender</Text>
      <RadioForm
        radio_props={genderOptions}
        initial={genderOptions.findIndex(option => option.value === gender)}
        onPress={setGender}
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor="#888"
        selectedButtonColor="#888"
        
      />

      <Text style={styles.subHeadings}>Referral Code</Text>
      <TextInput
        style={styles.input}
        value={referralCode}
        onChangeText={setReferralCode}
        placeholder="Enter Referral Code"
      />

      {/* Submit Data to API Button */}
      <TouchableOpacity style={styles.button} onPress={sendProfileDataToAPI}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInfor;

const styles = StyleSheet.create({
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular shape
    borderWidth: 2,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editIcon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  subHeadings: {
    fontSize: dimension.lg,
    color: colors.textPrimary,
    marginTop: '5%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0056f6',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: dimension.md,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
});
