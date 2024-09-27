<Switch
          value={isSwitchOn}
          onValueChange={toggleSwitch}
          disabled={false}
          activeText={'On'}
          inActiveText = {"              Arrived"}
          activeTextStyle ={{color:"fff",padding:"30%",fontSize:20}}
          
          circleSize={69}
          
          //barHeight={1}
          //circleBorderWidth={3}
          backgroundActive={'#24a665'}
          backgroundInactive={'#24a665'}
          circleActiveColor={'#fff'}
          circleInActiveColor={'#fff'}
          changeValueImmediately={true}
          renderActiveText={false}
          renderInsideCircle={() => <Image style = {{height:30,width:30}} resizeMode="contain" source={require("../screens/two_wheeler.png")} />}
          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
          renderInActiveText={true}
          switchWidthMultiplier={4}
          switchBorderRadius={35}
          switchLeftPx={1}
        switchRightPx={1}
          
        />

        <MaterialIcons
              name={rating >= star ? 'star' : 'star-border'}
              size={30}
              color={rating >= star ? '#FFD700' : '#ccc'}
            />import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



            <SOS
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmSos}
      />


       // Function to handle SOS button press
  const handleSosPress = () => {
    setIsModalVisible(true); // Show the modal
  };

  // Function to handle close modal
  const handleCloseModal = () => {
    setIsModalVisible(false); // Hide the modal
  };

  const handleConfirmSos = () => {
    // Handle SOS confirmation (e.g., send an alert, call emergency number)
    handleCloseModal(); // Close modal after confirming
  };