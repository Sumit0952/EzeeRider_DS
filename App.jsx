import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './src/navigation/TabNavigation';
import Header from './src/components/Header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStackNavigation from './src/navigation/MainStackNavigation';

const Drawer = createDrawerNavigator();
const navigation = createNativeStackNavigator()

const App = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <View style={styles.container}>
        {/* Header at the top of all screens */}
        

        {/* Tab or Drawer navigation */}
        {/* If you want to use Drawer instead of Tab, uncomment the Drawer.Navigator */}
        {/* 
        <Drawer.Navigator>
          <Drawer.Screen name="HOME" component={HomeScreen} />
          <Drawer.Screen name="FEEDBACK" component={FeedbackScreen} />
        </Drawer.Navigator> 
        */}
        
        {/* Bottom Tab Navigation */}
        <MainStackNavigation />
      </View>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes the full screen space
  },
});
