import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { colors } from '../utils/colors';
import { Switch } from 'react-native-switch';
import UserComponent from './UserComponent';
import OtpInput from './OtpInput';
import SOS from './SOS';
import CancelRide from './CancelRide';
import { fontFamilies } from '../utils/fonts';
import { dimension } from '../utils/dimension';
import { adr, location } from '../utils/inputs';

const Otp = () => {
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const [widthAnim] = useState(new Animated.Value(0)); // Animation value for width fill
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [connectorHeight, setConnectorHeight] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [isModalVisible1, setIsModalVisible1] = useState(false); // State for modal visibility
  const [showEndTrip, setShowEndTrip] = useState(false);  // State to control "End Trip" state
  const onTextLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setConnectorHeight(height - 20); // Adjust the height of the connector to match the text block
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
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

  const fillWidth = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'], // Fill from 0% to 100% width
  });

  const toggleSwitch = (value) => {
    setIsSwitchOn(value); // Update switch state
  };

  const handleOtpComplete = () => { // Change state to show "End Trip"
    setShowEndTrip(true);
  };

  const handleSosPress = () => {
    setIsModalVisible(true); 
  };
  const handleCancelPress = () => {
    setIsModalVisible1(true); 
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); 
  };
  const handleCloseCancelModal = () => {
    setIsModalVisible1(false); 
  };

  const handleConfirmSos = () => {
    handleCloseModal(); 
  };
  const handleConfirmCancel = () => {
    handleCloseCancelModal(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('../screens/phone.png')} />
          <Text style={styles.title}>0 min away</Text>
          <Image source={require('../screens/message.png')} />
        </View>
        <View style={{ width: '100%', alignItems:'center'}}>
        <Switch
          value={isSwitchOn}
          onValueChange={toggleSwitch}
          disabled={false}
          activeText={'On'}
          inActiveText = {showEndTrip ? "                   End Trip" : "                  Arrived"}
          activeTextStyle ={{color:"fff",padding:"30%",fontSize:dimension.xl}}
          
          circleSize={55}
          
          //barHeight={1}
          //circleBorderWidth={3}
          backgroundActive={colors.grn}
          backgroundInactive={colors.grn}
          circleActiveColor={'#fff'}
          circleInActiveColor={'#fff'}
          changeValueImmediately={true}
          renderActiveText={false}
          renderInsideCircle={() => <Image style = {{height:30,width:30}} resizeMode="contain" source={require("../screens/two_wheeler.png")} />}
          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
          renderInActiveText={true}
          switchWidthMultiplier={5}
          switchBorderRadius={35}
          switchLeftPx={0.5}
        switchRightPx={0.9}
          
        />
        </View>
        
        <View style={{ width: '105%', alignItems: 'flex-start' ,paddingVertical:10}}>
          <UserComponent />
        </View>

        {!showEndTrip && (
          <>
        <View style={{width:"80%"}}>
            <OtpInput onOtpComplete={handleOtpComplete} />
        </View>
        </>
        )}

        <View style={styles.addressContainer}>
          <View>
            <View style={styles.marker_star} />
            <View style={[styles.connector, { height: connectorHeight }]} />
            <View style={styles.marker_end} />
          </View>
          <View style={styles.addressBlock} onLayout={onTextLayout}>
            <Text style={styles.addressText}>{location.pickup.getAddress()}</Text>
            <Text style={styles.addressText}>{location.drop.getAddress()}</Text>
          </View>
        </View>

        {/* Centered Cancel Ride Button */}
        {!showEndTrip && (
          <>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
          <Text style={styles.cancelText}>Cancel Ride</Text>
        </TouchableOpacity>
        </>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleSosPress}>
            <Text style={styles.buttonText}>SOS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Render the SosModal component */}
      <SOS
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmSos}
      />
      <CancelRide
      isVisible={isModalVisible1}
      onClose={handleCloseCancelModal}
      onConfirm={handleConfirmCancel}/>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    fontFamily :fontFamilies.regular
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    //elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    fontFamily :fontFamilies.bold
  },
  title: {
    color: colors.textPrimary,
    fontSize: dimension.md,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily :fontFamilies.regular,
    paddingBottom:10
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    
  },
  addressBlock: {
    flex: 1,
    marginLeft: 10,
    fontFamily :fontFamilies.regular
  },
  addressText: {
    fontSize: 16,
    color: colors.textPrimary,
    marginVertical: 15,
    fontWeight: 'bold',
    fontFamily :fontFamilies.regular
  },
  connector: {
    width: 2,
    backgroundColor: '#ccc',
    alignSelf: 'center',
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
  cancelButton: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  cancelText: {
    color: colors.red,
    fontSize: dimension.lg,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: colors.red,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:'40%',
    marginRight:'30%'
  },
});
