import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { dimension } from '../../utils/dimension';
import { colors } from '../../utils/colors';
import { location } from '../../utils/inputs';
import UserComponent from '../../components/UserComponent';

const TripDetails = ({route}) => {

    const [connectorHeight, setConnectorHeight] = useState(0);

    const [dayName, setDayName] = useState('');


    const {trip} = route.params;
    console.log(trip);


    function dayofweek(d, m, y) {
        let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        y -= m < 3 ? 1 : 0;
        return Math.floor((y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7);
      }
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    let dateStr = trip.date;
    useEffect(() => {

        const dateParts = dateStr.split('-');
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
    
        const dayOfWeek = dayofweek(day, month, year);
    

        setDayName(dayNames[dayOfWeek]);
      }, []);

      console.log(dayName)


      const onTextLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        setConnectorHeight(height - 20); // Adjust the height of the connector to match the text block
      };
  return (

    <View style = {styles.container}>
      <View style = {styles.blueBox}> 
        <View style = {styles.content}>
        <Text style = {styles.label}>Earning</Text>
        <Text style = {styles.labelText}>{trip.earnings}</Text>
        </View>
        <View style = {styles.separator}/>

        <View style = {styles.content}>
        <Text style = {styles.label}>Trip time</Text>
        <Text style = {styles.labelText}>{trip.tripTime}</Text>
        </View>
        
        <View style = {styles.separator}/>

        <View style = {styles.content}>
        <Text style = {styles.label}>Distance</Text>
        <Text style = {styles.labelText}>{trip.distance}</Text>
        </View>
        



      </View>

        <View style = {{alignSelf:'center'}}>
        <Text style = {{color:'#666',fontSize:dimension.md}}>{dayName}, {trip.date}</Text>
        </View>

        <View style = {{backgroundColor:'#dfe6fc',marginVertical:'5%',}}>
            

            <Text style = {{margin:'2%',color:'#0056f6' }}>Trip ID : {trip.TripId}</Text>
        </View>
        

        <View style={styles.addressContainer}>
          {/* Marker and connector layout */}
          <View>
          <View style={styles.marker_star} />
          <View style={[styles.connector, { height: connectorHeight }]} />
          <View style={styles.marker_end} />
          </View>
          {/* Addresses */}
          <View style={styles.addressBlock} onLayout={onTextLayout}>
            <Text style={styles.addressText}>{location.pickup.getAddress()}</Text>
            <Text style={styles.addressText}>{location.drop.getAddress()}</Text>
          </View>
        </View>

        <View style={{  alignItems: 'flex-start' ,paddingVertical:10,marginHorizontal:10}}>
          <UserComponent />
        </View>

        <View style = {{padding:10}}>
            <View style = {{padding:10,borderWidth:1,borderTopRightRadius:10,borderTopLeftRadius:10,borderColor:'#D9D9D9'}}>
                <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style ={{color:colors.textPrimary,fontSize:dimension.md}}>Base rate</Text>
                    <Text style ={{color:colors.textPrimary,fontSize:dimension.md}}>{trip.earnings}</Text>
                </View>
            </View>

            <View style = {{padding:10,borderWidth:1,borderColor:'#D9D9D9'}}>
                <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style ={{color:colors.textPrimary,fontSize:dimension.md}}>Time</Text>
                    <Text style ={{color:colors.textPrimary,fontSize:dimension.md}}>{trip.tripTime}</Text>
                </View>
            </View>

            <View style = {{padding:10,borderWidth:1,borderColor:'#D9D9D9'}}>
                <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style ={{color:colors.textPrimary,fontSize:dimension.md}}>Distance</Text>
                    <Text style ={{color:colors.textPrimary,fontSize:dimension.md}}>{trip.distance}</Text>
                </View>
            </View>

            <View style = {{padding:10,borderWidth:1,borderColor:'#D9D9D9',borderBottomRightRadius:10,borderBottomLeftRadius:10,backgroundColor:'#dfe6fc'}}>
                <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style = {{color:'#0056f6',fontSize:dimension.md}}>Total</Text>
                    <Text style = {{color:'#0056f6',fontSize:dimension.md}}>7689</Text>
                </View>
            </View>
        </View>


        
            <View style ={{margin:'2%', backgroundColor:'#f5f5f5',borderWidth:1,borderRadius:5,borderColor:'#D9D9D9',padding:10}}>
                <View style = {{margin:'2%',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style ={{color:colors.textPrimary, }}>Need help on this trip?</Text>
                <Text style = {{color:colors.grn}}> Help Center</Text>
                </View>
            </View>
        

    </View>
  )
}

export default TripDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    blueBox:{

        flexDirection:'row',
        justifyContent:'space-between',
        //width:'100%',
        //verticalAlign:'middle',
        alignItems:'center',
        backgroundColor:'#0056f6',
        height:'15%',
        margin:'10%',
        marginBottom:'1%',
        borderRadius:20,


    },
    separator: {
        marginTop:10,
        width:2,
        backgroundColor: '#fff',
        height: '80%',
        marginHorizontal: 10,
      },
    label:{
        color:'#fff',
        fontSize:dimension.md,
    },
    labelText:{
        color:'#fff',
        fontSize:dimension.xl,
    },
    content:{
        
        padding:20
    },
    addressContainer: {
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
      },
      addressBlock: {
        flex: 1,
        marginLeft: 10,
      },
      addressText: {
        fontSize: 16,
        color: colors.textPrimary,
        marginVertical: 15,
        fontWeight:"bold"
      },
      connector: {
        width: 2,
        //height: 160, // Adjust this based on spacing between the two addresses
        backgroundColor: '#ccc',
        alignSelf: 'center', // Center vertically between markers
      },
      marker_star: {
        width: 10,
        height: 10,
        
        backgroundColor: '#008000',
        borderRadius: 5,
        marginBottom: 10,
      },
      marker_end: {
        width: 10,
        height: 10,
        
        backgroundColor: '#ff0000',
        borderRadius: 5,
        marginBottom: 10,
      },
})