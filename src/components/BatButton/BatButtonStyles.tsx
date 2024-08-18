import { StyleSheet } from 'react-native';
import { colors, fonts } from "../../styles/Styles"; // Variáveis de cores do projeto

export const BatButtonStyles = StyleSheet.create({
  container: {
    //padding: 10,
    backgroundColor: 'red',    
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 3,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    fontFamily: fonts.regular,

  },
  text : {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: colors.yellow,
    fontFamily: fonts.bold,
  }

});