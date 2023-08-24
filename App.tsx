import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from "expo-font";
import { WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import InitialScreen from './src/screens/InitialScreen';
import TutorialScreen from './src/screens/TutorialScreen'
import LoginScreen from './src/screens/LoginScreen';

const theme = {
  typography: {
    fontFamily: 'WorkSans-Regular',
  },
};

const Stack = createStackNavigator();

export default function App(): JSX.Element {

  const [fontsLoaded] = useFonts({
    'WorkSans-Regular': WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Initial' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={InitialScreen} />
          <Stack.Screen name='Tutorial' component={TutorialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


