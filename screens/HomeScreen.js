import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import imageHome from "../assets/images/generated-7691620_1280.jpg";
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import QRCode from 'react-native-qrcode-svg';
import Restaurantes from '../components/Restaurantes';
import Add from '../components/Add';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  const [qrData, setQRData] = useState('');

  const generarQR = () => {
    // Aquí deberías establecer la información que deseas codificar en el código QR
    const data = 'Información a codificar';
    setQRData(data);
  };

  const limpiarQR = () => {
    setQRData('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
        
          {/* <Text style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: "5%"
          }}>
              Home Screen
          </Text>

          <Image source={imageHome} style={styles.image} /> */}

          {/* <Restaurantes /> */}

          <Pressable activeOpacity={0.7} onPress={goToSettings}>
            <Button text={"Ir a Settings"} />
          </Pressable>


          <View style={{justifyContent: "center", alignItems:"center", marginBottom:30}}>
            <Pressable activeOpacity={0.7} onPress={qrData === '' ? generarQR : limpiarQR} style={{marginBottom: 30}} >
              <Button text={qrData === '' ? "Generar QR" : "Limpiar QR"} />
            </Pressable>
            {qrData !== '' && <QRCode value={qrData} size={200} />}
          </View>

          <Add />
        
          
      
    </ScrollView>
  )
}

export default HomeScreen;

const styles= StyleSheet.create({
  scrollContainer: {  //Esto hace que <ScrollView> funcione bien por + que el componente Restaurantes use <FlatList>
    flexGrow: 1,
  },
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 440,
    marginTop: 10,
    borderRadius: 10,
  },
  
});