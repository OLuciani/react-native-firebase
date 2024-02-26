import { React, useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, Keyboard } from "react-native";
import { database} from "../src/config/fb";
import { collection, addDoc } from "firebase/firestore";


const Add = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };


  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    isSold: false,
    createAt: new Date(),
  });

  const clearFields = () => {
    setNewItem({
      name: "",
      price: "",
      isSold: false,
      createAt: new Date(),
    });
  };

  const onNameChange = (text) => {
    setNewItem(prevState => ({ ...prevState, name: text }));
  };
  
  const onPriceChange = (text) => {
    setNewItem(prevState => ({ ...prevState, price: text }));
  };


  const onSend = async () => {
    try {
      await addDoc(collection(database, "products"), newItem);
      console.log("Producto agregado correctamente a Firestore");
      // Después de enviar, limpiar los campos
      clearFields();
    
    } catch (error) {
      console.error("Error al agregar el producto a Firestore:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Agregar productos</Text>

      <TextInput
        onChangeText={onNameChange}
        value={newItem.name}
        placeholder="Product Name"
        style={styles.input}
      />

      <TextInput
        onChangeText={onPriceChange}
        placeholder="Price"
        value={newItem.price}
        style={styles.input}
      />

      <Pressable 
        style={isPressed ? styles.containerButtonPressed : styles.containerButton} 
        onPress={onSend}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.textButton}>Publish</Text>       
      </Pressable>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 70,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  containerButton: {
    width: "80%",
    backgroundColor: "salmon",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontWeight: "900",
    paddingVertical: 10,
  },
  containerButtonPressed: {
    width: "80%",
    backgroundColor: "lightsalmon",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});

export default Add;
