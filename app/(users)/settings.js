import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { logoutAction } from "../(services)/(redux)/authSlice";

export default function Actividades() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    router.push("/");
  };
  
  return (
    <View>
      <Text>Configuracion del usuario</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}