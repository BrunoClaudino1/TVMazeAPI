import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, StyleSheet } from "react-native";
import { getSerie } from "./getSerie";

export default function VerSerie() {
    const [serie, setSerie] = useState(null);
    const [nome, setNome] = useState('');

    async function carregaSerie() {
        try {
            const resultado = await getSerie(nome);
            setSerie(resultado[0]);
            console.log(resultado[0])
        } catch (error) {
            console.log(error);
            setSerie(null);
        }
    }

    return (
        <View style={styles.container}>
            {serie ? (
                <View key={serie.id}>
                    <Image source={{ uri: serie.show.image && serie.show.image.medium }} style={styles.image} />
                    <Text style={styles.text}>Nome: {serie.show.name}</Text>
                    <Text style={styles.text}>Avaliação: {serie.show.rating && serie.show.rating.average}</Text>
                    <Text style={styles.text}>Linguagem: {serie.show.language}</Text>
                </View>
            ) : (
                <View>
                    <ActivityIndicator size='large' color='white' />
                    <Text style={styles.text}>Nome: Não Encontrado</Text>
                    <Text style={styles.text}>Avaliação: Não Encontrado</Text>
                    <Text style={styles.text}>Linguagem: Não Encontrado</Text>
                </View>
            )}

            <TextInput
                style={styles.input}
                placeholder="Digite o nome..."
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <TouchableOpacity onPress={carregaSerie} style={styles.button}>
                <Text style={styles.buttonText}>Ver Série</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    input: {
        width: 200,
        height: 30,
        padding: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderColor: 'white',
        color: 'white'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
    },
});
