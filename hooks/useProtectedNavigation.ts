import { useAuth } from "@/app/auth/AuthContext";
import { router } from "expo-router";
import { Alert } from "react-native";

export const useProtectedNavigation= () => {
    const { isLoggedIn } = useAuth();

    const navigateOrAlert= (path : string) => {
        if (isLoggedIn) {
            router.push(path);
        } else {
            Alert.alert(
                'Debes iniciar sesion o registrarte'
            );
        }
    }

    return { navigateOrAlert };
};