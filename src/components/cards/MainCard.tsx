import React from 'react'
import { View, StyleSheet } from 'react-native'

export const MainCard = ({ children }) => {
    return (
        <View style={styles.mainCard}>{children}</View>
    )
}


const styles = StyleSheet.create({
    mainCard: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})