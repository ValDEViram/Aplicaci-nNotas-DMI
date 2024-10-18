import { Slot, Stack } from "expo-router";
import { loadUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser);
  }, [dispatch]);
  return <Slot />;
};

export default AppWrapper;
