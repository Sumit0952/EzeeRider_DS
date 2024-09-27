import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Explore from '../screens/dashboard/Explore'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name = "Explore" component={Explore}/>
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})