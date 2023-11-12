import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StartorStopButtom({ isActive, setIsActive }) {

    const handleStartStop = () => {
        setIsActive(!isActive)
    }

    return(
        <TouchableOpacity onPress={handleStartStop} style={style.button}>
            <Text style={{color: "white", fontWeight: "bold"}} >{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#333333",
        padding: 15,
        marginTop: 15,
        borderRadius: 15
    }
})