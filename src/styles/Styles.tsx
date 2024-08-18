// styles.tsx
import { StyleSheet } from 'react-native';

const colors = {
  yellow: '#E5BF3C',
  white: '#fff',
  black: '#000',
};

const fonts = {
  regular: 'Roboto',
  bold: 'Roboto',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //alinhamento vertical
    alignItems: 'center', //alinhamento horizontal
    backgroundColor: colors.white, 
  },
});

export { styles, colors, fonts };

