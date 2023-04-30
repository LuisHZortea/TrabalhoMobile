import { Image, View, Text} from "react-native";
import estilo from "./styles";

export default function Filme({ data }) {

    const uri = data.attributes.poster.data.attributes.url;
    const uriConcatenada = "https://api.otaviolube.com" + uri;

    return (
        <View style={estilo.filmeContainer}>
            <Text style={estilo.titulo}> {data.attributes.titulo} </Text>
            <Text style={estilo.subtitulo}> {data.attributes.subtitulo} </Text>
            <Image source={{ uri: uriConcatenada }} style={estilo.img} />
            <Text style={estilo.sinopse}> {data.attributes.sinopse} </Text>
        </View>
    )
}
