import React from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SavedJobsScreen() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={{ paddingBottom: 24 }}>
      <Text style={styles.header}>Saved jobs</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for your dream job"
          placeholderTextColor="#888"
          style={{ flex: 1, fontSize: 16 }}
        />
        <MaterialIcons name="search" size={22} color="#888" />
      </View>

      {/* Job Card 1 */}
      <View style={styles.jobCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.jobLogo}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.jobTitle}>Software Engineer (Frontend)</Text>
            <Text style={styles.jobCompany}>Cowrywise Inc.</Text>
          </View>
          <MaterialIcons name="bookmark" size={26} color="#0033FF" />
        </View>
        <View style={styles.jobTagsRow}>
          <View style={[styles.jobTag, { backgroundColor: '#FFE6E6' }]}>
            <Text style={styles.jobTagText}>Fulltime</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: '#FFF7B2' }]}>
            <Text style={styles.jobTagText}>Lagos/on site</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: '#FFE6E6' }]}>
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

      {/* Job Card 2 */}
      <View style={styles.jobCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/google-logo.png')}
            style={styles.jobLogo}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.jobTitle}>Data Analyst</Text>
            <Text style={styles.jobCompany}>Google international</Text>
          </View>
          <MaterialIcons name="bookmark" size={26} color="#0033FF" />
        </View>
        <View style={styles.jobTagsRow}>
          <View style={[styles.jobTag, { backgroundColor: '#FFE6E6' }]}>
            <Text style={styles.jobTagText}>Fulltime</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: '#FFF7B2' }]}>
            <Text style={styles.jobTagText}>California/Hybrid</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: '#FFE6E6' }]}>
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

      {/* Job Card 3 */}
      <View style={styles.jobCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.jobLogo}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.jobTitle}>Software Engineer (Frontend)</Text>
            <Text style={styles.jobCompany}>Cowrywise Inc.</Text>
          </View>
          <MaterialIcons name="bookmark" size={26} color="#0033FF" />
        </View>
        <View style={styles.jobTagsRow}>
          <View style={[styles.jobTag, { backgroundColor: '#FFE6E6' }]}>
            <Text style={styles.jobTagText}>Fulltime</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: '#FFF7B2' }]}>
            <Text style={styles.jobTagText}>Lagos/on site</Text>
          </View>
          <View style={[styles.jobTag, { backgroundColor: '#FFE6E6' }]}>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
    color: '#222',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  jobLogo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  jobCompany: {
    color: '#888',
    fontSize: 14,
  },
  jobTagsRow: {
    flexDirection: 'row',
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
    color: '#222',
  },
  jobDesc: {
    color: '#444',
    fontSize: 14,
    marginBottom: 8,
  },
  jobMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobMeta: {
    color: '#888',
    fontSize: 12,
    marginRight: 8,
  },
});
