import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Header from '../components/Header';
import HelpCenter from '../screens/additional/HelpCenter';
import SupportTicket from '../screens/additional/SupportTicket';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
   
       <Stack.Navigator>
         <Stack.Screen name = 'Tabnav' component={TabNavigation}  options={{ headerShown: false }} />
         <Stack.Screen name = 'header' component={Header}  options={{ headerShown: false }} />
         <Stack.Screen name = 'HelpCenter' component={HelpCenter}  options={{ headerShown: false }} />
         <Stack.Screen name = 'SupportTicket' component={SupportTicket}  options={{ headerShown: false }} />
       </Stack.Navigator>
   
  )
}

export default MainStackNavigation

const styles = StyleSheet.create({})