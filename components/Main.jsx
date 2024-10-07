import { StyleSheet, Text, View } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export function Main() {
    const insets = useSafeAreaInsets()
  
    return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
        <View style={styles.container}>
            <Text style={styles.title}>Inicio</Text>
            <View style={styles.buscar}>
                <Text>Buscar</Text>
            </View>
            <Text style={styles.subtitulo}>Mis actividades</Text>
            <View style={styles.containerActividades}>
                <View style={styles.activitiesCard}></View>
                <View style={styles.activitiesCard}></View>
                <View style={styles.activitiesCard}></View>
            </View>
                <Text style={styles.subtitulo}>Tareas por realizar</Text>
            <View style={styles.containerTareas}>
                <View style></View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'stretch',
    },
    title: {
        color: "#301D18",
        fontSize: 30,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    buscar: {
        backgroundColor: "#F4F5F0",
        borderWidth: 5,
        borderRadius: 15,
        borderColor: "#3D4133",
        padding: 5,
        paddingLeft: 20
    },
    subtitulo: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 0
    },
    activitiesCard: {
        width: 100,
        height: 250,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "#494F3C"
    },
    containerActividades: {
        backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerTareas: {
        width: "100%",
        height: 200,
        borderWidth: 3,
        borderColor: "#494F3C",
        backgroundColor: "#F4F5F0"
    }
});
