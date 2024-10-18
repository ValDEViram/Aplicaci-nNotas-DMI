import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Terms() {
  return (
    <View style={styles.container}>
      <ScrollView >
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
      <Text style={styles.title}>Acuerdo de Uso</Text>
      <Text style={styles.subtitulo}>Términos y Condiciones de Uso</Text>
      <Text>
        Al acceder o utilizar la aplicación [Nombre de la Aplicación] (la
        "Aplicación"), aceptas cumplir con los siguientes términos y condiciones
        ("Términos de Uso"). Si no aceptas estos términos, no debes usar la
        Aplicación.
      </Text>
      <Text style={styles.subtitulo}>1.- Descripción del Servicio</Text>
      <Text style={styles.lista}>
        La aplicación [Nombre de la Aplicación] es una plataforma que te permite
        gestionar y rastrear tus actividades personales y semanales en
        dispositivos móviles iOS y Android. A través de la API y funcionalidades
        nativas proporcionadas por Expo, la aplicación recopila y organiza tus
        datos de manera eficiente para mejorar tu productividad.
      </Text>
      <Text style={styles.subtitulo}>2.- Registro y Cuentas</Text>
      <Text style={styles.lista}>
        Para utilizar la Aplicación, debes registrarte proporcionando
        información veraz y actualizada. Eres responsable de mantener la
        seguridad de tu cuenta y de cualquier actividad que ocurra bajo tu
        cuenta. [Nombre de la Aplicación] no será responsable de ningún acceso
        no autorizado a tu cuenta.
      </Text>
      <Text style={styles.subtitulo}>3.- Uso Permitido</Text>
      <Text>
        {" "}
        Puedes utilizar la Aplicación únicamente para fines personales y no
        comerciales. No puedes:
      </Text>
      <Text style={styles.lista}>
        -Modificar o distribuir el contenido de la aplicación sin autorización
      </Text>
      <Text style={styles.lista}>
        -Usar la aplicación para fines ilegales o fraudulentos.
      </Text>
      <Text style={styles.lista}>
        -Intentar descompilar o hacer ingeniería inversa de la aplicación.
      </Text>
      <Text style={styles.subtitulo}>4.- Propiedad Intelectual</Text>
      <Text style={styles.lista}>
        Todos los derechos sobre el software, el diseño, los gráficos y otros
        elementos de la Aplicación son propiedad de [Nombre de la Compañía]. No
        adquieres ningún derecho de propiedad sobre el contenido.
      </Text>
      <Text style={styles.subtitulo}>5.- Recopilación de Datos</Text>
      <Text style={styles.lista}>
        La Aplicación recopila datos personales según se detalla en el Aviso de
        Consentimiento. Al aceptar estos Términos de Uso, también aceptas la
        recopilación y procesamiento de tus datos personales.
      </Text>
      <Text style={styles.subtitulo}>
        6.- Modificaciones y Terminación del Servicio
      </Text>
      <Text style={styles.lista}>
        Nos reservamos el derecho de modificar o interrumpir la Aplicación en
        cualquier momento sin previo aviso. Asimismo, podemos modificar estos
        Términos de Uso en cualquier momento. Las modificaciones entrarán en
        vigor en el momento de su publicación en la aplicación.
      </Text>
      <Text style={styles.subtitulo}>7.- Limitación de Responsabilidad</Text>
      <Text style={styles.lista}>
        La Aplicación se proporciona "tal cual" y [Nombre de la Compañía] no
        ofrece garantías explícitas ni implícitas sobre su funcionamiento. No
        seremos responsables de ningún daño directo o indirecto que resulte del
        uso o la incapacidad de usar la Aplicación.
      </Text>
      <Text style={styles.subtitulo}>8.- Jurisdicción y Ley Aplicable</Text>
      <Text style={styles.lista}>
        Estos Términos de Uso se rigen por las leyes de México y cualquier
        disputa será resuelta en los tribunales de Aguascalientes, México.
      </Text>
      <Text style={styles.subtitulo}>9.- Contacto</Text>
      <Text style={styles.lista}>
        Para cualquier consulta sobre estos Términos de Uso, puedes contactarnos
        en [correo electrónico de soporte].
      </Text>
      </ScrollView>
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
