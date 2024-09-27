import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import debounce from 'lodash.debounce';
import { colors } from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { dimension } from '../utils/dimension';

const correctOtp = "1234"; // Example correct OTP

const OtpInput = ({onOtpComplete}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isValid, setIsValid] = useState(null); // Changed to null initially (no validation state)
  const inputRefs = useRef([]);

  useEffect(() => {
    if (otp.every((digit) => digit !== '')) {
      validateOtpDebounced();
    }
  }, [otp]);

  // Debounced validation
  const validateOtpDebounced = debounce(() => {
    if (otp.join('') === correctOtp) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, 500); // 500ms debounce delay

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    // Move to the next input if the length is 1
    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    
    // Move back to the previous input if cleared
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOtp(newOtp);
  };

  const handleArrowClick = () => {
    if (isValid) {
      console.log("OTP is correct, proceeding...");
      onOtpComplete(); 
      // Add the logic for what you want to happen when OTP is valid and arrow is clicked
    }
  };

  return (
    <View style={styles.container}>
      <Text style = {{fontSize:20, color:colors.textPrimary,marginLeft:10, fontWeight:'bold'}}>OTP</Text>
      <View style={styles.inputContainer}>
        
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.input,
              // Border color changes based on validity
              { borderColor: isValid === null ? '#ccc' : isValid ? 'green' : 'red' },
            ]}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}

        {/* Arrow Icon */}
        <TouchableOpacity 
          onPress={handleArrowClick} 
          disabled={!isValid} // Arrow is disabled until OTP is valid (green)
          style={[
            styles.arrowContainer,
            { opacity: isValid ? 1 : 0.5 } // Make the arrow semi-transparent if invalid
          ]}
        >
          <AntDesign
            style={styles.arrowIcon}
            name="rightcircle" // Add the arrow icon here
          />
        </TouchableOpacity>
      </View>
      {isValid && (
        <View style={styles.errorContainer}>
          <Image style={styles.errorIcon} source={require("../screens/exclam_green.png")} />
          <Text style={styles.errorText1}>Correct OTP</Text>
        </View>
      )}
      {isValid === false && (
        <View style={styles.errorContainer}>
          <Image style={styles.errorIcon} source={require("../screens/exclam_red.png")} />
          <Text style={styles.errorText}>Incorrect OTP</Text>
        </View>
      )}
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center', // Align items vertically in the center
  },
  input: {
    borderWidth: 2, // Thicker border to make the color change more visible
    borderRadius: 8,
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 24,
    margin: 5,
    backgroundColor: 'white', // Ensure the background stays white
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  arrowIcon: {
    fontSize:dimension.xxl,
    color:colors.grn
  
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    alignSelf: 'flex-start',
  },
  errorIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
  },
  errorText1: {
    color: colors.grn,
    fontSize: 16,
  },
});
