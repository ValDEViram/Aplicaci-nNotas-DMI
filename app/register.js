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
import { registerUser } from "./(services)/api/api";
import { useMutation } from "@tanstack/react-query";
import { LeftArrow, LogoSVG } from "../components/Icons";
import { CheckboxComponent } from "../components/CheckboxComponent";
import { useState } from "react";

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

  const handleToggle = (accepted) => {
    setIsTermsAccepted(accepted);
  };
  const mutation = useMutation({
    mutationFn: registerUser,
    mutationKey: ["register"],
  });

  console.log(mutation);

  return (
    <>
    <View style={styles.container}>
    <Link href="/" style={{padding: 10, position:"absolute", left: 0, top: 0}}><LeftArrow stroke={"#949c7f"}/></Link>

      <View style={styles.LogoContainer}>
        <LogoSVG color={"#949c7f"}/>
        <Text style={styles.Logo}>Progrezy</Text>
      </View>
      

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
              link={{ href: "/CondicionesUso/terms", text: " términos y condiciones" }}
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
    </>
  );
}

const styles = StyleSheet.create({
  LogoContainer:{ 
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 25,
    shadowColor: '#35392e',
    shadowOffset: {width: 0, height:8},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: "#cfd3c3"
  },
  Logo: {
    fontSize: 50,
    color: "#35392e",
    fontWeight: "bold",

  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F5F0",
    gap: 30
  }, 
  title: {
    color: "#301D18",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    gap: 15,
    backgroundColor: "#F4F5F0",
    padding: 20,
    borderRadius: 12
  },
  botonLink: {
    fontSize: 500,
    fontWeight: "bold",
  },
  button: {
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#AAB396",
    borderColor: "#494F3C",
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 2, height:4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#301D18",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    color: "#778062",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#494F3C",
    backgroundColor: "#FFFF",
    shadowColor: 'black',
    shadowOffset: {width: 2, height:4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  texto: {
    color: "#778062",
  },
  link: {
    color: "#494F3C",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  errorText: {
    color: "red"
  },

  buttonDisabled: {
    backgroundColor: "#f4f5f0"
  }
});

