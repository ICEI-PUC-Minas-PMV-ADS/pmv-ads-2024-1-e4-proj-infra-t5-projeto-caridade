import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  Appbar,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";

interface Projeto {
  id: string;
  nome: string;
}

const projetos: Projeto[] = [
  { id: "1", nome: "Projeto 1" },
  { id: "2", nome: "Projeto 2" },
  { id: "3", nome: "Projeto 3" },
  { id: "4", nome: "Projeto 4" },
];

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#006E8C",
    accent: "lightblue",
    background: "#f5f5f5",
    surface: "white",
    text: "black",
    disabled: "gray",
    placeholder: "gray",
    backdrop: "rgba(0, 0, 0, 0.5)",
    notification: "#006E8C",
  },
  roundness: 8,
};

export default function App() {
  const [pais, setPais] = useState<string | null>(null);
  const [tema, setTema] = useState<string | null>(null);
  const [termo, setTermo] = useState<string>("");

  const paises: { label: string; value: string }[] = [];
  const temas: { label: string; value: string }[] = [];

  const aplicarFiltros = () => {
    return projetos.filter((projeto) => {
      const filtroTermo = termo
        ? projeto.nome.toLowerCase().includes(termo.toLowerCase())
        : true;
      return filtroTermo;
    });
  };

  const renderItem = ({ item }: { item: Projeto }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: "https://via.placeholder.com/100" }} />
      <Card.Content>
        <Title>{item.nome}</Title>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="outlined"
          onPress={() => console.log("Learn More pressed")}
        >
          Learn More
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca Entidade</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="LOGO" titleStyle={styles.logo} />
        </Appbar.Header>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Encontrar projetos"
            value={termo}
            onChangeText={setTermo}
            theme={{ colors: { primary: "#006E8C" } }}
          />
          <RNPickerSelect
            onValueChange={(value) => setPais(value)}
            items={paises}
            placeholder={{ label: "Países", value: null }}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return null;
            }}
          />
          <RNPickerSelect
            onValueChange={(value) => setTema(value)}
            items={temas}
            placeholder={{ label: "Temas", value: null }}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return null;
            }}
          />

          <Button mode="contained" onPress={() => console.log("Buscando...")}>

            Buscar
          </Button>
        </View>
        <FlatList
          data={aplicarFiltros()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#006E8C",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  searchSection: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    maxWidth: 345,
  },
  list: {
    padding: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
  },
});
