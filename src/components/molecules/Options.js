import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Options({ currentTime, setCurrentTime, setTime }) {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((i, e) => (
        <TouchableOpacity
          onPress={() => handlePress(e)}
          key={e}
          style={[
            styles.itemStyle,
            currentTime !== e && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{i}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    alignItems: "Center",
    padding: 5,
    borderColor: "white",
    marginVertical: 20
  },
});
