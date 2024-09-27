const earningsData = [
    { date: '2024-09-21', amt: 120 },
    { date: '2024-09-22', amt: 200 },
    { date: '2024-09-23', amt: 150 },
    { date: '2024-09-24', amt: 180 },
    
  ];
  

function addEarnings(date, amount) {
    earningsData.push({ date, amount });
  }
    addEarnings('2024-09-25', 220);
  

    import moment from 'moment';

    function getEarningsByDay(day) {
      return earningsData.filter((entry) => moment(entry.date).isSame(day, 'day'));
    }
    
    function getEarningsByWeek(weekStartDate) {
      return earningsData.filter((entry) => {
        const entryDate = moment(entry.date);
        return entryDate.isSameOrAfter(moment(weekStartDate), 'day') &&
               entryDate.isBefore(moment(weekStartDate).add(7, 'days'), 'day');
      });
    }
    
    function getEarningsByMonth(monthStartDate) {
      return earningsData.filter((entry) => moment(entry.date).isSame(monthStartDate, 'month'));
    }
    


// Function to prepare data for the bar graph
function prepareBarChartData(viewType) {
    let labels = [];
    let dataset = [];
    
    if (viewType === 'Daily') {
      labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      dataset = [0, 0, 0, 0, 0, 0, 0];
      
      const currentWeekStart = moment().startOf('isoWeek'); 
      const weeklyEarnings = getEarningsByWeek(currentWeekStart);
      
      weeklyEarnings.forEach((entry) => {
        const dayOfWeek = moment(entry.date).isoWeekday() - 1; 
        dataset[dayOfWeek] = entry.amount;
      });
      
    } else if (viewType === 'Weekly') {
      labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      dataset = [0, 0, 0, 0]; 
      
      const currentMonthStart = moment().startOf('month');
      
      for (let i = 0; i < 4; i++) {
        const weekStart = currentMonthStart.clone().add(i * 7, 'days');
        const weeklyEarnings = getEarningsByWeek(weekStart);
        dataset[i] = weeklyEarnings.reduce((sum, entry) => sum + entry.amount, 0);
      }
      
    } else if (viewType === 'Monthly') {
      labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
      
      for (let i = 0; i < 12; i++) {
        const monthStart = moment().month(i).startOf('month');
        const monthlyEarnings = getEarningsByMonth(monthStart);
        dataset[i] = monthlyEarnings.reduce((sum, entry) => sum + entry.amount, 0);
      }
    }
    
    return {
      labels,
      datasets: [{ data: dataset }]
    };
  }
  
  // Example usage for a daily view
  const barChartData = prepareBarChartData('Daily');
  console.log(barChartData);
  

  const EarningsChart = () => {
    const [activeTab, setActiveTab] = useState('Daily');
  
    const barChartData = prepareBarChartData(activeTab);
  
    return (
      <View>
        {/* Tabs for selecting Daily, Weekly, Monthly */}
        <BarChart
          data={barChartData}
          width={Dimensions.get('window').width - 30}
          height={220}
          chartConfig={/* Your config */}
        />
      </View>
    );
  };
  