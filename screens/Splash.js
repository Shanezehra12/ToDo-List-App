import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, } from "react-native";
import GlobalStyle from '../utils/GlobalStyle';



export default function Splash({ navigation }) {

    useEffect(() => {

        setTimeout(() => {
            navigation.replace('My Tasks');
        }, 2000);
    }, []);



    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../assets/Images/logo.jpg')}
            />
            <Text
                style={[
                    GlobalStyle.CustomFontBig,
                    styles.text
                ]}
            >
                To-Do List
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 200,
        height: 200,
        margin: 20,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
    },
})