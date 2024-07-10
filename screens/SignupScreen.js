import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInOut,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Too Short!")
    .max(32, "Too Long!")
    .required("Please enter your username!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email address!"),
  password: Yup.string()
    .min(8, "Password must be at least minimum 8 characters!")
    .required("Please enter your password!")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character! "
    ),
  confirmPassword: Yup.string()
    .min(8, "Confirm password must be at least minimum 8 characters!")
    .oneOf([Yup.ref("password")], "Your passwords don't match!")
    .required("Confirm password is required!"),
  phoneNumber: Yup.string()
    .min(10, "Must be exactly 10 digits!")
    .max(10, "Must be exactly 10 digits!")
    .matches(/^[0-9]+$/, "Must be only digits!")
    .required("Please enter your phone number!"),
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => (
        <View className="bg-white h-full w-full">
          <View className="flex-row justify-around w-full absolute">
            <Animated.Image
              entering={FadeInUp.delay(100)
                .duration(1000)
                .springify()
                .damping(3)}
              className="h-72 w-72 rounded-sm mt-6"
              source={require("../assets/images/signup.png")}
            />
          </View>

          <View className="h-full w-full flex justify-center pt-64">
            {/* <View className="flex items-center mb-14">
          <Animated.Text
            entering={FadeInUp.duration(2000).springify()}
            className="text-black font-bold tracking-wider text-4xl"
          >
            Sign Up
          </Animated.Text>
        </View> */}

            <View className="flex items-center mx-4 space-y-4">
              <View className="flex items-start justify-start w-full">
                <Animated.View
                  entering={FadeInDown.duration(2000).springify()}
                  className="bg-black/5 p-4 rounded-3xl w-full"
                >
                  <TextInput
                    placeholder="Username"
                    autoCapitalize={false}
                    placeholderTextColor={"gray"}
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                  />
                </Animated.View>
                <View className="ml-2 mt-1">
                  {touched.username && errors.username && (
                    <Text className="text-red-500">{errors.username}</Text>
                  )}
                </View>
              </View>

              <View className="flex items-start justify-start w-full">
                <Animated.View
                  entering={FadeInDown.delay(200).duration(2000).springify()}
                  className="bg-black/5 p-4 rounded-3xl w-full"
                >
                  <TextInput
                    placeholder="Email"
                    autoCapitalize={false}
                    placeholderTextColor={"gray"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                  />
                </Animated.View>
                <View className="ml-2 mt-1">
                  {touched.email && errors.email && (
                    <Text className="text-red-500">{errors.email}</Text>
                  )}
                </View>
              </View>

              <View className="flex items-start justify-start w-full">
                <Animated.View
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                  className="bg-black/5 p-4 rounded-3xl w-full"
                >
                  <TextInput
                    placeholder="Password"
                    autoCapitalize={false}
                    placeholderTextColor={"gray"}
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                  />
                </Animated.View>
                <View className="ml-2 mt-1">
                  {touched.password && errors.password && (
                    <Text className="text-red-500">{errors.password}</Text>
                  )}
                </View>
              </View>

              <View className="flex items-start justify-start w-full">
                <Animated.View
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                  className="bg-black/5 p-4 rounded-3xl w-full"
                >
                  <TextInput
                    placeholder="Confirm Password"
                    autoCapitalize={false}
                    placeholderTextColor={"gray"}
                    secureTextEntry
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={() => setFieldTouched("confirmPassword")}
                  />
                </Animated.View>
                <View className="ml-2 mt-1">
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text className="text-red-500">
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>
              </View>

              <View className="flex items-start justify-start w-full">
                <Animated.View
                  entering={FadeInDown.delay(200).duration(2000).springify()}
                  className="bg-black/5 p-4 rounded-3xl w-full"
                >
                  <TextInput
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    placeholderTextColor={"gray"}
                    value={values.phoneNumber}
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={() => setFieldTouched("phoneNumber")}
                  />
                </Animated.View>
                <View className="ml-2 mt-1">
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text className="text-red-500">{errors.phoneNumber}</Text>
                  )}
                </View>
              </View>

              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
                className="w-full"
              >
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{ backgroundColor: isValid ? "#222831" : "#B4B4B8" }}
                  className="w-full p-2 rounded-3xl"
                  disabled={!isValid}
                >
                  <Text className="text-white text-lg font-semibold text-center">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </Animated.View>

              {/* <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row justify-center space-x-1"
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className="text-sky-600">Login!</Text>
            </TouchableOpacity>
          </Animated.View> */}
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUpScreen;
