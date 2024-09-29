import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { dimension } from '../../utils/dimension'
import { colors } from '../../utils/colors'

const MyRouteBooking = () => {
  return (
    <View style={styles.container}>
      {/* Home Section */}
      <View style={styles.row}>
        <Entypo name='home' size={24} color='#000' />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Add Home</Text>
          <Text style={styles.subText}>Add your home location</Text>
        </View>
      </View>

      {/* Information Section */}
      <View style={styles.infoRow}>
        <AntDesign name='arrowleft' size={20} color='#000' />
        <Text style={styles.infoText}>
          You will receive rides only toward your home location.
        </Text>
      </View>

      <View style={styles.infoRow}>
        <AntDesign name='arrowleft' size={20} color='#000' />
        <Text style={styles.infoText}>
        You can only enable “My route Booking” ones a day.
        </Text>
      </View>
    </View>
  )
}

export default MyRouteBooking

const styles = StyleSheet.create({
  container: {
    marginVertical:20,
    padding: 20,             // Adds padding around the content
    backgroundColor: '#fff', // Background color for the whole page
    flex: 1,                // Ensures the view takes the full height of the screen
  },
  row: {
    flexDirection: 'row',    // Align items in a row
    alignItems: 'center',    // Align icons and text vertically
    marginBottom: 30,        // Adds spacing between sections
  },
  textContainer: {
    marginLeft: 10,          // Spacing between icon and text
  },
  heading: {
    fontSize: dimension.lg,            // Larger font for the heading
    fontWeight: 'bold',      // Bold text for heading
    color: colors.textPrimary,           // Darker color for better readability
  },
  subText: {
    fontSize: 14,            // Smaller font for the subtext
    color: '#666',           // Light grey color for secondary text
  },
  infoRow: {
    flexDirection: 'row',    // Align icon and text in a row
    alignItems: 'center',    // Center the icon vertically with text
    marginBottom: 15,        // Adds space between info rows
  },
  infoText: {
    fontSize: dimension.md,            // Standard font size
    color: colors.textPrimary,           // Dark color for the info text
    marginLeft: 10,          // Space between the icon and text
  },
})
