import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function Register(){
  return(
    <View>
      <Text>Registro de usuario</Text>
      <Link style={styles.botonLink} href="/">Volver</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  botonLink: {
    fontSize: 50,
    fontWeight: "bold",
  }
});
