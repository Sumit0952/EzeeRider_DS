import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../utils/colors';

const CircularProgress = ({ percentage }) => {
  const radius = 35;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    animatedValue.addListener((v) => {
      const strokeDashoffset = circumference - (circumference * v.value) / 100;
      if (circleRef.current) {
        circleRef.current.setNativeProps({ strokeDashoffset });
      }
    });
  }, [percentage]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={80} height={80} viewBox="0 0 80 80">
        <Circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#e6e7e8"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          ref={circleRef}
          cx="40"
          cy="40"
          r={radius}
          stroke={colors.grn}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <Text style={styles.progressText}>{percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressText: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CircularProgress;
