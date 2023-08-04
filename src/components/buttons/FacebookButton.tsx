import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface FacebookButtonProps {
    title: string;
    onPress: () => void;
    icon: ImageSourcePropType;
}

const FacebookButton = ({ title, onPress, icon }: FacebookButtonProps) => (
    <TouchableOpacity style={styles.facebookButton} onPress={onPress}>
        {icon && <Image source={icon} style={styles.facebookIcon} />}
        <Text style={styles.facebookText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4267B2',
        width: 299,
        height: 48,
        borderRadius: 4,
        marginBottom: 16,
    },

    facebookIcon: {
        width: 24,
        height: 24,
        marginLeft: 16
    },

    facebookText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginRight: 24,
    }
})

export default FacebookButton;