import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
const Task = (props) => {
    return <View style={styles.items}>
        <View style={styles.itemLeft}>
            <Text style={styles.square}></Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
}
const styles = StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    text:{
        color:'#000'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#47FF41',
        borderWidth: 2,
        borderRadius: 5,
      },
    
})

export default Task