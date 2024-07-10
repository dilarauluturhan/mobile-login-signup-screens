import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

export default function Flexbox() {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
          <View style={[styles.box, { width: screenWidth - 40 }]} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FF6969",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
  },
  box: {
    alignSelf: "center",
    height: 100,
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: "#1679AB",
  },
});
