// RiderRegistration.js
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSubmission } from './SubmissionContext'; // Adjust the path
import AntDesign from 'react-native-vector-icons/AntDesign';
import { dimension } from '../../utils/dimension';
import { colors } from '../../utils/colors';

const RiderRegistration = () => {
    const navigation = useNavigation();
    const { submissionStatus } = useSubmission(); // Get the submission status from the context

    useEffect(() => {
        // Navigate to the next screen if all forms are submitted
        if (
            submissionStatus.isSubmitted_ProfileInfo &&
            submissionStatus.isSubmitted_DrivingLicense &&
            submissionStatus.isSubmitted_AddVehicle &&
            submissionStatus.isSubmitted_AddAccount &&
            submissionStatus.isSubmitted_VehicleRC &&
            submissionStatus.isSubmitted_IdVerify
        ) {
            navigation.navigate('Tabnav'); // Replace with your desired screen name
        }
    }, [submissionStatus]);
    console.log(submissionStatus.isSubmitted_ProfileInfo)
    console.log(submissionStatus.isSubmitted_AddAccount)

    const options = [
        { key: '1', title: 'Profile Info', screen: 'ProfileInfor', navAllowed :submissionStatus.isSubmitted_ProfileInfo},
        { key: '2', title: 'Driving License', screen: 'DrivingLicense',navAllowed:submissionStatus.isSubmitted_DrivingLicense },
        { key: '3', title: 'Vehicle RC', screen: 'VehicleRc',navAllowed:submissionStatus.isSubmitted_VehicleRC },
        { key: '4', title: 'Add Vehicle', screen: 'AddVehicle',navAllowed:submissionStatus.isSubmitted_AddVehicle },
        { key: '5', title: 'Identity Verification', screen: 'IdVerify',navAllowed:submissionStatus.isSubmitted_IdVerify },
        { key: '6', title: 'Bank Details', screen: 'AddAccount',navAllowed:submissionStatus.isSubmitted_AddAccount },
    ];

    useEffect(() => {
        // Check if all values are true
        if (
            submissionStatus.isSubmitted_ProfileInfo &&
            submissionStatus.isSubmitted_DrivingLicience &&
            submissionStatus.isSubmitted_AddVehicle &&
            submissionStatus.isSubmitted_AddAccount &&
            submissionStatus.isSubmitted_VehicleRC &&
            submissionStatus.isSubmitted_IdVerify
        ) {
          // Navigate to the desired screen if all are true
          navigation.navigate('TabNav');  // Replace 'SuccessScreen' with your desired screen name
        }
      }, [
        submissionStatus.isSubmitted_ProfileInfo,
        submissionStatus.isSubmitted_DrivingLicience,
        submissionStatus.isSubmitted_AddVehicle,
        submissionStatus.isSubmitted_AddAccount,
        submissionStatus.isSubmitted_VehicleRC,
        submissionStatus.isSubmitted_IdVerify,
      ]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Complete all the steps to activate your account</Text>
            <FlatList
                data={options}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.option} onPress={() => {
                        if (!item.navAllowed) {
                            navigation.navigate(item.screen);
                        } else {
                            // You can handle what happens if navigation is not allowed
                            alert("Navigation not allowed for this option.");
                        }
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: '15%' }}>
                            <Text style={styles.optionText}>{item.title}</Text>
                            <AntDesign name="arrowright" size={24} color="#0056f6" />
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: "#fff"
    },
    heading: {
        color: "#0056f6",
        fontSize: dimension.lg
    },
    optionText: {
        color: colors.textPrimary,
        fontSize: dimension.lg
    }
});

export default RiderRegistration;
