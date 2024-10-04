import StackNavigation from './StackNavigation';  // Import your Stack Navigation
import { StyleSheet ,Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Explore from '../screens/dashboard/Explore';
import Trips from '../screens/Trips/Trips';
import Earning from '../screens/earning/Earning';
import Payout from '../screens/payout/Payout';
import { colors } from '../utils/colors';
import More from '../screens/others/More';



const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'Explore') {
            iconName = focused ? 'compass' : 'compass-outline';
            IconComponent = Ionicons;
          } else if (route.name === 'Trips') {
            iconName = 'motorcycle';
            IconComponent = FontAwesome6;
          } else if (route.name === 'Earning') {
            iconName = 'rupee-sign';
            IconComponent = FontAwesome5;
          } else if (route.name === 'Payout') {
            iconName = 'wallet';
            IconComponent = FontAwesome5;
          } else if (route.name === 'More') {
            iconName = 'navicon';
            IconComponent = EvilIcons;
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.iconPrimary, // Active color for icon and label
        tabBarInactiveTintColor: colors.iconSecondary, // Inactive color for icon and label
      })}
    >
      
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Trips" component={Trips} />
      <Tab.Screen name="Earning" component={Earning} />
      <Tab.Screen name="Payout" component={Payout} />
      <Tab.Screen name="More" component={StackNavigation} />  
    </Tab.Navigator>
  );
};




export default TabNavigation;

const styles = StyleSheet.create({});