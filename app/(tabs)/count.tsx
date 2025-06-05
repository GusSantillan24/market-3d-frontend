import { useProtectedNavigation } from '@/hooks/useProtectedNavigation';
import { router } from 'expo-router';
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from "../auth/AuthContext";


const CuentaScreen = () => {

    const { isLoggedIn, logout } = useAuth();
    const { navigateOrAlert } = useProtectedNavigation();

    const handleOptionPress = (option: string) => {
        Alert.alert('seleccionaste', option);
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Mi cuenta</Text>

            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Settings')}>
                <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>

             <TouchableOpacity style={ styles.option } onPress={() => navigateOrAlert('/app/profile/my_profile.tsx')}>
                <Text style={styles.optionText}>Mi perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => navigateOrAlert('')}>
                <Text style={styles.optionText}>Mi carrito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => navigateOrAlert('')}>
                <Text style={styles.optionText}>Almacenamiento</Text>
            </TouchableOpacity>

            { isLoggedIn ? (     
                <>
                    <TouchableOpacity style={styles.option} onPress={logout}>
                        <Text style={[styles.optionText, { color: 'red'}]}>Cerrar sesion</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <TouchableOpacity style={ styles.option } onPress={() => router.push('/auth/register')}>
                        <Text style={styles.optionText}>Registrarse</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.option } onPress={() => router.push('/auth/login')}>
                        <Text style={styles.optionText}>Iniciar sesion</Text>
                    </TouchableOpacity>
                </>
            )}
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