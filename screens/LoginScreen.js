import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInOut,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(100).duration(1000).springify().damping(3)}
          className="h-96 w-96 rounded-sm mt-1"
          source={require("../assets/images/login.png")}
        />
      </View>

      <View className="h-full w-full flex justify-center pt-80 pb-10">
        <View className="flex items-center mb-8">
          <Animated.Text
            entering={FadeInUp.duration(2000).springify()}
            className="text-black font-bold tracking-wider text-5xl"
          >
            Login
          </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(2000).springify()}
            className="bg-black/5 p-5 rounded-3xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-3xl w-full mb-3"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="w-full bg-black/90 p-3 rounded-3xl mb-3">
              <Text className="text-white text-xl font-semibold text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center space-x-1"
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.push('SignUp')}>
              <Text className="text-sky-600">Sign Up!</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
