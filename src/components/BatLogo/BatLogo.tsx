import React from 'react';
import { View, Text, Image } from 'react-native';

import { BatLogoStyles } from './BatLogoStyles';

import BatLogoImg from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <>
        <Text style={BatLogoStyles.title}>BatSenha</Text>
        <Text style={BatLogoStyles.title}>O gerador de senhas</Text>
        <Text style={BatLogoStyles.title}>do HOMEM</Text>
        <Image source={BatLogoImg} style={{resizeMode:'contain', height: 180, }} />
    </>
  );
}