import { StyleSheet } from 'react-native';
import { colors } from "../../styles/Styles"; // Variáveis de cores do projeto

export const BatTextInputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    borderColor: colors.white,
    backgroundColor: colors.yellow,
    fontSize: 20,
    height: 40,
    textAlign: 'center',
  }
});