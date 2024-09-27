import { Image } from "react-native";


export const driver = {
    image: <Image source={require('../../assets/images/user.png')}/>,
    userId:"ER1234958",
    Name:'Ganesh Mahanta',
    rating:'4.4',
    PhoneNo:'1234567890',
    AlternatePhoneNo:'7836811660',
    Address:'Raipur',
    City:'Raipur',
    Vehicle_number: 'CH329348297',
    
}

export const location = {
    pickup: {
        latitude: 12.9715987, 
        longitude: 77.5945627, 
        getAddress: function() {
           
            return `Pickup at 2km away`; 

        },
    },
    drop: {
        latitude: 12.935242, 
        longitude: 77.624362,
        getAddress: function() {
            return `Drop at 16km away`; 
        },
    },
};

export const charges = {
    perKmDay: 188,
    perKmNight: 18,
    tax:188,
    others: 5,
};

export const metric = {
    distanceToPickup: 5,
    distanceToDrop: 16,

    calculateTotalCost: function(isDaytime = true) {
        const rate = isDaytime ? charges.perKmDay : charges.perKmNight;
        const totalDistance = this.distanceToPickup + this.distanceToDrop;
        const baseCost = totalDistance * rate;
        return baseCost + charges.tax + charges.others;
    },
};


export const summary = {
    pickupSummary: location.pickup.getAddress(),
    dropSummary: location.drop.getAddress(),
    totalCost: metric.calculateTotalCost(), 
};

