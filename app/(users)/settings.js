import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { loadUser, logoutAction } from "../(services)/(redux)/authSlice";
import { useEffect } from "react";

export default function Settings() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAction());
    router.push("/");
  };
  
  return (
    <View>
      <Text>Configuracion del usuario</Text>
      {user ? (
        <Text>{user.user.user}</Text>
      ) : (
        <Text>Cargando usuario...</Text>
      )}
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
  
}