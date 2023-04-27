import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

    fetch(baseURL)
      .then((data) => data.json())
      .then((objeto) => {
        console.log(objeto);
        setFilmes(objeto.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Filmes</Text>
      </View>
      {filmes.length > 0 ? (
        filmes.map((filme) => (
          <View key={filme._id} style={styles.filmeContainer}>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.loading}>Carregando...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c453e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#5c453e',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
  filmeContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    maxWidth: '80%',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5c453e',
  },
  sinopse: {
    fontSize: 16,
    color: '#5c453e',
  },
  loading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
});
