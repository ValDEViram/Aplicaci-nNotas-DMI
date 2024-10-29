import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ActividadesSVG, SettingsSVG } from "../../components/Icons";


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#B1B79F",
        tabBarInactiveTintColor: "#778062",
        tabBarStyle: {
          backgroundColor: "#1B1D16",
        },
        tabBarShowLabel: false, 
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
          tabBarIcon: ({color})=> <ActividadesSVG stroke={color}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Configuración",
          tabBarIcon: ({color})=> <SettingsSVG stroke={color}/>,
        }}
      />
    </Tabs>
  );
}
