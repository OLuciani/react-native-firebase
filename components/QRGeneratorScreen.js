import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import QRCode from 'react-native-qrcode-svg';

const QRGeneratorScreen = () => {
  const [qrData, setQRData] = useState('');

  const generarQR = () => {
    // Aquí deberías establecer la información que deseas codificar en el código QR
    const data = 'Información a codificar';
    setQRData(data);
  };

  return (
    <View style={styles.container}>
      {qrData !== '' && <QRCode value={qrData} size={200} />}
      <TouchableOpacity style={styles.button} onPress={generarQR}>
        <Text style={styles.buttonText}>Generar QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default QRGeneratorScreen;