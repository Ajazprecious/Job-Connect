import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <MaterialIcons name="arrow-back-ios" size={24} color="#222" />
        <Text style={styles.header}>Notifications</Text>
        <Ionicons name="search" size={24} color="#222" />
      </View>
      {/* Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity style={[styles.tabBtn, styles.tabBtnActive]}>
          <Text style={styles.tabTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBtn}>
          <Text style={styles.tabText}>Unread</Text>
        </TouchableOpacity>
      </View>
      {/* Today */}
      <Text style={styles.sectionTitle}>Today</Text>
      <View style={[styles.notificationCard, { backgroundColor: "#F4F6FF" }]}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="work" size={28} color="#0033FF" />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>New Job Alert!</Text>
            <Text style={styles.cardTime}>12:15 PM</Text>
          </View>
          <Text style={styles.cardDesc}>
            A new UI/UX Designer role has just been posted by TechNova. Salary: $2,000/month. Apply now before the deadline closes in 7 days
          </Text>
        </View>
      </View>
      <View style={styles.notificationCard}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="auto-awesome" size={28} color="#0033FF" />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Application Confirmation</Text>
            <Text style={styles.cardTime}>10:35 AM</Text>
          </View>
          <Text style={styles.cardDesc}>
            Your application for Digital Marketer at AdPro has been successfully submitted. Stay tuned for updates
          </Text>
        </View>
      </View>
      <View style={styles.notificationCard}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="notifications" size={28} color="#0033FF" />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Job Deadline Reminder</Text>
            <Text style={styles.cardTime}>09:30 AM</Text>
          </View>
          <Text style={styles.cardDesc}>
            Deadline Alert: Applications for Project Manager at BuildSmart close in 24 hours. Apply before it’s too late
          </Text>
        </View>
      </View>
      {/* Yesterday */}
      <Text style={styles.sectionTitle}>Yesterday</Text>
      <View style={styles.notificationCard}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="work" size={28} color="#0033FF" />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>New Interview Scheduled</Text>
            <Text style={styles.cardTime}>12:15 PM</Text>
          </View>
          <Text style={styles.cardDesc}>
            Your interview for Marketing Specialist at BrandX is scheduled for Tuesday, 10 AM WAT (Remote via Zoom). Don’t forget to prepare!
          </Text>
        </View>
      </View>
      <View style={styles.notificationCard}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="person" size={28} color="#0033FF" />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Profile Reminder</Text>
            <Text style={styles.cardTime}>10:35 AM</Text>
          </View>
          <Text style={styles.cardDesc}>
            Your TalentHub profile is 70% complete. Add more profile info to attract more opportunities.
          </Text>
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
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    flex: 1,
    textAlign: "center",
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    gap: 12,
  },
  tabBtn: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: "#eee",
  },
  tabBtnActive: {
    backgroundColor: "#4B6CFF",
    borderColor: "#4B6CFF",
  },
  tabText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    color: "#222",
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F4F6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
    flex: 1,
  },
  cardTime: {
    color: "#888",
    fontSize: 13,
    marginLeft: 8,
  },
  cardDesc: {
    color: "#222",
    fontSize: 15,
    marginTop: 2,
  },
});