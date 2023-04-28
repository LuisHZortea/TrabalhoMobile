import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import estilo from './src/filmes/styles';

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
    <View style={estilo.container}>
      <View style={estilo.header}>
        <Text style={estilo.headerText}>Filmes</Text>
      </View>
      {filmes.length > 0 ? (
        filmes.map((filme) => (
          <View key={filme._id} style={estilo.filmeContainer}>
            <Text style={estilo.titulo}>{filme.attributes.titulo}</Text>
            <Text style={estilo.subtitulo}>{filme.attributes.subtitulo}</Text>
            <Text style={estilo.sinopse}>{filme.attributes.sinopse}</Text>
          </View>
        ))
      ) : (
        <Text style={estilo.loading}>Carregando...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
