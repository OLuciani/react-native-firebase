/* import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserRegister = () => {
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Iniciar sesión");
  };

  const handleRegister = () => {
    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Crear objeto con los datos del usuario
    const userData = {
      user_name,
      email,
      password
    };

    // Realizar solicitud HTTP POST al backend usando Axios
    axios.post('https://cabanas-backend.onrender.com/api/register_user', userData)
      .then(response => {
        // Manejar la respuesta del backend
        console.log('Respuesta del backend:', response.data);
        // Limpiar los campos después del registro exitoso
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        // Mostrar mensaje de éxito o redirigir a otra pantalla
        Alert.alert('Éxito', 'Usuario registrado exitosamente');
      })
      .catch(error => {
        console.error('Error al enviar datos al backend:', error);
        // Mostrar mensaje de error al usuario
        Alert.alert('Error', 'Ocurrió un error al registrar el usuario');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crea una cuenta</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa tu nombre y apellido' 
          autoCapitalize='none'
          value={user_name}
          onChangeText={text => setUserName(text)}
        />
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa tu email' 
          autoCapitalize='none'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa una contraseña' 
          autoCapitalize='none' 
          secureTextEntry={true} 
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput 
          style={styles.inputs} 
          placeholder='Confirmar contraseña' 
          autoCapitalize='none' 
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>

      <Text style={styles.haveAnAccount} >
        Ya tienes una cuenta? 
      </Text>

      <Pressable activeOpacity={0.7} onPress={goToLogin} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión  <MaterialCommunityIcons name="arrow-right-bold-outline" size={18} color="white" /></Text>
      </Pressable>
    </ScrollView>
  );
}

export default UserRegister;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1'
  },
  title: {
    fontSize: 24,
    color: "#34434D",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginTop: 30
  },
  inputs: {
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginBottom: 20
  },
  haveAnAccount: {
    fontSize: 14,
    marginTop: 50,
    textAlign: "center"
  },
  button: {
    width: "80%", 
    height: 60,
    borderRadius: 30,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
}); */


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { database} from "../src/config/fb";
import { collection, addDoc } from "firebase/firestore";

const UserRegister = () => {
 
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Iniciar sesión");
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crea una cuenta</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa tu nombre y apellido' 
        />
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa tu email' 
        />
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa una contraseña' 
        />
        <TextInput 
          style={styles.inputs} 
          placeholder='Confirmar contraseña' 
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>

      <Text style={styles.haveAnAccount} >
        Ya tienes una cuenta? 
      </Text>

      <Pressable activeOpacity={0.7} onPress={goToLogin} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión  <MaterialCommunityIcons name="arrow-right-bold-outline" size={18} color="white" /></Text>
      </Pressable>
    </ScrollView>
  );
}

export default UserRegister;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1'
  },
  title: {
    fontSize: 24,
    color: "#34434D",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginTop: 30
  },
  inputs: {
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginBottom: 20
  },
  haveAnAccount: {
    fontSize: 14,
    marginTop: 50,
    textAlign: "center"
  },
  button: {
    width: "80%", 
    height: 60,
    borderRadius: 30,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});