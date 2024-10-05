import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker'; // Image picker for gallery
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useSubmission } from './SubmissionContext';

const IdVerify = () => {
  const [licenseNo, setLicenseNo] = useState('');
  const [frontImageUri, setFrontImageUri] = useState(null);
  const [backImageUri, setBackImageUri] = useState(null);
  const [plateImageUri, setPlateImageUri] = useState(null);
  const [plateImageUri2, setPlateImageUri2] = useState(null);
   const navigation  =useNavigation();

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
      data.append('licenseNo', licenseNo);

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
      if (plateImageUri2) {
        data.append('plateImage', {
          uri: plateImageUri2,
          type: 'image/jpeg',
          name: 'plate.jpg',
        });
      }

      console.log('Data being sent to the server:', {
        licenseNo,
        frontImageUri,
        backImageUri,
        plateImageUri,
      });

      const response = await fetch('https://your-api-url.com/license', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });

      if (response.ok) {
        Alert.alert('Success', 'License data sent to the server.');
        setSubmissionStatus(prev => ({ ...prev, isSubmitted_IdVerify: true }));
        navigation.navigate('RiderRegistration');
      } else {
        Alert.alert('Error', 'Failed to send license data to the server.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      

      <Text style={styles.label}>AADHAR Card Images</Text>
      <TouchableOpacity onPress={() => handleImagePicker(setFrontImageUri)}>
        <View style={styles.imagePicker}>
          {frontImageUri ? (
            <Image source={{ uri: frontImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Front Side  <FontAwesome5 name = 'file-upload' size = {20}/></Text>
            
          )}
        </View>
      </TouchableOpacity>

   
      <TouchableOpacity onPress={() => handleImagePicker(setBackImageUri)}>
        <View style={styles.imagePicker}>
          {backImageUri ? (
            <Image source={{ uri: backImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Back Side  <FontAwesome5 name = 'file-upload' size = {20}/></Text>
          )}
        </View>
      </TouchableOpacity>

      <Text style={styles.label}>PAN card  Image</Text>
      <TouchableOpacity onPress={() => handleImagePicker(setPlateImageUri)}>
        <View style={styles.imagePicker}>
          {plateImageUri ? (
            <Image source={{ uri: plateImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Front Side  <FontAwesome5 name = 'file-upload' size = {20}/></Text>
          )}
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleImagePicker(setPlateImageUri2)}>
        <View style={styles.imagePicker}>
          {plateImageUri ? (
            <Image source={{ uri: plateImageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Back Side  <FontAwesome5 name = 'file-upload' size = {20}/></Text>
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

export default IdVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#fff"
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
  imagePicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#000',
  },
  imagePickerText: {
    color: '#000',
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
