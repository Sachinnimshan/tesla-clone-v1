import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    carContainer:{
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    },
    header:{
        marginTop: 8,
        marginRight: 15,
        marginLeft: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTitle:{
        color: "white",
        fontSize: 16,
        letterSpacing: 0.5
    },
    bgimage:{
        width: "100%",
        height: "100%",
        position: "absolute"
    },
    batteryImg:{
        marginTop: 12,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    battery:{
        width: 70,
        height: 26,
        marginRight: 10
    },
    miles:{
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    controlIcons:{
        marginTop: 115,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        
    },
    icons:{
        borderWidth: 1,
        padding: 15,
        borderRadius: 50,
        borderColor: "white",
        color: "white",
        margin: 10
    }

})

export default styles;
