import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontFamily } from '../../GlobalStyles';

export const NotificationScreen = () => {
    return (
        <View style={styles.container} className="w-full h-full">
            <Text style={styles.message}>Notification</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    message: {
        fontSize: 16,
        fontWeight: 'medium',
        color: 'rgba(0, 0, 0, 0.2)',
        fontFamily:FontFamily.Poppins,
        fontSize:30,
        
    },
});


