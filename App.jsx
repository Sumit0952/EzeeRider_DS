import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './src/navigation/TabNavigation';
import Header from './src/components/Header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const navigation = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <View style={styles.container}>
      
        <TabNavigation />
      </View>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes the full screen space
    backgroundColor:'#fff',
    color:'#fff'
  },
});
