import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TripNotification from '../../components/TripNotification';
import Otp from '../../components/Otp';
import RideCompleted from '../../components/RideCompleted';
import Header from '../../components/Header';

const Explore = () => {
  const [showOtp, setShowOtp] = useState(false);

  const handleAccept = () => {
    setShowOtp(true); // Show Otp component when accept is pressed
  };

  return (
    <View style={styles.container}>
      {/* Header is always shown */}
      <Header />

      {/* Conditional rendering for Otp and TripNotification */}
      {showOtp ? (
        <Otp />
      ) : (
        //<RideCompleted/>
        <TripNotification onAccept={handleAccept} />
      )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
