import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={{ paddingBottom: 24 }}>
      <Text style={styles.header}>Search for jobs</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for your dream job"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 16 }}
        />
        <MaterialIcons name="search" size={22} color="#888" />
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>No results yet. Start typing to search for jobs.</Text>
        {/* You can render search results here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    textAlign: "center",
    color: "#222",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  resultsContainer: {
    marginTop: 32,
    alignItems: "center",
  },
  resultsText: {
    color: "#888",
    fontSize: 16,
  },
});