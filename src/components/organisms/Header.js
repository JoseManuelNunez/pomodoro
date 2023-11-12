import { Text, View } from "react-native";
import Options from "../molecules/Options"

export default function Header({ currentTime, setCurrentTime, setTime }){
    return (
        <View>
            <Options setCurrentTime={setCurrentTime} setTime={setTime} currentTime={currentTime} />
        </View>
    )
}