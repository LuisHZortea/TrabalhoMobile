import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
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
      subtitulo: {
        fontSize: 15,
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

export default estilo;