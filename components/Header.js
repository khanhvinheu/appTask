import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
const Header = (props) => {
    return <View style={styles.header}>
        <Text style={styles.text}>{props.text}</Text>
    </View>
}
const styles = StyleSheet.create({

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#fff"
    },
    header: {
        // paddingTop: 50,
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:'#EB2B26'
    },
})

export default Header