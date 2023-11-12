import { Text, View } from "react-native";
import Options from "../molecules/Options"

export default function Header({ currentTime, setCurrentTime, time, setTime }){
    return (
        <View>
            <Text>{time}</Text>
            <Options setCurrentTime={setCurrentTime} setTime={setTime} currentTime={currentTime} />
        </View>
    )
}