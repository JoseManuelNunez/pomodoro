import { Text, View, SafeAreaView, Platform, StyleSheet } from "react-native";
import Header from "../organisms/Header";
import { useState } from "react";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function Home() {
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.text}>pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          time={time}
          setTime={setTime}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
