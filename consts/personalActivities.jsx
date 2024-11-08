import { createContext, useContext, useState, useEffect } from "react";
import { getUserPlans } from "../app/(services)/api/activityApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersonalActivitiesContext = createContext();

export const PersonalActivitiesProvider = ({ children }) => {
  const [personalActivities, setPersonalActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const user = await AsyncStorage.getItem("userInfo");
        console.log("User Info from AsyncStorage:", user); // Verifica si está bien guardado
        const userID = user ? JSON.parse(user).user.id : null;
        console.log("User ID:", userID); // Verifica que el userID se está extrayendo correctamente

        if (userID) {
          const plans = await getUserPlans(userID);
          console.log("User Plans:", plans);
          setPersonalActivities(plans);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <PersonalActivitiesContext.Provider
      value={{ personalActivities, setPersonalActivities }}
    >
      {children}
    </PersonalActivitiesContext.Provider>
  );
};

export const usePersonalActivities = () =>
  useContext(PersonalActivitiesContext);
