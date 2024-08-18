import React from "react";
import {Text, View} from "react-native";
import { StatusBar } from "expo-status-bar";

//import { Styles } from "../../styles/Styles"; // Estilos Genericos do projeto
import HomeStyles from "./HomeStyles"; // Estilos especificos

import { BatLogo } from "../../components/BatLogo/BatLogo";

import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
    return (
        <View style={HomeStyles.appContainer}>
            <View style={HomeStyles.logoContainer}>
                <BatLogo></BatLogo>
            </View>
            <View style={HomeStyles.inputContainer}>
                
                <BatButton></BatButton>
            </View>
            <StatusBar style="light"/>
        </View>
    )
}

