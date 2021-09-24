import React from 'react';
import {View,Text,ImageBackground,Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faMusic, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import items from './MenuItems';


function Menu() {
    return (
        <View style={styles.menuItems}>
           {items.map((item)=>(
                <TouchableOpacity>
                <View style={styles.menuRow} key={item._id}>
                    <FontAwesomeIcon icon={item.icon} color='white' size={20}/>
                    <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>{item.title}</Text>
                        {(item.subTitle) && (
                            <Text style={styles.subTitle}>{item.subTitle}</Text>
                        )}
                    </View>
                    <FontAwesomeIcon style={styles.arrowIcon}  icon={faChevronRight} size={20}/>
                </View>
                </TouchableOpacity>
           ))}
        </View>
    )
}

export default Menu;
