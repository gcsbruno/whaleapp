import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface EmailButtonProps {
    title: string;
    onPress: () => void;
    icon: ImageSourcePropType;
}

const EmailButton = ({ title, onPress, icon }: EmailButtonProps) => (
    <TouchableOpacity style={styles.emailButton} onPress={onPress}>
        {icon && <Image source={icon} style={styles.emailIcon} />}
        <Text style={styles.emailText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#227BE5',
        width: 299,
        height: 48,
        borderRadius: 4
    },

    emailIcon: {
        width: 16,
        height: 16,
        marginRight: 16
    },

    emailText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginRight: 24,
    }
});

export default EmailButton;