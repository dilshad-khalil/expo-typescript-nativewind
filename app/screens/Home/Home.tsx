import { View, Text } from "react-native";
import React from "react";
import {
  Poppins_900Black,
  Poppins_400Regular,
  useFonts,
} from "@expo-google-fonts/poppins";
const Home = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_900Black,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="h-full w-full bg-black">
      <Text className="text-white px-10 py-4 text-lg">
        This is ma nigga shyar
      </Text>
    </View>
  );
};

export default Home;
