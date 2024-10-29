import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function CheckboxComponent({
  text,
  link,
  textStyle,
  completed,
  onToggle,
}) {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handlePress = () => {
    const newValue = !isTermsAccepted;
    setIsTermsAccepted(newValue);
    onToggle && onToggle(newValue); // Llama a onToggle con el nuevo valor
  };

  return (
    <View style={styles.checkboxContainer}>
      <Pressable onPress={handlePress} style={styles.checkbox}>
        {isTermsAccepted || completed ? (
          <MaterialIcons name="check-box" size={24} color="#778062" />
        ) : (
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="gray"
          />
        )}
      </Pressable>
      <Text style={[styles.defaultText, textStyle]}>
        {text}
        {link ? (
          <Link href={link.href} style={styles.termsLink}>
            {link.text}
          </Link>
        ) : null}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
  },
  termsLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
