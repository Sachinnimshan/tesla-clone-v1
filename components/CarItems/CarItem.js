import React, {useState} from 'react';
import {View,Text,ImageBackground,Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCog, faToolbox, faFan, faKey, faLock, faUnlock} from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu';

function CarItem() {
    const [locked, setLocked] = useState(true);

    const handleLock=()=>{
        if(locked){
            setLocked(false);
        }else{
            setLocked(true);
        }
    }
    return (
        <View style={styles.carContainer}>
            <ImageBackground
            source={require("../../Images/background.png")}
            style={styles.bgimage}/>
            <View style={styles.header}>
                <TouchableOpacity><FontAwesomeIcon icon={faCog} size={18} color='white'/></TouchableOpacity>
                <Text style={styles.headerTitle}>SNMobile</Text>
                <TouchableOpacity><FontAwesomeIcon icon={faToolbox} size={18} color='white'/></TouchableOpacity>
            </View>
            <View style={styles.batteryImg}>
                <Image
                source={require("../../Images/battery.png")}
                style={styles.battery}/>
                <Text style={styles.miles}>225 mi</Text>
            </View>
            <ScrollView>
            <View style={styles.controlIcons}>
                <TouchableOpacity>
                <View style={styles.icons}>
                <FontAwesomeIcon size={22} color="white" icon={faFan}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.icons}>
                <FontAwesomeIcon size={22} color="white" icon={faKey}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLock}>
                <View style={styles.icons}>
                <FontAwesomeIcon size={22} color="white" icon={locked ? faLock : faUnlock}/>
                </View>
                </TouchableOpacity>
            </View>
            {/* Menu */}
            <Menu/>
            </ScrollView>
        </View>            
    )
}

export default CarItem;

