import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.logo}>LOGO</Text>
                <TouchableOpacity style={styles.divReset}>
                    <Text style={styles.textReset}>Resetar</Text>
                </TouchableOpacity>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1B1726',
        height: 100,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 40,
        alignItems: 'center',
        width: 330,
    },
    logo: {
        color: 'white',
    },
    divReset: {
        backgroundColor: '#87f2a2',
        width: 90,
        height: 30,
        padding: 5,
        borderRadius: 10,
    },
    textReset: {
        color: '#121214',
        textAlign: 'center',
    }
});
