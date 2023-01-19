import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
