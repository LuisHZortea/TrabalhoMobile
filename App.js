import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './src/filmes/filmes';
import estilo from './src/filmes/styles';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        setFilmes(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={estilo.container}>
      <View style={estilo.header}>
        <Text style={estilo.headerText}>Filmes</Text>
      </View>
      <View style={estilo.filmes}>
        {filmes.length > 0 ? (
          filmes.map(filme => <Filme data={filme} key={filme.id} />)
        ) : (
          <Text style={estilo.loading}>Carregando...</Text>
        )}
      </View>
    </View>
  );
}
