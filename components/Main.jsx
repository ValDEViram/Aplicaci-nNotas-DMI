import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActivities } from "../consts/activities";
const { width } = Dimensions.get("window");

export function Main() {
  const insets = useSafeAreaInsets();
  const { activities } = useActivities();

  return (
    <View style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={[styles.container, width]}>
        <Text style={styles.title}>Inicio</Text>
        <ScrollView>
          {/* <View style={styles.buscar}>
          <BuscarSVG />
          <Text>Buscar</Text>
        </View> */}
          <Text style={styles.subtitulo}>Actividades recientes</Text>
          <View style={styles.containerActividades}>
            {activities.map((activity) => (
              <View style={styles.activitiesCard} key={activity._id}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                  }}
                />
                <View style={styles.wrapperActivityTask}>
                  <Text style={styles.subtituloCard} numberOfLines={1}>
                    {activity.name}
                  </Text>
                  <View>
                    <Text style={styles.text}>
                      {
                        activity.tasks.filter(
                          (task) => task.completed === "false"
                        ).length
                      }{" "}
                      actividades pendientes
                    </Text>
                    <Text style={styles.text}>10 actividades finalizadas</Text>
                    <Text style={styles.text}>3 logros obtenidos</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <Text style={styles.subtitulo}>Tareas por realizar</Text>
          <View style={styles.containerTareas}>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
            <View style={styles.tareas}>
              <Text>Ir al gym</Text>
              <Text>Hoy a las 8:00 pm</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    color: "#301D18",
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtituloCard: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#778062",
    textDecorationLine: "underline",
  },
  text: {
    color: "#828282",
    fontSize: 10,
  },
  buscar: {
    backgroundColor: "#F4F5F0",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#3D4133",
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 20,
  },
  activitiesCard: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#494F3C",
    padding: 10,
    width: "45%",
    shadowColor: "#1B1D16",
    gap: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  containerActividades: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerTareas: {
    height: 300,
    borderWidth: 3,
    borderColor: "#494F3C",
    backgroundColor: "#F4F5F0",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
    marginBottom: 20,
  },
  tinyLogo: {
    aspectRatio: 1 / 1,
    objectFit: "contain",
  },
  tareas: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderColor: "#494F3C",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  wrapperActivityTask: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
