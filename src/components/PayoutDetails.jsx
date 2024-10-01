import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../utils/colors';

const PayoutDetails = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Heading for Payout details with date */}
          <Text style={styles.modalTitle}>Payout details: (16 Sep - 22 Sep)</Text>

          {/* Payout Information */}
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>Earnings</Text>
              <Text style={styles.value}>₹470.57</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Cash in hand</Text>
              <Text style={[styles.value, { color: 'red' }]}>₹340.42</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Deductions</Text>
              <Text style={styles.value}>₹0</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Amount withdrawn</Text>
              <Text style={styles.value}>₹0</Text>
            </View>

            {/* Payout Balance and Min Balance */}
            <View style={styles.row}>
              <Text style={styles.payoutBalanceLabel}>Payout balance</Text>
              <Text style={styles.value}>₹62.80</Text>
            </View>
            <Text style={styles.minBalance}>
              Min. balance required: ₹300 (This amount will be adjusted with the weekly payout)
            </Text>

            {/* Withdrawable Amount */}
            <View style={styles.row}>
              <Text style={styles.label}>Withdrawable amount</Text>
              <Text style={styles.value}>₹0</Text>
            </View>
          </View>

          {/* Withdraw Button */}
          <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.withdrawButton}>
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PayoutDetails;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    maxHeight: '50%',
  },
  modalTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  payoutBalanceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  minBalance: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  withdrawButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    //borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius:20,
    width:'40%'
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  closeButton: {
    paddingVertical: 15,
    backgroundColor: '#818587',
    alignItems: 'center',
    borderRadius:20,
    marginVertical: 10,
    width:'40%'
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal:40

  },
});
