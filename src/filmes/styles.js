import { Dimensions, StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c453e',
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center',
    justifyContent: 'center',
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
  img: {
    width: '80%',
    width: MAX_WIDTH * 0.4,
    height: MAX_HEIGHT * 0.3,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 3,
    borderRadius: 8.5,
    maxWidth: MAX_WIDTH * 0.8,
    maxHeight: MAX_HEIGHT * 0.5,
  },
  filmes: {
    backgroundColor: "#5c453e",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default estilo;
