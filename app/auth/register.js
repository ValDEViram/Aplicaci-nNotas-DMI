import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../(services)/api/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Proporciona un nombre de usuario")
    .label("Nombre de usuario"),
  email: Yup.string()
    .required("Proporciona un correo electronico")
    .email()
    .label("Correo electronico"),
  password: Yup.string()
    .required("Proporciona una contraseña")
    .min(8)
    .label("Contraseña"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirma la contraseña"),
});

export default function Register() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const mutation = useMutation({
    mutationFn: registerUser,
    mutationKey: ["register"],
  });

  console.log(mutation);

  return (
    <View>
      <Text>Registrarse</Text>
      <Link style={styles.botonLink} href="/">
        Volver
      </Link>

      {mutation?.isError && (
        <Text>{mutation?.error?.response?.data?.message}</Text>
      )}
      {mutation?.isSuccess && <Text>Registro de usuario correcto</Text>}

      <Formik
        initialValues={{ username: "", email: "", password: "", password: "" }}
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

            <View style={styles.checkboxContainer}>
              <Pressable
                onPress={() => setIsTermsAccepted(!isTermsAccepted)}
                style={styles.checkbox}
              >
                {isTermsAccepted ? (
                  <MaterialIcons name="check-box" size={24} color="green" />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={24}
                    color="gray"
                  />
                )}
              </Pressable>
              <Text>
                Acepto los{" "}
                <Link href="/CondicionesUso/terms" style={styles.termsLink}>
                  términos y condiciones
                </Link>
              </Text>
            </View>

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
  );
}

const styles = StyleSheet.create({
  botonLink: {
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "pink",
    fontSize: 100,
  },
  button: {
    backgroundColor: "blue",
    borderWidth: 5,
    borderColor: "#3D4133",
    padding: 5,
    paddingLeft: 10,
    color: "pink",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginVertical: 20,
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    borderWidth: 1,
    padding: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  termsLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
