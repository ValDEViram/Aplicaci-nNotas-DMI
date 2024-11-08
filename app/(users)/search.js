import { View } from "react-native";
import { Main } from "../../components/Main";
import { useActivities } from "../../consts/activities";

export default function Search() {
  const { activities = [] } = useActivities();

  return (
      <View>
        <Main context="search" activities={activities}/>
      </View>
  );
}

