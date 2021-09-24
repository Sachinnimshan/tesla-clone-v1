import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menuItems:{
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25
    },
    menuText:{
        color: "white",
        fontSize: 18,
        marginLeft: 15,
        textTransform: "uppercase"
    },
    subTitle:{
        color: "grey",
        fontSize: 12,
        marginLeft: 15
    },
    menuRow:{
        display: "flex",
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        padding: 5
    },
    menuTextBox:{
        flexGrow: 1
    },
    arrowIcon:{
        color: "gray"
    }

});


export default styles;