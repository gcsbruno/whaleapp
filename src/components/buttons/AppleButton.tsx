import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication'


export default function AppleButton() {
    return (
        <View>
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={styles.appleButton}
                onPress={async () => {
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                            ],
                        })
                    } catch (e) {
                        if (e.code === 'ERR_REQUEST_CANCELED') {
                            console.log(e)
                        } else {
                            console.log('')
                        }
                    }
                }} />
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