import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={require('../../assets/images/your-background-image.png')} style={styles.avatar} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.profileName}>Gift Nelson Brown</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="location-sharp" size={16} color="#fff" />
            <Text style={styles.profileLocation}>Abuja, Nigeria</Text>
          </View>
        </View>
        <Ionicons name="settings" size={26} color="#fff" />
      </View>

      {/* Search */}
      <Text style={styles.sectionTitle}>Find your dream job here</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for your dream job"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 16 }}
        />
        <Ionicons name="search" size={22} color="#888" />
      </View>

      {/* Job Category */}
      <Text style={styles.sectionTitle}>Job Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        <View style={[styles.categoryCard, { backgroundColor: "#FFF7E6" }]}>
          <Ionicons name="settings" size={32} color="#222" />
          <Text style={styles.categoryTitle}>Technology & IT</Text>
          <Text style={styles.categoryCount}>1.25K Jobs</Text>
          <TouchableOpacity style={styles.categoryBtn}><Text>View Jobs</Text></TouchableOpacity>
        </View>
        <View style={[styles.categoryCard, { backgroundColor: "#FFE6E6" }]}>
          <Ionicons name="bulb" size={32} color="#222" />
          <Text style={styles.categoryTitle}>Creative & Design</Text>
          <Text style={styles.categoryCount}>2.2K Jobs</Text>
          <TouchableOpacity style={styles.categoryBtn}><Text>View Jobs</Text></TouchableOpacity>
        </View>
        {/* Add more categories as needed */}
      </ScrollView>

      {/* Available Jobs */}
      <Text style={styles.sectionTitle}>Available Jobs</Text>

      {/* Data Analyst */}
      <View style={styles.jobCard}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require('../../assets/images/google-logo.png')} style={styles.jobLogo} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.jobTitle}>Data Analyst</Text>
            <Text style={styles.jobCompany}>Google international</Text>
          </View>
          <MaterialIcons name="bookmark" size={26} color="#0033FF" />
        </View>
        <View style={styles.jobTagsRow}>
          <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
            <Text style={styles.jobTagText}>Fulltime</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: "#FFF7B2" }]}>
            <Text style={styles.jobTagText}>California/Hybrid</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
            <Text style={styles.jobTagText}>Entry Level</Text>
          </View>
        </View>
        <Text style={styles.jobDesc}>
          Collects, processes, and analyzes data to help companies make informed decisions.
        </Text>
        <View style={styles.jobMetaRow}>
          <Text style={styles.jobMeta}>Posted: 30 minutes ago</Text>
          <Text style={styles.jobMeta}>| 20 Persons Applied</Text>
        </View>
      </View>

      {/* UI/UX Designer */}
      <View style={styles.jobCard}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require('../../assets/images/google-logo.png')} style={styles.jobLogo} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.jobTitle}>UI/UX Designer</Text>
            <Text style={styles.jobCompany}>Stripe Company</Text>
          </View>
          <MaterialIcons name="bookmark" size={26} color="#0033FF" />
        </View>
        <View style={styles.jobTagsRow}>
          <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
            <Text style={styles.jobTagText}>Fulltime</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: "#FFF7B2" }]}>
            <Text style={styles.jobTagText}>London/Remote</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
            <Text style={styles.jobTagText}>Internship</Text>
          </View>
        </View>
        <Text style={styles.jobDesc}>
          Responsible for creating user-friendly and visually appealing designs that enhance user experience across web and mobile platforms.
        </Text>
        <View style={styles.jobMetaRow}>
          <Text style={styles.jobMeta}>Posted: 30 minutes ago</Text>
          <Text style={styles.jobMeta}>| 20 Persons Applied</Text>
        </View>
      </View>

      {/* Software Engineer (Frontend) */}
      <View style={styles.jobCard}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={require('../../assets/images/icon.png')} style={styles.jobLogo} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.jobTitle}>Software Engineer (Frontend)</Text>
            <Text style={styles.jobCompany}>Cowrywise Inc.</Text>
          </View>
          <MaterialIcons name="bookmark" size={26} color="#0033FF" />
        </View>
        <View style={styles.jobTagsRow}>
          <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
            <Text style={styles.jobTagText}>Fulltime</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: "#FFF7B2" }]}>
            <Text style={styles.jobTagText}>Lagos/on site</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
            <Text style={styles.jobTagText}>Mid Level</Text>
          </View>
        </View>
        <Text style={styles.jobDesc}>
          Builds and maintains the user interface of web and mobile applications..
        </Text>
        <View style={styles.jobMetaRow}>
          <Text style={styles.jobMeta}>Posted: 30 minutes ago</Text>
          <Text style={styles.jobMeta}>| 20 Persons Applied</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0033FF",
    padding: 16,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  profileLocation: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
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
  categoryCard: {
    width: 160,
    borderRadius: 16,
    padding: 16,
    marginLeft: 16,
    marginRight: 4,
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 2,
    color: "#222",
  },
  categoryCount: {
    color: "#888",
    marginBottom: 8,
  },
  categoryBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 4,
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  jobLogo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  jobTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },
  jobCompany: {
    color: "#888",
    fontSize: 14,
  },
  jobTagsRow: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 6,
  },
  jobTag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
  },
  jobTagText: {
    fontSize: 13,
    color: "#222",
  },
  jobDesc: {
    color: "#444",
    fontSize: 14,
    marginBottom: 8,
  },
  jobMetaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobMeta: {
    color: "#888",
    fontSize: 12,
    marginRight: 8,
  },
});
