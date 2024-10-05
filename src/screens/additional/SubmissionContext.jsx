// SubmissionContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a Context
const SubmissionContext = createContext();

// Create a Provider component
export const SubmissionProvider = ({ children }) => {
    const [submissionStatus, setSubmissionStatus] = useState({
        isSubmitted_ProfileInfo: false,
        isSubmitted_DrivingLicense: false,
        isSubmitted_AddVehicle: false,
        isSubmitted_AddAccount: false,
        isSubmitted_VehicleRC: false,
        isSubmitted_IdVerify: false,
    });

    useEffect(() => {
        // Load submission status from AsyncStorage on mount
        const loadSubmissionStatus = async () => {
            try {
                const storedStatus = await AsyncStorage.getItem('submissionStatus');
                if (storedStatus) {
                    setSubmissionStatus(JSON.parse(storedStatus));
                }
            } catch (error) {
                console.error("Failed to load submission status:", error);
            }
        };

        loadSubmissionStatus();
    }, []);

    useEffect(() => {
        // Save submission status to AsyncStorage whenever it changes
        const saveSubmissionStatus = async () => {
            try {
                await AsyncStorage.setItem('submissionStatus', JSON.stringify(submissionStatus));
            } catch (error) {
                console.error("Failed to save submission status:", error);
            }
        };

        saveSubmissionStatus();
    }, [submissionStatus]);

    console.log(submissionStatus);

    return (
        <SubmissionContext.Provider value={{ submissionStatus, setSubmissionStatus }}>
            {children}
        </SubmissionContext.Provider>
    );
};

// Create a custom hook for using the context
export const useSubmission = () => {
    return useContext(SubmissionContext);
};
