import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
      <View style={styles.navBar}>
        <Text style={styles.navButton}>Inicio</Text>
        <Text style={styles.navButton}>Actividades</Text>
        <Text style={styles.navButton}>Explorar</Text>
        <Text style={styles.navButton}>Logros</Text>
        <Text style={styles.navButton}>Configuración</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    color: "#301D18",
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },
  buscar: {
    backgroundColor: "#F4F5F0",
    borderWidth: 5,
    borderRadius: 15,
    width: "90%",
    borderColor: "#3D4133",
    padding: 5,
    paddingLeft: 30
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginVertical: 20
  },
  navBar: {
    backgroundColor: "#1B1D16",
    width: "100%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  navButton: {
    color: "#B1B79F",
    fontSize: 20
  },
  activitiesCard: {
    width: 200,
    height: 250,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#494F3C"
  },
  containerActividades: {
    flexDirection: "row",
    width: "70%",
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
