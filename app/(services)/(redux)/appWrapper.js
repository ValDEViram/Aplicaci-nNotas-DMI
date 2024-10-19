import { Slot, Stack, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./authSlice";

const AppWrapper = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    // Si el usuario está autenticado, redirige a la página principal
    if (user) {
      router.push("/(users)"); // Cambia esto a la ruta donde rediriges después de login
    } else {
      router.push("/"); // Asegúrate que esta sea la página de login
    }
  }, [user, router]);

  return <Slot />;
};

export default AppWrapper;
