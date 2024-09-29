import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { dimension } from '../../utils/dimension'
import Entypo from 'react-native-vector-icons/Entypo'

const Vehicles = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.row}>
        <Image source={require('../../../assets/images/bike_grey.png')} size={24} color='#000' />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Bajaj Pulsar 150</Text>
          <Text style={styles.subText}>CH345098</Text>
        </View>
        {/* Chevron icon moved to the right */}
        <Entypo name='chevron-right' size={30} color='#000' style={styles.chevronIcon} onPress ={()=>navigation.navigate('BikeDetails')} />
      </View>
    </View>
  )
}

export default Vehicles

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,             // Adds padding around the content
    backgroundColor: '#fff', // Background color for the whole page
    flex: 1,                 // Ensures the view takes the full height of the screen
  },
  row: {
    flexDirection: 'row',    // Align items in a row
    alignItems: 'center',    // Align icons and text vertically
    justifyContent: 'space-between', // Space between items to push chevron to the right
    marginBottom: 30,        // Adds spacing between sections
  },
  textContainer: {
    marginLeft: 10,          // Spacing between icon and text
    flex: 1,                 // Ensure text container takes the available width
  },
  heading: {
    fontSize: dimension.lg,  // Larger font for the heading
    fontWeight: 'bold',      // Bold text for heading
    color: colors.textPrimary, // Darker color for better readability
  },
  subText: {
    fontSize: 14,            // Smaller font for the subtext
    color: '#888888',           // Light grey color for secondary text
    marginTop:10
  },
  chevronIcon: {
    alignSelf: 'flex-end',   // Push chevron to the right end of the row
  },
})
