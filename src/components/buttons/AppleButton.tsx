import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface AppleButtonProps {
    title: string;
    onPress: () => void;
    icon?: JSX.Element;
}

const AppleButton = ({ title, onPress, icon }: AppleButtonProps) => (
    <TouchableOpacity style={styles.appleButton} onPress={onPress}>
        <Text style={styles.appleText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    appleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        width: 299,
        height: 48,
        borderRadius: 4,
        marginBottom: 16
    },

    appleIcon: {
        width: 24,
        height: 24,
        marginRight: 16
    },

    appleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})

export default AppleButton;