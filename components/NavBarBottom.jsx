import { StyleSheet, Text, View } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export function NavBarBottom() {
    const insets = useSafeAreaInsets()
  
    return (
    <View style={styles.navBar}>
        <Text style={styles.navButton}>Inicio</Text>
        <Text style={styles.navButton}>Actividades</Text>
        <Text style={styles.navButton}>Explorar</Text>
        <Text style={styles.navButton}>Logros</Text>
        <Text style={styles.navButton}>Configuración</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    navBar: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        position: "absolute",
        width: "100%",
        bottom: 0,
        backgroundColor: "#1B1D16",
    },
    navButton: {
        color: "#B1B79F",
        fontSize: 10
    },
});
