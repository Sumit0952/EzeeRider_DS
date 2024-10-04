import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Header from '../components/Header';
import HelpCenter from '../screens/additional/HelpCenter';
import SupportTicket from '../screens/additional/SupportTicket';
import RiderRegistration from '../screens/additional/RiderRegistration';
import ProfileInfor from '../screens/additional/ProfileInfor';
import DrivingLIcience from '../screens/additional/DrivingLIcience';
import VehicleRc from '../screens/additional/VehicleRc';
import AddVehicle from '../screens/additional/AddVehicle';
import IdVerify from '../screens/additional/IdVerify';
import AddAccount from '../screens/additional/AddAccount';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
   
       <Stack.Navigator>
        <Stack.Screen name = 'RiderRegistration' component={RiderRegistration} />
        <Stack.Screen name = 'ProfileInfor' component={ProfileInfor}/>
        <Stack.Screen name = 'DrivingLIcience' component={DrivingLIcience}/>
        <Stack.Screen name = 'VehicleRc' component={VehicleRc}/>
        <Stack.Screen name = 'AddVehicle' component={AddVehicle}/>
        <Stack.Screen name = 'IdVerify' component={IdVerify}/>
        <Stack.Screen name = 'AddAccount' component={AddAccount}/>
         <Stack.Screen name = 'Tabnav' component={TabNavigation}  options={{ headerShown: false }} />
         <Stack.Screen name = 'header' component={Header}  options={{ headerShown: false }} />
         <Stack.Screen name = 'HelpCenter' component={HelpCenter}  options={{ headerShown: false }} />
         <Stack.Screen name = 'SupportTicket' component={SupportTicket}  options={{ headerShown: false }} />
       </Stack.Navigator>
   
  )
}

export default MainStackNavigation

const styles = StyleSheet.create({})