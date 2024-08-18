// styles.js
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  textHome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D',
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});

export default HomeStyles;
