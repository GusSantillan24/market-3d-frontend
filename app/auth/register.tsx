import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth } from "../AuthContext";

const RegisterScreen = () => {
    const { login } = useAuth;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = () => {
        login(); //login automatico tras registro
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear cuenta</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20,
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5,
  },
});