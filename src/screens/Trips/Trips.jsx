import { Animated, Dimensions, Easing, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../utils/colors'
import { dimension } from '../../utils/dimension'

const screenWidth = Dimensions.get('window').width;

const Trips = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  // Animation effect
  useEffect(() => {
    const animateLine = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: screenWidth - screenWidth * 0.1, // Move from 0 to screenWidth - 10% of screen
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0, // Move back to 0
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    animateLine();
  }, [animatedValue]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activePage = Math.round(scrollPosition / screenWidth);
    setActiveIndex(activePage); // Set active index based on current scroll position
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Finding ride request</Text>

      <View style={styles.horizontalline}>
        <Animated.View
          style={[
            styles.animatedLine,
            { transform: [{ translateX: animatedValue }] }, // Apply animated translateX value
          ]}
        />
      </View>

      <View style={styles.performanceContainer}>
        <View style={styles.performanceColumn}>
          <Text style={styles.performanceLabel}>Earnings</Text>
          <Text style={styles.performanceValue}>564</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.performanceColumn}>
          <Text style={styles.performanceLabel}>Trip Time</Text>
          <Text style={styles.performanceValue}>45634</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.performanceColumn}>
          <Text style={styles.performanceLabel}>Total Rides</Text>
          <Text style={styles.performanceValue}>4565</Text>
        </View>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        style={styles.scrollView} // Add this style to ensure visibility
      >
        <View style={[styles.view,]} >
        <Text style = {styles.subHeading}>Weekly Challenges</Text>
        <Text>Ends on 16 Sep 2024</Text>
        <Text>Complete 20 trips and earn 100 extra</Text>
        
        
        <Text></Text>
        </View>
        <View style={[styles.view, { backgroundColor: 'green' }]} />
        <View style={[styles.view, { backgroundColor: 'blue' }]} />
      </ScrollView>
      {/* <View>
          <ProgressCircle
            style={{height: 320}}
            progress={0.3}
            progressColor={'rgb(134, 65, 244)'}
            startAngle={-Math.PI * 0.5}
            endAngle={Math.PI * 0.5}
            strokeWidth={30}
            cornerRadius={0}
          />
        </View> */}
      <View style={styles.dotContainer}>
        <View style={[styles.dot, activeIndex === 0 && styles.activeDot]} >
          
        </View>
        <View style={[styles.dot, activeIndex === 1 && styles.activeDot]} />
        <View style={[styles.dot, activeIndex === 2 && styles.activeDot]} />
      </View>
      
      {/* Dot Indicators */}
      
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalline: {
    height: 1,
    width: '100%',
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#D9D9D9',
  },
  mainHeading: {
    alignSelf: 'center',
    color: colors.textPrimary,
    fontSize: dimension.lg,
    marginBottom: 20,
  },
  subHeading:{
    fontSize:dimension.lg,
    color:colors.textPrimary,
    margin:10,
  },
  animatedLine: {
    height: 1,
    width: '10%', // The width of the animated red line
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
  performanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    width: screenWidth * 0.9, // Adjust width of the performance container
  },
  performanceColumn: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    width: 1,
    backgroundColor: '#ccc',
    height: '100%',
    marginHorizontal: 10,
  },
  performanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  performanceLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  scrollView: {
    width: screenWidth,
    height: 200, // Specify height for the ScrollView
    marginTop: 20,
  },
  view: {
    width: screenWidth,
    height: 200, // Specify height for each view inside the ScrollView
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    flex:1,
    justifyContent:''
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#d3d3d3',
    margin: 8,
  },
  activeDot: {
    backgroundColor: '#000', // Active dot color
  },
});
