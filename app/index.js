import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./(services)/api/api";
import { loginUserAction } from "./(services)/(redux)/authSlice";
import { useDispatch } from "react-redux";
import { LogoSVG } from "../components/Icons";
import { stylesForm } from "../styles/FormStyle";
// import * as SecureStore from 'expo-secure-store';

// const saveTokenToSecureStore = async (token, expirationTime) => {
//   await SecureStore.setItemAsync('access_token', token);
//   await SecureStore.setItemAsync('token_expiration', expirationTime.toString());
// };

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

export default function Index() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: loginUser,
    mutationKey: ["login"],
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <LogoSVG color={"#949c7f"} />
        <Text style={styles.Logo}>Progrezy</Text>
      </View>

      {mutation?.isError && (
        <Text style={styles.errorText}>
          {mutation?.error?.response?.data?.error ||
            "Ocurrió un error inesperado"}
        </Text>
      )}
      {mutation?.isSuccess && <Text>Inicio de sesión correcto</Text>}

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          mutation.mutateAsync(values).then((data) => {
            if (data.user.rol === "Usuario") {
              dispatch(loginUserAction(data));
              // saveTokenToSecureStore(data.token, Date.now() + 60 * 60 * 1000); // token con expiración de 1 hora
              router.push("/(users)");
            } else {
              dispatch(loginUserAction(data));
              router.push("/(admins)");
            }
          }).catch((error) => {
            console.log(error)
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
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
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
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Pressable
              style={styles.button}
              onPress={handleSubmit}
              disabled={mutation?.isPending}
            >
              {mutation?.isPending ? (
                <ActivityIndicator color="#494F3C" />
              ) : (
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              )}
            </Pressable>
            <Text style={styles.texto}>
              Aun no tienes cuenta{" "}
              <Link href="/register" style={styles.link}>
                Registrate ahora
              </Link>
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = stylesForm