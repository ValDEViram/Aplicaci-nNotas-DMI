import { StyleSheet, Text, View } from "react-native";

export default function Terms() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aviso de Consentimiento</Text>
      <Text style={styles.subtitulo}>
        Aviso de Consentimiento para la Recolección de Datos Personales
      </Text>
      <Text>
        Al registrarse y utilizar la aplicación [Nombre de la Aplicación],
        aceptas que recopilamos y procesamos tus datos personales conforme a lo
        dispuesto en esta política de privacidad. Los datos que recopilamos
        incluyen:
      </Text>
      <Text style={styles.lista}>
        -Información personal (nombre, correo electrónico, etc.)
      </Text>
      <Text style={styles.lista}>
        -Datos de uso de la aplicación (actividades registradas, tiempo dedicado
        a cada actividad)
      </Text>
      <Text style={styles.lista}>
        -Datos técnicos del dispositivo (ubicación geográfica, tipo de
        dispositivo, sistema operativo, etc.)
      </Text>
      <Text style={styles.subtitulo}>Propósito de la Recolección de Datos</Text>
      <Text>Utilizamos tus datos para:</Text>
      <Text style={styles.lista}>
        -Personalizar tu experiencia en la aplicación
      </Text>
      <Text style={styles.lista}>-Mejorar nuestras funcionalidades</Text>
      <Text style={styles.lista}>
        -Enviarte notificaciones relevantes sobre tu actividad en la aplicación
      </Text>
      <Text style={styles.subtitulo}>Protección de tus Datos</Text>
      <Text>
        Nos comprometemos a proteger la seguridad de tu información personal.
        Implementamos medidas de seguridad técnicas y administrativas para
        evitar el acceso no autorizado, el uso indebido o la divulgación de tus
        datos. No compartimos tu información personal con terceros sin tu
        consentimiento, salvo cuando sea necesario para cumplir con la ley o
        mejorar el servicio (por ejemplo, a través de servicios de terceros como
        proveedores de API o almacenamiento en la nube).
      </Text>
      <Text style={styles.subtitulo}>Derechos del Usuario</Text>
      <Text>Tienes derecho a:</Text>
      <Text style={styles.lista}>
        -Acceder, rectificar o eliminar tus datos personales
      </Text>
      <Text style={styles.lista}>
        -Retirar tu consentimiento en cualquier momento
      </Text>
      <Text style={styles.lista}>-Solicitar la portabilidad de tus datos</Text>
      <Text>
        Si deseas ejercer alguno de estos derechos, puedes contactarnos en
        [correo electrónico de soporte].
      </Text>
      <Text>
        Al hacer clic en "Aceptar" o continuar usando la aplicación, confirmas
        que has leído y entendido este aviso, y que consientes el procesamiento
        de tus datos según lo descrito.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    alignItems: "stretch",
  },
  title: {
    color: "#301D18",
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5,
  },
  lista: {
    paddingLeft: 10,
    color: "#4f4f4f",
  },
});
