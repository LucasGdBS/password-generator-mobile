import { Text, StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

interface PasswordItemProps {
  password: string;
  removePassword: (password: string) => void;
}

export default function PasswordItem({
  password,
  removePassword,
}: PasswordItemProps) {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);
  };

  return (
    <Pressable
      onLongPress={() => handleCopyPassword()}
      style={styles.container}
    >
      <Text style={styles.text}>{showPassword ? password : "••••••••••"}</Text>
      <View style={styles.iconsContainer}>
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="#fff"
          onPress={handleShowPassword}
        />
        <Ionicons
          name="trash"
          size={24}
          color="#ff5a5f"
          onPress={() => removePassword(password)}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#5B5859",
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60,
  }
});
