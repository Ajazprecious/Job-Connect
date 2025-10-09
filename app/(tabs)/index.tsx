import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useSavedJobs } from '../SavedJobsContext';
import { useRouter } from 'expo-router';

// Define job type
interface Job {
  id: string | number;
  title: string;
  company: string;
  logo: string | null;
  category: string;
  location: string;
  date: string;
  description: string;
  url: string;
  job_type: string;
  source: string;
}

const jobCategories = [
  {
    title: "Technology & IT",
    jobs: "3K Jobs",
    color: "#FFF7E6",
    icon: <Ionicons name="laptop-outline" size={32} color="#222" />,
  },
  {
    title: "Creative & Design",
    jobs: "2.2K Jobs",
    color: "#FFE6E6",
    icon: <Ionicons name="bulb-outline" size={32} color="#222" />,
  },
  {
    title: "Marketing",
    jobs: "1.8K Jobs",
    color: "#F4F1FF",
    icon: <Ionicons name="briefcase-outline" size={32} color="#222" />,
  },
];

export default function HomeScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const { savedJobs, saveJob, removeJob } = useSavedJobs();
  const router = useRouter();
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        // ✅ Only Remotive API used
        const remotiveUrl = "https://remotive.com/api/remote-jobs";
        const res = await fetch(remotiveUrl);
        const data = await res.json();

        // Normalize Remotive data
        const remotiveJobs = data.jobs.map((job: any) => ({
          id: job.id,
          title: job.title,
          company: job.company_name,
          logo: job.company_logo,
          category: job.category,
          location: job.candidate_required_location,
          date: job.publication_date,
          description: job.description,
          url: job.url,
          job_type: job.job_type || "Full-time",
          source: "Remotive",
        }));

        // Limit to 20 jobs for display
        const finalJobs = remotiveJobs.slice(0, 20);
        setJobs(finalJobs);
        setFilteredJobs(finalJobs);

        // Count jobs per category
        const counts: { [key: string]: number } = {};
        remotiveJobs.forEach((job: Job) => {
          counts[job.category] = (counts[job.category] || 0) + 1;
        });
        setCategoryCounts(counts);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Handle search filter
  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(text.toLowerCase()) ||
          job.company.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  // Open job link
  const openJobUrl = (url: string) => {
    Linking.openURL(url);
  };

  // Helper to check if job is saved
  const isJobSaved = (id: string | number) => savedJobs.some(j => j.id === id);

  // Get unique categories from jobs
  const categories = Object.keys(categoryCounts);

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require("../../assets/images/bridge-logo.png")}
          style={styles.avatar}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.profileName}>Gift Nelson Brown</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="location-sharp" size={16} color="#fff" />
            <Text style={styles.profileLocation}>Abuja, Nigeria</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Ionicons name="settings" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <Text style={styles.sectionTitle}>Find your dream job here</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for your dream job"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 16 }}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Ionicons name="search" size={22} color="#888" />
      </View>

      {/* Job Category */}
      <Text style={styles.sectionTitle}>Job Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8, marginLeft: 8 }}>
        {categories.map((cat, idx) => (
          <View key={cat} style={[styles.categoryCard, { backgroundColor: idx % 3 === 0 ? "#FFF7E6" : idx % 3 === 1 ? "#FFE6E6" : "#F4F1FF" }]}>
            {/* You can choose icons based on category name if you want */}
            <Ionicons name="briefcase-outline" size={32} color="#222" />
            <Text style={styles.categoryTitle}>{cat}</Text>
            <Text style={styles.categoryJobs}>{categoryCounts[cat]} Jobs</Text>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() => {
                // Filter jobs by category when pressed
                setFilteredJobs(jobs.filter(job => job.category === cat));
              }}
            >
              <Text style={styles.categoryBtnText}>View Jobs</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Available Jobs */}
      <Text style={styles.sectionTitle}>Available Jobs</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0033FF" style={{ marginTop: 24 }} />
      ) : filteredJobs.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20, color: "#888" }}>
          No jobs available right now.
        </Text>
      ) : (
        filteredJobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.jobCard}
            activeOpacity={0.8}
            onPress={() => openJobUrl(job.url)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: job.logo || "https://via.placeholder.com/50",
                }}
                style={styles.jobLogo}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  isJobSaved(job.id) ? removeJob(job.id) : saveJob(job)
                }
              >
                <MaterialIcons
                  name={isJobSaved(job.id) ? "bookmark" : "bookmark-border"}
                  size={26}
                  color={isJobSaved(job.id) ? "#0033FF" : "#222"}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.jobTagsRow}>
              <View style={[styles.jobTag, { backgroundColor: "#FFE6E6" }]}>
                <Text style={styles.jobTagText}>{job.job_type}</Text>
              </View>
              <View style={[styles.jobTag, { backgroundColor: "#FFF7B2" }]}>
                <Text style={styles.jobTagText}>{job.location}</Text>
              </View>
              <View style={[styles.jobTag, { backgroundColor: "#F4F1FF" }]}>
                <Text style={styles.jobTagText}>{job.category}</Text>
              </View>
            </View>

            <Text style={styles.jobDesc} numberOfLines={2}>
              {job.description.replace(/<[^>]+>/g, "")}
            </Text>
            <View style={styles.jobMetaRow}>
              <Text style={styles.jobMeta}>
                Posted: {new Date(job.date).toLocaleDateString()}
              </Text>
              <Text style={styles.jobMeta}>| {job.source}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}

      {filteredJobs.length !== jobs.length && (
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 16, marginBottom: 8 }}
          onPress={() => setFilteredJobs(jobs)}
        >
          <Text style={{ color: "#0033FF", fontWeight: "bold" }}>Show All Jobs</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
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
  profileName: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  profileLocation: { color: "#fff", fontSize: 14, marginLeft: 4 },
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
    width: 140,
    borderRadius: 18,
    padding: 16,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
    marginTop: 8,
    marginBottom: 2,
    textAlign: "center",
  },
  categoryJobs: {
    color: "#888",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  categoryBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#eee",
  },
  categoryBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 14,
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
  jobTitle: { fontWeight: "bold", fontSize: 16, color: "#222" },
  jobCompany: { color: "#888", fontSize: 14 },
  jobTagsRow: { flexDirection: "row", marginTop: 10, marginBottom: 6 },
  jobTag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
  },
  jobTagText: { fontSize: 13, color: "#222" },
  jobDesc: { color: "#444", fontSize: 14, marginBottom: 8 },
  jobMetaRow: { flexDirection: "row", alignItems: "center" },
  jobMeta: { color: "#888", fontSize: 12, marginRight: 8 },
});
