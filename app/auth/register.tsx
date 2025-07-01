import Colores from "@/constants/Colores";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "./AuthContext";

const RegisterScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Lógica de validación real acá
    login(); // login automático tras registro
    router.replace("/(tabs)/count");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor={Colores.textSecondary}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={Colores.textSecondary}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/login")}>
        <Text style={styles.linkText}>
          ¿Ya tienes cuenta? <Text style={styles.linkAccent}>Iniciar sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: Colores.textPrimary,
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: Colores.backgroundSecondary,
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    color: Colores.textPrimary,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: Colores.backgroundAccent,
  },
  button: {
    backgroundColor: "#3a86ff",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  linkText: {
    textAlign: "center",
    color: Colores.textSecondary,
    fontSize: 14,
  },
  linkAccent: {
    color: "#3a86ff",
    fontWeight: "600",
  },
});
