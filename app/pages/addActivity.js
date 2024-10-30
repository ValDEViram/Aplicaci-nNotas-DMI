import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { LeftArrow, MasSVG } from "../../components/Icons";
import { Link, useRouter } from "expo-router";
import * as Yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { addActivity } from "../(services)/api/activityApi";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Proporciona un nombre para la actividad")
    .max(40, "La actividad debe tener menos de 20 caracteres")
    .label("Actividad"),
  tasks: Yup.array().of(
    Yup.string()
      .required("Proporciona una tarea")
      .max(30, "La tarea debe tener menos de 30 caracteres")
  ),
});

export default function Actividades() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: addActivity,
    mutationKey: ["add"],
  });

  return (
    <View>
      <Link href="/(users)/activites" style={{ padding: 10 }}>
        <LeftArrow stroke={"#949c7f"} />
      </Link>
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo plan</Text>
        {mutation?.isError && (
          <Text style={styles.errorText}>
            {mutation?.error?.response?.data?.error ||
              "Ocurrió un error inesperado"}
          </Text>
        )}
        {mutation?.isSuccess && <Text style={styles.successText}>Plan añadido correctamente</Text>}
        <Formik
          initialValues={{ name: "", tasks: ["", "", ""] }}
          onSubmit={(values) => {
            console.log(values);
            mutation
              .mutateAsync(values)
              .then((data) => {
                console.log(data);
                router.push("/(users)/activites")
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
            setFieldValue,
          }) => (
            <View style={styles.containerForm}>
              <Text style={styles.label}>Nombre del plan</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre del plan"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && touched.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

              <Text style={styles.label}>Tareas a realizar</Text>
              {values.tasks.map((a, index) => (
                <View key={index} style={styles.containerInput}>
                  <View style={styles.wrapperInput}>
                    {index >= 3 && (
                      <Pressable
                        onPress={() =>
                          setFieldValue(
                            "tasks",
                            values.tasks.filter((_, i) => i !== index)
                          )
                        }
                        style={styles.buttonReduce}
                      >
                        <Text>-</Text>
                      </Pressable>
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="Tarea"
                      onChangeText={(text) =>
                        setFieldValue(`tasks[${index}]`, text)
                      }
                      onBlur={handleBlur(`tasks[${index}]`)}
                      value={values.tasks[index]}
                    />
                  </View>
                  {errors.tasks &&
                    errors.tasks[index] &&
                    touched.tasks &&
                    touched.tasks[index] && (
                      <Text style={styles.errorText}>
                        {errors.tasks[index]}
                      </Text>
                    )}
                </View>
              ))}

              <Pressable
                onPress={() => setFieldValue("tasks", [...values.tasks, ""])}
                style={styles.buttonAdd}
              >
                <MasSVG />
              </Pressable>
              <Pressable style={styles.button} onPress={handleSubmit}>
                {mutation.isLoading ? (
                  <ActivityIndicator color="pink" />
                ) : (
                  <Text style={styles.buttonText}>Añadir plan de tareas</Text>
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
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerForm: {
    padding: 10,
    gap: 10,
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
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonReduce: {
    borderWidth: 2,
    backgroundColor: "#cfd4c2",
    borderColor: "#494F3C",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
  },
  buttonAdd: {
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "#cfd4c2",
    borderColor: "#494F3C",
    alignItems: "center",
  },
  buttonText: {
    color: "#301D18",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
  successText: {
    color: "green",
    textAlign: "center",
  },
  label: {
    color: "#494F3C",
    fontWeight: "bold",
  },
  input: {
    color: "#778062",
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#494F3C",
    backgroundColor: "#FFFF",
    flex: 1,
  },
  containerInput: {
    flexDirection: "column",
    flex: 1,
  },
  wrapperInput: {
    flex: 1, // Esto permite que el contenido ocupe el espacio disponible en la columna
    flexDirection: "row",
    gap: 10,
  },
});
