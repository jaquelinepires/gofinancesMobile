import React, {useContext} from "react";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'react-native'
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from './src/routes/app.routes';
import { AuthProvider } from './src/hooks/auth'; 
import { SignIn } from "./src/screens/SignIn";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
export default function App() {
  //fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <StatusBar barStyle="light-content"/>

      <AuthProvider>
           <SignIn />
      </AuthProvider>

      </NavigationContainer>
    </ThemeProvider>
  );
}
