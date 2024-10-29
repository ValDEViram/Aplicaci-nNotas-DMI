import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MasSVG, RightArrow } from "./Icons";
import { CheckboxComponent } from "./CheckboxComponent";
import { Link } from "expo-router";
const { width } = Dimensions.get("window");

export function MyActivities() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={[styles.container, width]}>
        <Text style={styles.title}>Mis actividades</Text>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#778062",
              borderRadius: 8,
              marginBottom: 20,
            }}
          >
            <Link
              href={"/pages/addActivity"}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <MasSVG stroke={"#F4F5F0"} />
              <Text style={{ color: "#F4F5F0", fontSize: 18 }}>
                Añadir actividad
              </Text>
            </Link>
          </View>
          <View style={[styles.containerActividades]}>
            <View style={styles.activitiesCard}>
              <Link href="pages/addActivity">
                <View style={styles.headerCard}>
                  <Text style={styles.subtituloCard}>Gym</Text>
                  <RightArrow color={"#949c7f"} />
                </View>
              </Link>
              <View style={styles.contentCard}>
                <View style={styles.column}>
                  <Text>Por hacer</Text>
                  <CheckboxComponent
                    textStyle={styles.text}
                    text="Hacer 10 dominadas"
                  />
                  <CheckboxComponent
                    textStyle={styles.text}
                    text="Hacer 10 lagartijas"
                  />
                  <CheckboxComponent
                    textStyle={styles.text}
                    text="Hacer 10 lagartijas"
                  />
                </View>
                <View style={styles.column}>
                  <Text>Tareas finalizadas</Text>
                  <CheckboxComponent
                    completed={true}
                    textStyle={styles.textDone}
                    text="Correr un maratón"
                  />
                  <CheckboxComponent
                    completed={true}
                    textStyle={styles.textDone}
                    text="Correr un maratón"
                  />
                  <CheckboxComponent
                    completed={true}
                    textStyle={styles.textDone}
                    text="Ir 5 días a la semana por un mes"
                  />
                </View>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8s",
                }}
              />
              <View>
                <Text style={styles.subtituloCard}>Gym</Text>
                <Text style={styles.text}>5 actividades pendientes</Text>
                <Text style={styles.text}>10 actividades finalizadas</Text>
                <Text style={styles.text}>3 logros obtenidos</Text>
              </View>
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
  subtituloCard: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#778062",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 12,
  },
  textDone: {
    color: "#828282",
    fontSize: 12,
  },
  activitiesCard: {
    backgroundColor: "#F4F5F0",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#494F3C",
    padding: 10,
    gap: 10,
  },
  containerActividades: {
    gap: 20,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  contentCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "black",
    paddingHorizontal: 30,
    gap: 10,
  },
  column: {
    flex: 1,
    flexWrap: "nowrap",
    gap: 5,
  },
});
