import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import queryClient from "./(services)/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import AppWrapper from "./(services)/(redux)/appWrapper";
import { Provider } from "react-redux";
import { store } from "./(services)/(redux)/store";

export default function layout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppWrapper />
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
  },
});
