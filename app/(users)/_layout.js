import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ActividadesSVG, BuscarSVG, SettingsSVG } from "../../components/Icons";
import { ActivitiesProvider } from "../../consts/activities";
import { PersonalActivitiesProvider } from "../../consts/personalActivities";

export default function RootLayout() {
  return (
    <PersonalActivitiesProvider>
    <ActivitiesProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#B1B79F",
          tabBarInactiveTintColor: "#778062",
          tabBarStyle: {
            backgroundColor: "#1B1D16",
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
          name="activites"
          options={{
            headerShown: false,
            title: "Actividades",
            tabBarIcon: ({ color }) => <ActividadesSVG stroke={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            title: "Buscar",
            tabBarIcon: ({ color }) => <BuscarSVG stroke={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            title: "Configuración",
            tabBarIcon: ({ color }) => <SettingsSVG stroke={color} />,
          }}
        />
      </Tabs>
    </ActivitiesProvider>
    </PersonalActivitiesProvider>
  );
}
