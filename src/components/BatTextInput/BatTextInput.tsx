import React from 'react';
import { TextInput } from 'react-native';
import { BatTextInputStyles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass:string
}

export function BatTextInput( props : BatTextInputProps) {
  return (
        <TextInput 
            placeholder='pass' 
            style={BatTextInputStyles.input}
            multiline={false}
            //numberOfLines={1}
            value={props.pass}
            >

        </TextInput>
  );
}