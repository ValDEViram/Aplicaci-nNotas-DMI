import { StyleSheet, View } from "react-native";
import { Main } from "../../components/Main";
import { usePersonalActivities } from "../../consts/personalActivities";


export default function TabHome() {
  const { personalActivities  = []} = usePersonalActivities()
  console.log(personalActivities)
  return (
      <View>
        <Main context="index" activities={personalActivities }/>
      </View>
  );
}