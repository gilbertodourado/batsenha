import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import { BatButtonStyles } from './BatButtonStyles';
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass, setPass] = useState('')

  function handleGenerateButton(){
    let generateToken = generatePass();
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
        { /*
        <Button 
            title="Clique aqui" 
            accessibilityLabel='Clique em mim'
            onPress={() => {console.log("btn click")}}>

        </Button>
        */ }
        <BatTextInput pass={pass}></BatTextInput>

        <Pressable
            style={BatButtonStyles.button}
            onPress={handleGenerateButton}
        >
            <Text
                style={BatButtonStyles.text}>
                Generate
            </Text>
        </Pressable>

        <Pressable
            style={BatButtonStyles.button}
            onPress={handleCopyButton}
        >
            <Text
                style={BatButtonStyles.text}>
                ⚡ Copy
            </Text>
        </Pressable>
    </>
  );
}