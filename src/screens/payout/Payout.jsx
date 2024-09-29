import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { dimension } from '../../utils/dimension'
import { colors } from '../../utils/colors'
import PayoutDetails from '../../components/PayoutDetails'

const Payout = () => {
  const [modelVisible, modelVisibleState] = useState(false);

  const  onArrowPress= () => {
    modelVisibleState(true);
  };

  const closeModal = () => {
    modelVisibleState(false);
  };

  return (
    <View style={styles.container}>
       <View style={styles.row}>
        
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Balance</Text>
          <Text style={styles.subText}>Available cash limit :₹ 300</Text>
        </View>
        {/* Chevron icon moved to the right */}
        <Text style = {styles.balanceValue}> ₹ 300</Text>
      </View>
      <View style = {styles.line}/>
      <View style = {styles.row}>
        <Text style = {styles.heading}>Withdrawable amount</Text>
        <Text style = {styles.balanceValue}>₹ 300</Text>
        
      </View>

      <View style = {{flexDirection:'row',paddingVertical:10}}>
        <Text style = {{color:colors.grn,paddingHorizontal:10}}>
          View Details
        </Text>
        <TouchableOpacity onPress = {onArrowPress}>
        <Image style = {{alignSelf:'center',marginTop:5}} source={require('../../../assets/images/arrow_circle_right.png')} />
        </TouchableOpacity>

        
      </View>


      <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {[styles.button,{backgroundColor:colors.grn}]}>
          <Text style = {styles.buttonText}>
            Deposit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button,{backgroundColor:'#818587'}]}>
          <Text style = {styles.buttonText}>
            Withdraw
          </Text>
        </TouchableOpacity>
      </View>

      <PayoutDetails
        isVisible = {modelVisible}
        onClose = {closeModal}
        
      />
    </View>
  )
}

export default Payout

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
              
    flex: 1,                 // Ensure text container takes the available width
  },
  heading: {
    fontSize: dimension.lg,  // Larger font for the heading
    fontWeight: '600',      // Bold text for heading
    color: colors.textPrimary, // Darker color for better readability
  },
  subText: {
    fontSize: 14,            // Smaller font for the subtext
    color: '#888888',           // Light grey color for secondary text
    marginTop:10
  },
  balanceValue:{
    fontSize:dimension.lg,
    color:colors.textPrimary,
    
    fontWeight:'black',
  },
  line:{
    height:1,
    width:'100%',
    borderWidth:1,
    marginBottom:20,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
    borderRadius:20,
    padding:'3%',
    
  },
  buttonText:{
    marginHorizontal:40,
    color:'#fff'
  }
})