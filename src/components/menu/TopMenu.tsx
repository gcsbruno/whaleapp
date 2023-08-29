import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const TopMenu = ({ logo }) => {
    return (
        <View style={styles.topMenu}>
            <Text style={styles.logo}>{logo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        fontSize: 24,
    }
})