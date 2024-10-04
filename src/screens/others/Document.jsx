import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../utils/colors';
import { dimension } from '../../utils/dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import { launchImageLibrary } from 'react-native-image-picker';

// Data class to store image URIs
class DocumentData {
  constructor(drivingLicense, idVerify, vehicleRc, vehicleInsurance) {
    this.drivingLicense = drivingLicense;
    this.idVerify = idVerify;
    this.vehicleRc = vehicleRc;
    this.vehicleInsurance = vehicleInsurance;
  }
}

const Document = () => {
  const [drivingLicense, setDrivingLicense] = useState([]);  // Handle multiple images
  const [idVerify, setIdVerify] = useState([]);
  const [vehicleRc, setVehicleRc] = useState([]);
  const [vehicleInsurance, setVehicleInsurance] = useState([]);

  const pickImage = async (setImageState) => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      selectionLimit: 0, // Set to 0 for multi-select (unlimited images)
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    try {
      const result = await launchImageLibrary(options);
  
      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorCode) {
        console.log('ImagePicker Error: ', result.errorMessage);
        Alert.alert('Error', 'There was a problem selecting the image.');
      } else {
        const imageURIs = await Promise.all(
          result.assets.map(async (asset) => {
            const filePath = asset.uri;
            const fileName = asset.fileName;
            const newPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
  
            await RNFS.moveFile(filePath, newPath)
              .then(() => `file://${newPath}`)
              .catch((error) => {
                console.error('Failed to save file: ', error);
                Alert.alert('Error', 'There was a problem saving the image.');
              });
            
            return `file://${newPath}`;
          })
        );
  
        // Update state with an array of image URIs
        setImageState((prevImages) => [...prevImages, ...imageURIs]);
      }
    } catch (error) {
      console.error('Error with image picker: ', error);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };
  
  const resetImage = (setImageState) => {
    setImageState([]); // Reset the array of images
  };

  const saveData = () => {
    const data = new DocumentData(drivingLicense, idVerify, vehicleRc, vehicleInsurance);
    // Send data to API
    console.log('Document data ready for API:', data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subHeading}>Driver's Documents</Text>

      {/* Driving License - Multi-select */}
      <TouchableOpacity style={styles.boxContainer} onPress={() => pickImage(setDrivingLicense)}>
        <View style={styles.docContainer}>
          {drivingLicense.length > 0 ? (
            <ScrollView horizontal>
              {drivingLicense.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.imagePreview} />
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.containerText}>Driving License</Text>
          )}
          <Entypo name="chevron-down" size={30} color="#000" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => resetImage(setDrivingLicense)}>
        <Text style={styles.resetButton}>Reset Driving License</Text>
      </TouchableOpacity>

      {/* Identity Verification - Multi-select */}
      <TouchableOpacity style={styles.boxContainer} onPress={() => pickImage(setIdVerify)}>
        <View style={styles.docContainer}>
          {idVerify.length > 0 ? (
            <ScrollView horizontal>
              {idVerify.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.imagePreview} />
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.containerText}>Identity Verification</Text>
          )}
          <Entypo name="chevron-down" size={30} color="#000" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => resetImage(setIdVerify)}>
        <Text style={styles.resetButton}>Reset Identity Verification</Text>
      </TouchableOpacity>

      {/* Vehicle RC - Multi-select */}
      <TouchableOpacity style={styles.boxContainer} onPress={() => pickImage(setVehicleRc)}>
        <View style={styles.docContainer}>
          {vehicleRc.length > 0 ? (
            <ScrollView horizontal>
              {vehicleRc.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.imagePreview} />
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.containerText}>Vehicle RC</Text>
          )}
          <Entypo name="chevron-down" size={30} color="#000" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => resetImage(setVehicleRc)}>
        <Text style={styles.resetButton}>Reset Vehicle RC</Text>
      </TouchableOpacity>

      {/* Vehicle Insurance - Multi-select */}
      <TouchableOpacity style={styles.boxContainer} onPress={() => pickImage(setVehicleInsurance)}>
        <View style={styles.docContainer}>
          {vehicleInsurance.length > 0 ? (
            <ScrollView horizontal>
              {vehicleInsurance.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.imagePreview} />
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.containerText}>Vehicle Insurance</Text>
          )}
          <Entypo name="chevron-down" size={30} color="#000" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => resetImage(setVehicleInsurance)}>
        <Text style={styles.resetButton}>Reset Vehicle Insurance</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveData}>
        <Text style={styles.saveButtonText}>Save and Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Document;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  subHeading: {
    fontSize: dimension.lg,
    marginTop: 10,
    color: colors.textPrimary,
  },
  boxContainer: {
    backgroundColor: '#f2faf6',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#78cba1',
  },
  docContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  containerText: {
    color: colors.textPrimary,
    fontSize: dimension.md,
  },
  imagePreview: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  resetButton: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: '#78cba1',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
