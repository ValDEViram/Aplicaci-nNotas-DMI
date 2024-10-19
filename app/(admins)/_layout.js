import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#B1B79F",
        tabBarStyle: {
          backgroundColor: "#1B1D16",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#778062",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          headerShown: false,
          title: "Actividades",
          tabBarIcon: ({ color }) => <BuscarSVG color={color} />,
        }}
      />
    </Tabs>
  );
}
