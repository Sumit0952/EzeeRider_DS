import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/colors'
import { dimension } from '../../utils/dimension'
import Entypo from 'react-native-vector-icons/Entypo'

const BikeDetails = () => {
    const [Insurance, Handler] = useState(1)

    const InsuranceHandler = () =>{
        if(Insurance === 1){
            Handler(2);
        }
        else if(Insurance === 2){
            Handler(3);
        }
        else Handler(1);
    }
  return (
    <View style = {styles.container}>
      <View style = {styles.row}>
        <View>
            <Text style = {styles.heading}>Bajaj Pulsar 150</Text>
            <Text style = {styles.subText}>7BUP8975</Text>
            <Text style = {styles.subText}>Petrol</Text>
        </View>
        <Image source = {require('../../../assets/images/camera.png')}/> 
      </View>

      <Text style = {styles.subText1}> Year  2018</Text>
      <Text style = {styles.subText1}> Color Blue</Text>

      <Text style = {[styles.heading, {marginTop:30}]}>Documents</Text>

      <TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Vehicle RC</Text>
            </View>
            <Entypo name='chevron-right' size={30} color='#000' style={styles.chevronIcon} />
        </View>
      </TouchableOpacity>
      {Insurance===1 &&(<TouchableOpacity style = {styles.boxContainer}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/check_circle.png')}/>
                <Text style = {styles.containerText}>Vehicle Insurance</Text>
                
            </View>
            <Entypo name='chevron-right' size={30} color='#000' style={styles.chevronIcon} onPress = {InsuranceHandler}/>
        </View>
      </TouchableOpacity>)}
    {Insurance===2 &&(<TouchableOpacity style = {styles.boxContainer1}>
    <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.docContainer}>
            <Image source={require('../../../assets/images/error_org.png')}/>
            <View>
                <Text style = {styles.containerText}>Vehicle Insurance</Text>
                <Text style = {[styles.containerText,{color:'#666'}]}>
                    Expires on 28 - sep - 2024
                </Text>
                </View>
        </View>
        <Entypo name='chevron-right' size={30} color='#000' style={styles.chevronIcon} onPress = {InsuranceHandler}/>
    </View>
    </TouchableOpacity>)}
      {Insurance===3 &&(<TouchableOpacity style = {styles.boxContainer2}>
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.docContainer}>
                <Image source={require('../../../assets/images/error_red.png')}/>
                <View>
                <Text style = {styles.containerText}>Vehicle Insurance</Text>
                <Text style = {[styles.containerText,{color:colors.red}]}>
                    Expired
                </Text>
                </View>
            </View>
            <Entypo name='chevron-right' size={30} color='#000' style={styles.chevronIcon} onPress = {InsuranceHandler}/>
        </View>
      </TouchableOpacity>)}
    </View>
  )
}

export default BikeDetails

const styles = StyleSheet.create({
    container: {
        //marginVertical: 20,
        padding: 20,             
        backgroundColor: '#fff', 
        flex: 1,                  
      },
      row: {
        flexDirection: 'row',    
        alignItems: 'center',    
        justifyContent: 'space-between', 
        marginBottom: 30,        
      },
      heading: {
        fontSize: dimension.lg,  
        fontWeight: 'bold',      
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
        marginVertical:10
        
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