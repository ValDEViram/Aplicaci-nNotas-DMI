import { StyleSheet, Text, View } from "react-native";
import { HomeSVG } from "../assets/Svg/Home";
import { ActividadesSVG } from "../assets/Svg/ActividadesSVG";
import { MasSVG } from "../assets/Svg/MasSVG";
import { LogrosSVG } from "../assets/Svg/LogrosSVG";
import { ConfigureSVG } from "../assets/Svg/SettingsSVG";

export function NavBarBottom() {
  return (
    <View style={styles.navBar}>
      <View style={styles.navButton}>
        <HomeSVG />
        <Text style={styles.navText}>Inicio</Text>
      </View>
      <View style={styles.navButton}>
        <ActividadesSVG />
        <Text style={styles.navText}>Actividades</Text>
      </View>
      <View style={styles.navButton}>
        <MasSVG />
      </View>
      <View style={styles.navButton}>
        <LogrosSVG />
        <Text style={styles.navText}>Logros</Text>
      </View>
      <View style={styles.navButton}>
        <ConfigureSVG />
        <Text style={styles.navText}>Configuración</Text>
      </View>
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
  navText: {
    color: "#B1B79F",
    fontSize: 10,
    fontWeight: "bold",
  },
  navButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
