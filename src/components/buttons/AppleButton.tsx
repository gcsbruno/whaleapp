import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication'

type AppleButtonProps = {
    onPress: () => void
}

const AppleButton = ({ onPress }: AppleButtonProps): JSX.Element => {
    return (
        <View>
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={styles.appleButton}
                onPress={onPress} />
        </View>
    )
}

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
})

export default AppleButton;