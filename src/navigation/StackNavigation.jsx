import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import More from '../screens/others/More';
import ManageProfile from '../screens/others/ManageProfile';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BankDetails from '../screens/others/BankDetails';
import AddBankAccount from '../screens/others/AddBankAccount';
import TripAct from '../screens/others/TripAct';
import TripDetails from '../screens/others/TripDetails';
import MyRouteBooking from '../screens/others/MyRouteBooking';
import Vehicles from '../screens/others/Vehicles';
import BikeDetails from '../screens/others/BikeDetails';
import Document from '../screens/others/Document';
import EmerContact from '../screens/others/EmerContact';
import SupportTicket from '../screens/additional/SupportTicket';
import HelpCenter from '../screens/additional/HelpCenter';



const Stack = createNativeStackNavigator();

const StackNavigation = ({ navigation,route }) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["Profile",];
    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
     } else {
     navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
}, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="more" 
        component={More} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={ManageProfile} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="Bank Details" 
        component={BankDetails} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="AddBankAccount" 
        component={AddBankAccount} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="TripAct" 
        component={TripAct} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="TripDetails" 
        component={TripDetails} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="MyRouteBooking" 
        component={MyRouteBooking} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="Vehicles" 
        component={Vehicles} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="BikeDetails" 
        component={BikeDetails} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="Document" 
        component={Document} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="EmerContact" 
        component={EmerContact} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="HelpCenter" 
        component={HelpCenter} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      {/* <Stack.Screen 
        name="HelpCenter" 
        component={HelpCenter} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      />
      <Stack.Screen 
        name="SupportTicket" 
        component={SupportTicket} 
        options={{ 
          headerShown: true,
          // Hide the tab bar when this screen is active
          // Using a listener to access the parent navigator and hide the tab bar
          tabBarStyle: { display: 'none' },  // This doesn't work here
        }} 
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
