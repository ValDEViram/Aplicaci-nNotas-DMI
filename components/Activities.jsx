import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MasSVG, RightArrow } from "./Icons";
import { CheckboxComponent } from "./CheckboxComponent";
import { Link } from "expo-router";
import { useActivities } from "../consts/activities";
const { width } = Dimensions.get("window");

export function MyActivities() {
  const insets = useSafeAreaInsets();
  const { activities } = useActivities();

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
            {activities.map((activity) =>
              activity.visibility === "Privado" ? (
                <View style={styles.activitiesCard} key={activity._id}>
                  <Link href="pages/addActivity">
                    <View style={styles.headerCard}>
                      <Text style={styles.subtituloCard}>{activity.name}</Text>
                      <RightArrow color={"#949c7f"} />
                    </View>
                  </Link>
                  <View style={styles.contentCard}>
                    <View style={styles.column}>
                      <Text>Por hacer</Text>
                      {activity.tasks.map((task, index) =>
                        task.completed === "false" ? (
                          <CheckboxComponent
                            key={index}
                            textStyle={styles.text}
                            text={task.todoTasks}
                          />
                        ) : null
                      )}
                    </View>
                    <View style={styles.column}>
                      <Text>Tareas finalizadas</Text>
                      {activity.tasks.map((task, index) =>
                        task.completed === "true" ? (
                          <CheckboxComponent
                            key={index}
                            completed={true}
                            textStyle={styles.text}
                            text={task.todoTasks}
                          />
                        ) : null
                      )}
                    </View>
                  </View>
                </View>
              ) : null
            )}
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
    fontSize: 16,
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
