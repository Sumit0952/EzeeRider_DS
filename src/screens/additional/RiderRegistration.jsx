import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dimension } from '../../utils/dimension';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const RiderRegistration = () => {

    const navigation = useNavigation();
    const handlePress = (screen) => {
      navigation.navigate(screen);
   
  
    };

    const options = [
        { key: '1', title: 'Profile Info' , extraText: 'Find answers to your queries and raise tickets',screen :'ProfileInfor',name: "arrowright"},
        { key: '2', title: 'Driving License', extraText: 'Check status of tickets raised', screen:'DrivingLIcience',name : "arrowright"},
        { key: '3', title: 'Vehicle RC',  extraText: '' ,screen:'VehicleRc',name : "arrowright"},
        { key: '4', title: 'Add Vehicle',  extraText: '',screen:'AddVehicle' ,name : "arrowright"},
        { key: '5', title: 'Identity Verification',  extraText: '',screen:'IdVerify' ,name : "arrowright"},
        { key: '6', title: 'Bank Details',  extraText: '',screen:'AddAccount' ,name : "arrowright"},
      ];
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Complete all the steps to activate your account</Text>

      <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option}
              onPress={() => handlePress(item.screen)}>
                <View style = {{flexDirection:'row', justifyContent:'space-between',paddingVertical:'15%'}}>
                
                  <Text style={styles.optionText}>{item.title}</Text>
                  <AntDesign name="arrowright" size={24} color="#0056f6" style={styles.chevronIcon} />
                  </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.key}
          />
    </View>
  )
}

export default RiderRegistration

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:'5%',
        backgroundColor:"#fff"
    },
    heading:{
        color:"#0056f6",
        fontSize:dimension.lg
    },
    optionText:{
        color:colors.textPrimary,
        fontSize:dimension.lg
    }
})