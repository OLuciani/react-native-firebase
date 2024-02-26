import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StylesSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import UserRegister from './screens/UserRegister';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" size={24} color="black" />),
                    tabBarLabelStyle:{color:"black", fontSize: 9},
                    headerTitleAlign: "center"
                }}
            />

            <Tab.Screen
                name="Iniciar sesión" 
                component={Login}
                options={{
                    tabBarLabel: "Iniciar sesión",
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" size={24} color="black" />),
                    tabBarLabelStyle:{color:"black", fontSize: 9},
                    headerTitleAlign: "center"
                }}
            />

            <Tab.Screen
                name="Crear cuenta"
                component={UserRegister}
                options={{
                    tabBarLabel: "Crear cuenta",
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-multiple-plus" size={24} color="black" />),
                    tabBarLabelStyle:{color:"black", fontSize: 9},
                    
                    headerTitleAlign: "center",
                }}
            />
        </Tab.Navigator>
    )

}



export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}







