import React from "react";
import { View, Text, Switch, StyleSheet, TextInput } from "react-native";
import { useAppSettings } from "./context/AppSettingsContext";

export default function SettingsScreen() {
  const {
    darkMode,
    notifications,
    defaultLocation,
    defaultCategory,
    setDarkMode,
    setNotifications,
    setDefaultLocation,
    setDefaultCategory,
  } = useAppSettings();

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? "#111" : "#fff" }]}>
      <Text style={[styles.title, { color: darkMode ? "#fff" : "#000" }]}>
        App Settings
      </Text>

      <View style={styles.settingRow}>
        <Text style={[styles.label, { color: darkMode ? "#fff" : "#000" }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.label, { color: darkMode ? "#fff" : "#000" }]}>
          Notifications
        </Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={[styles.label, { color: darkMode ? "#fff" : "#000" }]}>
          Default Job Location
        </Text>
        <TextInput
          value={defaultLocation}
          onChangeText={setDefaultLocation}
          placeholder="Enter location"
          placeholderTextColor="#888"
          style={[
            styles.input,
            { color: darkMode ? "#fff" : "#000", borderColor: darkMode ? "#555" : "#ccc" },
          ]}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={[styles.label, { color: darkMode ? "#fff" : "#000" }]}>
          Default Category
        </Text>
        <TextInput
          value={defaultCategory}
          onChangeText={setDefaultCategory}
          placeholder="Enter category"
          placeholderTextColor="#888"
          style={[
            styles.input,
            { color: darkMode ? "#fff" : "#000", borderColor: darkMode ? "#555" : "#ccc" },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
  },
  inputGroup: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 6,
  },
});
