import { Text, View, SafeAreaView, Platform, StyleSheet } from "react-native";
import Header from "../organisms/Header";
import { useState } from "react";
import Timer from "../organisms/Timer";
import StartorStopButtom from "../atoms/StartorStopButtom";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function Home() {
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.text}>pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          time={time}
          setTime={setTime}
        />
        <Timer time={time} />
        <StartorStopButtom isActive={isActive} setIsActive={setIsActive} />
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
