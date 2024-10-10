import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text>index</Text>
      <Link asChild href="/auth/login">
        <Pressable>
          <Text style={styles.botonLink}>Inicar Sesión</Text>
        </Pressable>
      </Link>
      <Link asChild href="/auth/register">
        <Pressable>
          <Text style={styles.botonLink}>Registrarse</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  botonLink: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
