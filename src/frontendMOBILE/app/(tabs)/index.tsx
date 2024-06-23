import { StyleSheet, Button} from 'react-native';
import { Link, Tabs } from 'expo-router';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontre projetos que te engajam!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>Buscador de projetos de caridade que tem como objetivo auxiliar na
          divulgação e busca de informações relativas a instituições
          filantrópicas em âmbito global.
      </Text>
      <Link href="/cadastro" asChild>
      <Button title='Criar Conta' color={'#006E8C'} ></Button>
      </Link>

      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    color: 'gray',
    padding: 40,
  },
  button: {
    color: '#006E8C',
  }
});
