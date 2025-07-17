import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import './global.css';

export default function RootLayout() {
  const [fontsLoaded,error] = useFonts({
    "PlaypenSansThai-Thin": require("../assets/fonts/PlaypenSansThai-Thin.ttf"),
    "PlaypenSansThai-ExtraLight": require("../assets/fonts/PlaypenSansThai-ExtraLight.ttf"),
    "PlaypenSansThai-Light": require("../assets/fonts/PlaypenSansThai-Light.ttf"),
    "PlaypenSansThai-Regular": require("../assets/fonts/PlaypenSansThai-Regular.ttf"),
    "PlaypenSansThai-Medium": require("../assets/fonts/PlaypenSansThai-Medium.ttf"),
    "PlaypenSansThai-SemiBold": require("../assets/fonts/PlaypenSansThai-SemiBold.ttf"),
    "PlaypenSansThai-Bold": require("../assets/fonts/PlaypenSansThai-Bold.ttf"),
    "PlaypenSansThai-ExtraBold": require("../assets/fonts/PlaypenSansThai-ExtraBold.ttf"),
  })

  useEffect(() => {
     if(error) throw  error;
     if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded,error])
  
  return <Stack  screenOptions={{headerShown:false}}/>;
}
