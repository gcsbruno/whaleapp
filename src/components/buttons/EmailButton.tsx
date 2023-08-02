import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface EmailButtonProps {
    title: string;
    onPress: () => void;
    icon?: JSX.Element;
}

const EmailButton = ({ title, onPress, icon }: EmailButtonProps) => (
    <TouchableOpacity style={styles.emailButton} onPress={onPress}>
        <Text style={styles.emailText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        width: 299,
        height: 48,
        borderRadius: 4
    },

    emailIcon: {
        width: 24,
        height: 24,
        marginRight: 16
    },

    emailText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
});

export default EmailButton;