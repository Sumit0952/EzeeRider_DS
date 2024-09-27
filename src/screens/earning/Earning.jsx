import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { dimension } from '../../utils/dimension';
import { colors } from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Assuming you're using Ionicons for icons
import { ScrollView } from 'react-native-gesture-handler';

const Earning = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  // Sample data for the chart
  const data = {
    labels: activeTab === 'Daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
             activeTab === 'Weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] :
             ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: activeTab === 'Daily' ? [30, 40, 35, 50, 45, 60, 70] :
             activeTab === 'Weekly' ? [200, 300, 250, 400] :
             [1500, 2000, 1800, 2200, 2100, 2400, 2600]
    }]
  };

  // Sample performance data (can be fetched dynamically based on tab)
  const performanceData = {
    Daily: {
      earnings: '₹500',
      tripTime: '3h 30m',
      totalRides: 10,
    },
    Weekly: {
      earnings: '₹3500',
      tripTime: '21h',
      totalRides: 70,
    },
    Monthly: {
      earnings: '₹14,000',
      tripTime: '90h',
      totalRides: 280,
    }
  };

  // Sample FlatList data
  const options = [
    { id: '1', label: 'Rides Earning', amount: '₹400', image: require('../../../assets/images/bike_blu.png'), extraText: 'Earning per trip' },
    { id: '2', label: 'Surge Pay', amount: '₹50', image: require('../../../assets/images/surge.png'), extraText: 'Extra pay during certain time slots' },
    { id: '3', label: 'Customer Tips', amount: '₹30', image: require('../../../assets/images/tips.png'), extraText: '' },
    { id: '4', label: 'Offers', amount: '₹0.0', image: require('../../../assets/images/other.png'), extraText: '', comingSoon: true }, // Added `comingSoon` property
  ];

  // Get the current performance data based on activeTab
  const currentPerformance = performanceData[activeTab];

  // Dynamic heading based on the active tab
  const performanceHeading = `Performance of the ${activeTab}`;

  // FlatList item render function
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.listItem,
        item.comingSoon && styles.comingSoonBackground, // Apply custom background for "coming soon"
      ]}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.listItemText}>{item.label}</Text>
        <Text style={styles.extraText}>{item.extraText}</Text>
        </View>
        {item.comingSoon && (
          <View style={styles.comingSoonTag}>
            <Text style={styles.comingSoonText}>Coming Soon</Text>
          </View>
          
        )}
      
      <Text style={styles.amount}>{item.amount}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* Filter Button */}
        

        {/* Tabs for switching views */}
        <View style={styles.tabContainer}>
          <Text style={[styles.tabText, activeTab === 'Daily' && styles.activeTabText]} onPress={() => setActiveTab('Daily')}>Daily</Text>
          <Text style={[styles.tabText, activeTab === 'Weekly' && styles.activeTabText]} onPress={() => setActiveTab('Weekly')}>Weekly</Text>
          <Text style={[styles.tabText, activeTab === 'Monthly' && styles.activeTabText]} onPress={() => setActiveTab('Monthly')}>Monthly</Text>
          
          <TouchableOpacity style={styles.filterButton}>
          <View style= {{flexDirection:'row'}}>
          <AntDesign name="filter" size={20} color="#0056f6" />
          <Text style={{color:'#0056f6'}}>Filter</Text>
          </View>
        </TouchableOpacity>
        
        </View>
          
        {/* Underline directly below the active tab */}
        <View style = {{flexDirection:'column'}}>
          
          <View style={[styles.underline, { left: activeTab === 'Daily' ? 0 : activeTab === 'Weekly' ? '20%' : '45%' }]} />
          
        </View>

        {/* Bar Chart */}
        <BarChart
          data={data}
          width={Dimensions.get('window').width - 30}
          height={220}
          yAxisLabel=""
          yAxisInterval={14}
          showValuesOnTopOfBars={true}
          chartConfig={{
            fillShadowGradientOpacity: 1,
            backgroundColor: '#f2f2f2',
            backgroundGradientFrom: '#f2f2f2',
            backgroundGradientTo: '#f2f2f2',
            decimalCount: 2,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              borderColor: '#000',
              borderWidth: 6,
              borderBottomWidth: 0,
            },
            propsForLabels: {
              fontSize: dimension.lg,
            },
            propsForHorizontalLabels: {
              fill: 'transparent',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingRight: 0,
          }}
        />

        {/* Dynamic Heading for Performance */}
        <Text style={styles.performanceHeading}>{performanceHeading}</Text>

        {/* Performance Section */}
        <View style={styles.performanceContainer}>
          <View style={styles.performanceColumn}>
            <Text style={styles.performanceLabel}>Earnings</Text>
            <Text style={styles.performanceValue}>{currentPerformance.earnings}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.performanceColumn}>
            <Text style={styles.performanceLabel}>Trip Time</Text>
            <Text style={styles.performanceValue}>{currentPerformance.tripTime}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.performanceColumn}>
            <Text style={styles.performanceLabel}>Total Rides</Text>
            <Text style={styles.performanceValue}>{currentPerformance.totalRides}</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.performanceHeading}>{performanceHeading}</Text>
        <Text style={styles.performanceHeading}>{currentPerformance.earnings}</Text>
        </View>
        {/* FlatList for additional options */}
        
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
        
      </View>
      <Text style={{ paddingTop: 10, fontSize: dimension.md, fontWeight: 'bold', color: colors.textPrimary }}>
        Settlement will be calculated at the end of the week
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  filterButton: {
    //flexDirection:'column',
    //flex:1,
    backgroundColor: '#dfe6fc', // Light blue color
    width: 70,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    //paddingLeft:0,
    
    alignSelf: 'flex-end', // Align to the right
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tabText: {
    fontSize: dimension.lg,
    color: colors.textPrimary,
    paddingVertical: 10,
    padding: dimension.lg,
    textAlign: 'center',
  },
  activeTabText: {
    color: '#0056f6',
    fontWeight: 'bold',
  },
  underline: {
    position: 'absolute',
    height: 4,
    width: '20%',
    backgroundColor: '#0056f6',
    bottom: 0,
    zIndex: -1,
  },
  performanceHeading: {
    fontSize: dimension.lg,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    margin: dimension.md,
    marginVertical: 15,
  },
  performanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  performanceColumn: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    width: 1,
    backgroundColor: '#ccc',
    height: '100%',
    marginHorizontal: 10,
  },
  performanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  performanceLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  flatList: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  comingSoonBackground: {
    backgroundColor: '#f4f4f4', // Background for "coming soon" items
  },
  image: {
    marginRight: 20,
  },
  itemTextContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  extraText: {
    fontSize: 12,
    color: 'gray',
  },
  comingSoonTag: {
    //flexDirection:'column',
    backgroundColor: colors.red, // Tag color
    borderRadius: 25,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginTop: 4,
    alignSelf: 'center',
    marginRight:60,
  },
  comingSoonText: {
    //paddingRight:10,
    color: '#fff',
    fontSize: dimension.md,
  },
  listItemText: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  listSeparator: {
    height: 0,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
});

export default Earning;
