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
    if (!user) {router.push("/")}
    else if(user && user.user.rol === "Usuario"){router.push("/(users)")}
    else if(user && user.user.rol === "Admin"){router.push("/(admins)")}
  }, [user, router]);

  return <Slot />;
};

export default AppWrapper;