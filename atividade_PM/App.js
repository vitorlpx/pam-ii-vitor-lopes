import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import ImageViewer from './ImageViewer';
import Button from './Button';

const PlaceholderImage = require('./assets/starboy.jpg');

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Usuário" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Senha" />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Login" />        
        <Button label="Cadastrar" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  input: {
    width: 320,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
  },
});


const stylesText = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});