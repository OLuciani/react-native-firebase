import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const Restaurantes = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://consecionaria-luciani-automoviles-backend.onrender.com/api/vehiculosList')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVehicles(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
  }, []);

  console.log("console.log de vehiculos", vehicles);


  return (
    <View>
      <Text style={{textAlign: "center", fontSize: 20, marginBottom: 20, marginTop: 20, fontWeight: "bold"}}>Lista de Vehículos:</Text>

      {vehicles.length < 1 ? <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Cargando datos...</Text> : 
      
      (<FlatList //Este es un componente de la biblioteca React Native que se utiliza para renderizar listas de elementos en una aplicación móvil.
        data={vehicles}
        renderItem={({ item }) => (
          <View style={{width: "100%", flex: 1, justifyContent: 'center', alignItems: "center"}}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Image
                source={{ uri: 'https://consecionaria-luciani-automoviles-backend.onrender.com' + item.imageUrl }} //Aqui tuve que utilizar la url principal del backend + item.imageUrl para que me traiga las imagenes.
                style={{ width: 300, height: 200 }} // Adjust width and height as needed
        
            />
            
          </View>
        )}
        keyExtractor={item => item._id.toString()} //funciona parecido a usar key cuando iteramos arrays en react js.
        
      />
      )
      }
    </View>
  );
};

export default Restaurantes;



