import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Proporciona un correo electronico")
    .email()
    .label("Correo electronico"),
  password: Yup.string()
    .required("Proporciona una contraseña")
    .min(8)
    .label("Contraseña"),
});

export default function Login() {
  return (
    <View>
      <Text>login</Text>
      <Link style={styles.botonLink} href="/">
        Volver
      </Link>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {{
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  botonLink: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
