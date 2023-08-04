import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import InitialScreen from './src/screens/InitialScreen';
import { useFonts } from "expo-font";
import { WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import LoginScreen from './src/screens/LoginScreen';

const theme = {
  typography: {
    fontFamily: 'WorkSans-Regular',
  },
};

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
        <InitialScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
}


