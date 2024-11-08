import { StyleSheet, Text, View, Image } from "react-native";
import { CheckboxComponent } from "./CheckboxComponent";
import { RightArrow } from "./Icons";

export function ActivityCard({ context, activities }) {
  return (
    <View
      style={[
        context === "search"
          ? styles.searchContainer
          : styles.containerActividades,
      ]}
    >
      {activities.map((activity) => (
        <View
          style={[
            context === "search" ? styles.searchCard : styles.activitiesCard,
          ]}
          key={activity._id}
        >
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
                  activity.tasks.filter((task) => task.completed === "false")
                    .length
                }{" "}
                actividades pendientes
              </Text>
              <Text style={styles.text}>
                {
                  activity.tasks.filter((task) => task.completed === "true")
                    .length
                }{" "}
                actividades finalizadas
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
  searchCard: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#494F3C",
    padding: 10,
    flexDirection: "row",
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
  searchContainer: {
    gap: 10,
  },
  tinyLogo: {
    aspectRatio: 1 / 1,
    objectFit: "contain",
  },
  wrapperActivityTask: {
    flexDirection: "column",
    justifyContent: "space-around",
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
});
