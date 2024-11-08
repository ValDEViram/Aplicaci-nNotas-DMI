import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BuscarSVG } from "./Icons";
import { ActivityCard } from "./ActivitiesCard";
const { width } = Dimensions.get("window");

export function Main({ context, activities }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={[styles.container, width]}>
        <Text style={styles.title}>Inicio</Text>
        <ScrollView>
          {context === "search" ? (
            <View style={styles.buscar}>
              <BuscarSVG />
              <Text>Buscar</Text>
            </View>
          ) : null}
          <ActivityCard context={context} activities={activities} />
          {context === "index" ? (
            <>
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
            </>
          ) : null}
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
  tareas: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    borderColor: "#494F3C",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
