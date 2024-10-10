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
import { loginUser } from "../(services)/api/api";
import { loginUserAction } from "../(services)/(redux)/authSlice";
import { useDispatch, useSelector } from "react-redux";

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
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: loginUser,
    mutationKey: ["login"],
  });

  const dispatch = useDispatch();

  useSelector((state) => console.log("Informacion guardada", state));
  console.log(mutation);
  return (
    <View>
      <Text>login</Text>
      <Link style={styles.botonLink} href="/">
        Volver
      </Link>

      {mutation?.isError && <Text>Credenciales invalidas</Text>}
      {mutation?.isSuccess && <Text>Inicio de sesión correcto</Text>}

      <Formik
        initialValues={{ email: "juan@gmail.com", password: "12345678" }}
        onSubmit={(values) => {
          console.log(values);
          mutation.mutateAsync(values).then((data) => {
            dispatch(loginUserAction(data));
            router.push("/(tabs)");
            console.log(data);
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
                <ActivityIndicator color="pink" />
              ) : (
                <Text style={styles.buttonText}>Iniciar sesión</Text>
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
  button: {
    backgroundColor: "#F4F5F0",
    borderWidth: 5,
    borderColor: "#3D4133",
    padding: 5,
    paddingLeft: 10,
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
});
