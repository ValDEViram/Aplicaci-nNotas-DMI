import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { MyActivities } from "../../components/Activities";

export default function Actividades() {
  return (
    <View>
      <StatusBar style="auto" />
      <MyActivities />
    </View>
  );
}