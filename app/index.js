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
import { useDispatch, useSelector } from "react-redux";
import { LogoSVG } from "../components/Icons";

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

  useSelector((state) => console.log("Informacion guardada", state));
  console.log(mutation);

  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <LogoSVG color={"#949c7f"}/>
        <Text style={styles.Logo}>Progrezy</Text>
      </View>
      
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
                <ActivityIndicator color="pink" />
              ) : (
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              )}
            </Pressable>
            <Text style={styles.texto}>Aun no tienes cuenta <Link href="/register" style={styles.link}>Registrate ahora</Link></Text>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  LogoContainer:{ 
    backgroundColor: "#FFF",
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
});