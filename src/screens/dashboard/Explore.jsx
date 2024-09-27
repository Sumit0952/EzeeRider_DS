import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TripNotification from '../../components/TripNotification'
import Otp from '../../components/Otp';
import RideCompleted from '../../components/RideCompleted';


const Explore = () => {
  const [showOtp, setShowOtp] = useState(false);
  const handleAccept = () => {
    setShowOtp(true); // Show Otp component when accept is pressed
  };
  return showOtp ? (
    <Otp />
  ) : (
     //<RideCompleted/>
    <TripNotification onAccept={handleAccept} />
  )
}

export default Explore

const styles = StyleSheet.create({})