import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; 
import FloatingBottomSheet from './Help';
import ModelDialog from './ModelDialog';
import ModelDialog1 from './ModelDialog1';
import { Switch } from 'react-native-switch';

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isOfflineConfirmationVisible, setOfflineConfirmationVisible] = useState(false);
  const [isOnlineConfirmationVisible, setOnlineConfirmationVisible] = useState(false);

  const toggleSwitch = () => {
    if (isSwitchOn) {
      setOfflineConfirmationVisible(true); // Show confirmation for going offline
    } else {
      setOnlineConfirmationVisible(true); // Show confirmation for going online
    }
  };

  const handleBellPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const confirmGoOffline = () => {
    setIsSwitchOn(false);
    setOfflineConfirmationVisible(false);
  };

  const confirmGoOnline = () => {
    setIsSwitchOn(true);
    setOnlineConfirmationVisible(false);
  };

  const cancelGoOffline = () => {
    setOfflineConfirmationVisible(false);
  };

  const cancelGoOnline = () => {
    setOnlineConfirmationVisible(false);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <AntDesign name="questioncircleo" size={30} color="#000" style={styles.icon} />
        <TouchableOpacity onPress={handleBellPress}>
          <AntDesign name="bells" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <FontAwesome6 name="triangle-exclamation" size={30} color="red" style={styles.icon} />
      </View>
      <Switch
        circleSize={30}
        activeText={''}
        inActiveText={''}
        value={isSwitchOn}
        onValueChange={toggleSwitch}
        thumbColor={isSwitchOn ? "#f5dd4b" : "#f4f3f4"}
        trackColor={{ false: "#888888", true: "#24a665" }}

        switchLeftPx={2.7} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={2.7} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
      />
      
      {/* Confirmation Modal for Going Offline */}
      <ModelDialog
        isVisible={isOfflineConfirmationVisible}
        onClose={cancelGoOffline}
        onConfirm={confirmGoOffline}
      />
      
      {/* Online Confirmation Modal */}
      <ModelDialog1
        isVisible={isOnlineConfirmationVisible}
        onClose={cancelGoOnline}
        onConfirm={confirmGoOnline}
      />
      
      {/* Floating Bottom Sheet for Help Options */}
      <FloatingBottomSheet 
        isVisible={isModalVisible} 
        onClose={closeModal} 
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  icon: {
    marginHorizontal: 10,
  },
});
