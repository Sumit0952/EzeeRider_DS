import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { colors } from '../utils/colors';
import Otp from './Otp';
import { location, metric } from '../utils/inputs';

const TripNotification = ({ cost = "120",pickupAddress = "Pickup Location", destinationAddress = "Destination Location", onAccept}) => {
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const [widthAnim] = useState(new Animated.Value(0)); // Animation value for width fill
  const [connectorHeight, setConnectorHeight] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Start button fill animation
    Animated.timing(widthAnim, {
      toValue: 100, // Fill 100% of the button by the end of the timer
      duration: 10000, // 10 seconds
      useNativeDriver: false,
    }).start();

    return () => clearInterval(countdown);
  }, [widthAnim]);

  const handleAccept = () => {
    if (timer > 0) {
      onAccept();
    }
  };

  const fillWidth = widthAnim.interpolate({
    inputRange: [0, 90],
    outputRange: ['0%', '100%'], // Fill from 0% to 100% width
  });

  const onTextLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setConnectorHeight(height - 20); // Adjust the height of the connector to match the text block
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Online Payment <Text style ={{color:colors.textPrimary}}>{metric.calculateTotalCost()}</Text></Text>
        
        <View style={styles.addressContainer}>
          {/* Marker and connector layout */}
          <View>
          <View style={styles.marker_star} />
          <View style={[styles.connector, { height: connectorHeight }]} />
          <View style={styles.marker_end} />
          </View>
          {/* Addresses */}
          <View style={styles.addressBlock} onLayout={onTextLayout}>
            <Text style={styles.addressText}>{location.pickup.getAddress()}</Text>
            <Text style={styles.addressText}>{location.drop.getAddress()}</Text>
          </View>
        </View>
        {/* Static button with dynamic color fill */}
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={handleAccept}
          disabled={timer === 0}
        >
          <Animated.View style={[styles.fill, { width: fillWidth }]} onPress={Otp} />
          <Text style={styles.buttonText}>Accept ({timer}s)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TripNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    paddingLeft:"25%",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  addressBlock: {
    flex: 1,
    marginLeft: 10,
  },
  addressText: {
    fontSize: 16,
    color: colors.textPrimary,
    marginVertical: 15,
    fontWeight:"bold"
  },
  connector: {
    width: 2,
    //height: 160, // Adjust this based on spacing between the two addresses
    backgroundColor: '#ccc',
    alignSelf: 'center', // Center vertically between markers
  },
  marker_star: {
    width: 10,
    height: 10,
    
    backgroundColor: '#008000',
    borderRadius: 5,
    marginBottom: 10,
  },
  marker_end: {
    width: 10,
    height: 10,
    
    backgroundColor: '#ff0000',
    borderRadius: 5,
    marginBottom: 10,
  },
  acceptButton: {
    position: 'relative',
    backgroundColor: '#3bd286',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    
    borderColor: 'green',
    overflow: 'hidden', // Clip the animated fill within the button
    width: '100%',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#24a665',
    borderRadius: 0, // Matches the button's round shape
    width:'100%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1, // Keep text above the animated fill
  },
});
