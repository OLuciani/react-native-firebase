import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Pressable } from 'react-native';

const Login = () => {
  return (
    <View>
    <ScrollView>
        <View style={styles.containerLogin}>
            <Text style={styles.title}>
                Hola
            </Text>

            <Text style={styles.subtitle}>
                Inicia sesión en tu cuenta
            </Text>

            <TextInput 
                style={styles.inputs} 
                placeholder='Ingresa tu email' 
                autoCapitalize='none' 
            />

            <TextInput 
                style={styles.inputs} 
                placeholder='Ingresa tu contraseña' 
                autoCapitalize='none' 
            />

            <Text style={styles.forgetPassword}>
                Olvidaste tu contraseña?
            </Text>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </Pressable>

            <Text style={styles.forgetPassword}>
                No tienes una cuenta?
            </Text>
        </View>
    </ScrollView>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#f1f1f1'
    },
    title: {
        marginTop: "10%",
        fontSize: 35,
        color: "#34434D",
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 16,
        color: "gray"
    },
    inputs: {
         width: "80%",
         height: 60,
         paddingStart: 30,
         marginTop: 30,
         borderRadius: 30,
         backgroundColor: "white"
    },
    forgetPassword: {
        /* width: "80%",
        textAlign: "right", */
        fontSize: 12,
        marginTop: 30
    },
    button: {
        width: "80%", 
        marginTop: 30,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#009688",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
  });