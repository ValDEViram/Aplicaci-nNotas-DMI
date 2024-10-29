import { View, Text, StyleSheet } from "react-native";
import { LeftArrow } from "../../components/Icons";
import { Link } from "expo-router";
import * as Yup from "yup"
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Proporciona un nombre para la actividad")
    .min(20)
    .label("Actividad"),
  activities: Yup.string()
    .required("Proporciona al menos una actividad")
    .min(20)
    .label("Actividad"),
});

export default function Actividades() {
  return (
    <View>
      <Link href="/(users)/activites" style={{padding: 10 }}><LeftArrow stroke={"#949c7f"}/></Link>
      <View>
        <Text style={styles.title}>Nueva actividad</Text>
        <Formik
        initialValues={{ name: "", activities: ""}}
        onSubmit={(values) => {
          console.log(values);
          mutation
            .mutateAsync(values)
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
          }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <Text style={styles.title}>Registrarse</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              />
            {errors.username && touched.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Correo electronico"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              />
            {errors.email && touched.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
              />
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}

            <CheckboxComponent
              text="Acepto los"
              link={{ href: "/pages/terms", text: " términos y condiciones" }}
              onToggle={handleToggle}
            />

            <Pressable
              style={[styles.button, !isTermsAccepted && styles.buttonDisabled]}
              disabled={!isTermsAccepted}
              onPress={handleSubmit}
            >
              {mutation?.isPending ? (
                <ActivityIndicator color="pink" />
              ) : (
                <Text style={styles.buttonText}>Registrarse</Text>
              )}
            </Pressable>
          </View>
        )}
      </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
})