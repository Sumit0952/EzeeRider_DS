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
        // Navigate to TabNav and reset the navigation stack if all forms are submitted
        if (
            submissionStatus.isSubmitted_ProfileInfo &&
            submissionStatus.isSubmitted_DrivingLicense &&
            submissionStatus.isSubmitted_AddVehicle &&
            submissionStatus.isSubmitted_AddAccount &&
            submissionStatus.isSubmitted_VehicleRC &&
            submissionStatus.isSubmitted_IdVerify
        ) {
            navigation.reset({
                index: 0, // Reset to the first screen
                routes: [{ name: 'Tabnav' }], // Replace 'TabNav' with your actual TabNav screen
            });
        }
    }, [submissionStatus]);

    const options = [
        { key: '1', title: 'Profile Info', screen: 'ProfileInfo', navAllowed: submissionStatus.isSubmitted_ProfileInfo },
        { key: '2', title: 'Driving License', screen: 'DrivingLicense', navAllowed: submissionStatus.isSubmitted_DrivingLicense },
        { key: '3', title: 'Vehicle RC', screen: 'VehicleRc', navAllowed: submissionStatus.isSubmitted_VehicleRC },
        { key: '4', title: 'Add Vehicle', screen: 'AddVehicle', navAllowed: submissionStatus.isSubmitted_AddVehicle },
        { key: '5', title: 'Identity Verification', screen: 'IdVerify', navAllowed: submissionStatus.isSubmitted_IdVerify },
        { key: '6', title: 'Bank Details', screen: 'AddAccount', navAllowed: submissionStatus.isSubmitted_AddAccount },
    ];

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
                            // Handle cases where navigation is not allowed
                            alert("You have already submitted this information.");
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
