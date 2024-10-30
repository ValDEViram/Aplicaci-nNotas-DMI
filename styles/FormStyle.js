import { StyleSheet } from "react-native";


export const stylesForm = StyleSheet.create({
  LogoContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 25,
    shadowColor: "#35392e",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#cfd3c3",
  },
  Logo: {
    fontSize: 50,
    color: "#35392e",
    fontWeight: "bold",
  },
  form: {
    gap: 15,
    backgroundColor: "#F4F5F0",
    padding: 20,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F5F0",
    gap: 30,
  },
  title: {
    color: "#301D18",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
    elevation: 5,
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
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  texto: {
    color: "#778062",
  },
  link: {
    color: "#494F3C",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
  },
  buttonDisabled: {
    backgroundColor: "#f4f5f0"
  }
})