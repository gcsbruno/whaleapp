import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface FacebookButtonProps {
    title: string;
    onPress: () => void;
    icon?: JSX.Element;
}

const FacebookButton = ({ title, onPress, icon }: FacebookButtonProps) => (
    <TouchableOpacity style={styles.facebookButton} onPress={onPress}>
        <Text style={styles.facebookText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4267B2',
        width: 299,
        height: 48,
        borderRadius: 4,
        marginBottom: 16,
    },

    facebookIcon: {
        width: 24,
        height: 24,
        marginRight: 16
    },

    facebookText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})

export default FacebookButton;