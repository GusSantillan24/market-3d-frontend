import React from "react";
import { StyleSheet, Text } from 'react-native';

const UsernameDisplay = () => {
    return (
        <Text style={style.username}>@nombre_usuario</Text>
    );  
};


const style = StyleSheet.create({
    username: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default UsernameDisplay;