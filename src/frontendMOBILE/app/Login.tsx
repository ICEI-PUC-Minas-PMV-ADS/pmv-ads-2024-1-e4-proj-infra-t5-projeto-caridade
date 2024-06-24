import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Button } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { UserServices } from "../../frontendWEB/src/services/UserServices/UserServices";
import { useState } from 'react';
import { useUserContext } from "../../frontendWEB/src/context/userContext";

export default function ModalScreen() {
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const { loggedUser } = useUserContext()

  const signIn = async () => {
    try {
      await UserServices.login({
        email,
        password,
      })
      loggedUser()
    } catch (error: any) {
    }
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charity Finder</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subTitle}>Login</Text>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="nome@dominio.com.br"
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
      style = {styles.input}
      placeholder='*******'
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
      /> 
      <Link href="/" asChild>
      <Button onPress={() => signIn()} title='Entrar' color={'#006E8C'} ></Button>
      </Link>
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
