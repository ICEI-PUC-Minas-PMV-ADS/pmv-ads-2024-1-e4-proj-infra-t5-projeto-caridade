import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Button } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charity Finder</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subTitle}>Cadastro</Text>
      <Text style={styles.text}>Nome</Text>
      <TextInput
      style = {styles.input}
      placeholder='Nome'
      />
      <Text style={styles.text}>Sobrenome</Text>
      <TextInput
      style = {styles.input}
      placeholder='nome@dominio.com.br'
      />
      <Text style={styles.text}>E-mail</Text>
      <TextInput
      style = {styles.input}
      placeholder='nome@dominio.com.br'
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
      style = {styles.input}
      placeholder='*******'
      secureTextEntry={true}
      />
      <Text style={styles.text}>Confirmar Senha</Text>
      <TextInput
      style = {styles.input}
      placeholder='*******'
      secureTextEntry={true}
      /> 
      <Link href="/" asChild>
      <Button title='Cadastrar' color={'#006E8C'} ></Button>
      </Link>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#004e63',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 25,
    color: '#004e63',
    fontWeight: 'bold',
    padding: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    color: 'gray',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    color: '#006E8C',
  }
});
