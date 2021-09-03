import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


const Button = ({onPress}) => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>Sign out</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: { 
        backgroundColor: 'red',
        marginBottom: 20,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center', 
        borderRadius: 10,

    }, 
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
})
