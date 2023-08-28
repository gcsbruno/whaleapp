import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type DashboardScreenProps = {
    route: any;
    navigation: NavigationProp<any>;
};

const DashboardScreen = ({ route, navigation }: DashboardScreenProps) => {

    const { userName } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo(a), {userName.fullName}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default DashboardScreen