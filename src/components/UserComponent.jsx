import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { dimension } from '../utils/dimension';
import { driver } from '../utils/inputs';

const UserComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={require("../../assets/images/user.png")} />
      <Text style={styles.userName}>{driver.Name}</Text>
      <TouchableOpacity style = {{backgroundColor: '#fff', // Set background color to white
    borderColor: 'gray', // Set border color to gray
    borderWidth: 1, // Add border width
    borderRadius: 30,}}>
        <Text style={styles.rating}>{driver.rating}<MaterialIcons
              name='star'
              size={20}
              color= '#FFD700'
            /></Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%', // Take full width
    paddingVertical: 10, // Optional: Add vertical padding for better spacing
  },
  userImage: {
    fontSize: dimension.md,
    borderRadius: 35,
  },
  userName: {
    fontSize: dimension.md,
    color: colors.textPrimary,
    flex: 1, // Allow text to take available space
    marginLeft: 20,
    fontWeight:'bold'
  },
  rating: {
    fontSize: dimension.lg,
    color: colors.textPrimary,
    marginLeft: 10,
  },
});
