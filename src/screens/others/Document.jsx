import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/colors'
import { dimension } from '../../utils/dimension'
import Entypo from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler'

const Document = () => {
  const [licience, licienceState] = useState(false);
  const [IdVerify, IdVerifyState] = useState(false);
  const [VehicleRc, VehicleRcState] = useState(false);
  const [VehicleInsurance, VehicleInsuranceState] = useState(false);

  const Drivinglicience =() =>{
    if(licience === false){
    licienceState(true);
    }
    else licienceState(false)
  };
  const Vehicle = ()=>{
    if(VehicleRc == false){
    VehicleRcState(true);
    }
    else VehicleRcState(false)

  };
  const Id = () =>{
    if(IdVerify === false){
    IdVerifyState(true)
    }
    else IdVerifyState(false)
  }
  const Insurance = () =>{
    if(VehicleInsurance===false)VehicleInsuranceState(true)
    else VehicleInsuranceState(false)
  }
  return (
    <ScrollView style= {styles.container}>
      <Text style = {styles.subHeading}>Drivers Documents</Text>
      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Driving License</Text>
            </View>
            <Entypo name='chevron-down' size={30} color='#000' style={styles.chevronIcon} onPress = {Drivinglicience}/>
        </View>
      </TouchableOpacity>
      {
        licience === true && (
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'5%',padding:'20%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'5%',padding:'20%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            </View>

      )}
      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Profile Photo</Text>
            </View>
            <Entypo name='chevron-down' size={30} color='#000' style={styles.chevronIcon}/>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Identity Verification</Text>
            </View>
            <Entypo name='chevron-down' size={30} color='#000' style={styles.chevronIcon} onPress = {Id}/>
        </View>
      </TouchableOpacity>
      {
        IdVerify === true && (
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'1%',padding:'15%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'1%',padding:'15%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'1%',padding:'15%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            </View>

      )}

      <Text style = {styles.subHeading}>Bajaj Pulsar 150</Text>
      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Vehicle RC</Text>
            </View>
            <Entypo name='chevron-down' size={30} color='#000' style={styles.chevronIcon} onPress = {Vehicle}/>
        </View>
      </TouchableOpacity>
      {
        VehicleRc === true && (
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'5%',padding:'20%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'5%',padding:'20%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            </View>

      )}
      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Vehicle Insurance</Text>
            </View>
            <Entypo name='chevron-down' size={30} color='#000' style={styles.chevronIcon} onPress = {Insurance}/>
        </View>
      </TouchableOpacity>
      {
        VehicleInsurance === true && (
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'5%',padding:'20%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {{backgroundColor:'#d9d9d9',margin:'5%',padding:'20%',borderRadius:20}}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
            </View>

      )}
      <Text style = {styles.subHeading}>Bank Details</Text>
      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Bank Details</Text>
            </View>
            <Entypo name='chevron-down' size={30} color='#000' style={styles.chevronIcon}/>
        </View>
      </TouchableOpacity>
      
    </ScrollView>
  )
}

export default Document

const styles = StyleSheet.create({
  container: {
    padding: 10,             
    backgroundColor: '#fff', 
    flex: 1,                  
  },
  row: {
    flexDirection: 'row',    
    alignItems: 'center',    
    justifyContent: 'space-between', 
    marginBottom: 30,        
  },
  subHeading: {
    fontSize: dimension.lg,  
    marginTop:10,
    color: colors.textPrimary, 
    
  },
  subText: {
    fontSize: 14,            
    color: '#888888',           
    marginTop:10
  },
  subText1: {
    fontSize: dimension.md,            
    color: colors.textPrimary,           
    marginTop:10
  },
  boxContainer:{
    
    backgroundColor:'#f2faf6',
    marginVertical:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#78cba1'
    
  },
  boxContainer1:{
    backgroundColor:'#fff1e1',
    marginVertical:10
    
  },
  boxContainer2:{
    backgroundColor:'#fadddd',
    marginVertical:10
    
  },
  docContainer:{
    flexDirection:'row',
    margin:30,

  },
  containerText:{
    paddingLeft:20,
    color:colors.textPrimary,
    fontSize:dimension.md

  },
  chevronIcon: {
    alignSelf: 'center',   // Push chevron to the right end of the row
  },
})