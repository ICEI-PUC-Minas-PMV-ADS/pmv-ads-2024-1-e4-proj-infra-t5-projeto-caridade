import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
<<<<<<< Updated upstream
    <View style={styles.container}>
      <Text style={styles.title}>Busca Entidade</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
=======
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
          <Button mode="contained">
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
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
