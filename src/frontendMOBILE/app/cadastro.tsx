import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Button } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { UserServices } from "../../frontendWEB/src/services/UserServices/UserServices";
import { useState } from 'react';

export default function ModalScreen() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ password, setPassword ] = useState("")

  const createUser = async () => {
      await UserServices.create({
        name,
        last_name: lastName,
        email,
        password
      })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charity Finder</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subTitle}>Cadastro</Text>
      <Text style={styles.text}>Nome</Text>
      <TextInput
      style = {styles.input}
      placeholder='Nome'
      onChangeText={(text) => setName(text)}
      />
      <Text style={styles.text}>Sobrenome</Text>
      <TextInput
      style = {styles.input}
      placeholder='nome@dominio.com.br'
      onChangeText={(text) => setLastName(text)}
      />
      <Text style={styles.text}>E-mail</Text>
      <TextInput
      style = {styles.input}
      placeholder='nome@dominio.com.br'
      onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
      style = {styles.input}
      placeholder='*******'
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.text}>Confirmar Senha</Text>
      <TextInput
      style = {styles.input}
      placeholder='*******'
      secureTextEntry={true}
      /> 
      <Link href="/" asChild>
      <Button onPress={() => createUser()} title='Cadastrar' color={'#006E8C'} ></Button>
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
