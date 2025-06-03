import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CuentaScreen = () => {
    const handleOptionPress = (option) => {
        Alert.alert('seleccionaste', option);
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Mi cuenta</Text>

            <TouchableOpacity style={ styles.option } onPress={() => handleOptionPress('Registrarse')}>
                <Text style={styles.optionText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.option } onPress={() => handleOptionPress('Iniciar sesion')}>
                <Text style={styles.optionText}>Iniciar sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.option } onPress={() => handleOptionPress('Mi perfil')}>
                <Text style={styles.optionText}>Mi perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Settings')}>
                <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Carrito')}>
                <Text style={styles.optionText}>Mi carrito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Almacenamiento')}>
                <Text style={styles.optionText}>Almacenamiento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Cerrar sesion')}>
                <Text style={[styles.optionText, { color: 'red'}]}>Cerrar sesion</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CuentaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    optionText: {
        fontSize: 18,
    },
})