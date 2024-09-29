import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons'; // Assuming you're using Expo for icons
import  AntDesign  from 'react-native-vector-icons/AntDesign'; // Assuming you're using Expo for icons
import  Feather  from 'react-native-vector-icons/Feather'; // Assuming you're using Expo for icons
import  Entypo  from 'react-native-vector-icons/Entypo'; // Assuming you're using Expo for icons
import { colors } from '../../utils/colors';
import { dimension } from '../../utils/dimension';
import { Link, useNavigation } from '@react-navigation/native';
import AddBankAccount from './AddBankAccount';

const BankDetails = () => {
    const navigation = useNavigation();

    const AddBankAccountHandler=() =>{
        navigation.navigate(AddBankAccount)
    }

    const [details, showdetails] = useState(false)

    const onIconPress = () =>{
        if(details===true){
            showdetails(false)
        }

        else if (details===false){
            showdetails(true)
        }
        
        console.log(details)
    }
  const accounts = [
    {
      id: '1',
      type: 'Personal',
      accountNumber: '******7896',
      bankLogo: 'https://your-bank-logo-url.com/logo.png', // Placeholder for bank logo
    },

    

    
  ];

  const renderAccount = ({ item }) => (
    <View style={styles.accountCard}>
      <View style={styles.accountInfo}>
        <Image source={{ uri: item.bankLogo }} style={styles.bankLogo} />
        <View>
          <Text style={styles.accountType}>{item.type}</Text>
          <Text style={styles.accountNumber}>{item.accountNumber}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onIconPress}>
      <Ionicons name="chevron-down-outline" size={20} color="#666" />
      </TouchableOpacity>
    </View>




  );



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>

      <FlatList
        data={accounts}
        renderItem={renderAccount}
        keyExtractor={item => item.id}
        style={styles.accountList}
      />
    
    {details===true && (
      <TouchableOpacity style = {{backgroundColor:'#dfe6fc', padding:10,flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
        <View style = {{flexDirection:'row'}}>
            <Feather name ='edit' color='#0056f6' size ={20}/>
            <Text style ={{marginLeft:10,color:'#0056f6'}}>
                Delete Account
            </Text>
        </View>
        <View style = {{flexDirection:'row',}}>
            <AntDesign name ='delete' color='#0056f6' size ={20}/>
            <Text style ={{marginLeft:10,color:'#0056f6'}}>
                Rename Account
            </Text>
        </View>
       
      
      </TouchableOpacity>)}


      <View style={styles.addAccountContainer}>
        <Ionicons name="card-outline" size={24} color="#000" />
        <Text style={styles.addAccountText}>Add account</Text>
        <TouchableOpacity>
          <Text style={styles.addText} onPress={AddBankAccountHandler}>Add</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent:'flex-start'
    
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:colors.textPrimary
  },
  accountCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
   // marginBottom: 20,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  accountType: {
    fontSize: dimension.md,
    fontWeight: '500',
    color:colors.textPrimary
  },
  accountNumber: {
    fontSize: dimension.md,
    color: colors.textPrimary,
  },
  accountList: {
    marginBottom: 20,
  },
  addAccountContainer: {
    flexDirection: 'row',
    //alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  addAccountText: {
    fontSize: dimension.md,
    marginLeft: 10,
    flex: 1,
    color:colors.textPrimary
  },
  addText: {
    color: colors.red,
  },
});

export default BankDetails;
