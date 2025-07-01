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

const LoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validación real si tuvieras backend
    login(); // activa el contexto de logueado
    router.replace("/(tabs)/count"); // redirige a pestaña cuenta
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/register")}>
        <Text style={styles.linkText}>
          ¿No tenés cuenta?{" "}
          <Text style={styles.linkAccent}>Registrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;



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
