import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const Button = ( {text} ) => {
  return (
    <View style={styles.containerButton}>
        <Text style={styles.button}>{text}</Text>
    </View>  
  )
}

export default Button;

const styles= StyleSheet.create({
    containerButton: {
        width: "100%",
        alignItems: "center"
    },
    button: {
        marginTop: 25,
        textAlign: "center", 
        fontSize: 14,
        backgroundColor: "lightsalmon",
        width: 320,
        padding: 7,
        color: "white",
        borderRadius: 10, 
        borderWidth: 4,
        borderColor: "salmon"
      }
});