import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require('../assets/images/your-background-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to JobConnect</Text>
        <Text style={styles.subtitle}>
          Building Bridges Between Skills and Employers.
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={() => router.push('/signup')}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipBtn} onPress={() => router.replace('/')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 28,
    margin: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 8,
  },
  title: {
    color: '#0033FF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#222',
    marginBottom: 32,
    textAlign: 'center',
  },
  loginBtn: {
    backgroundColor: '#0033FF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupBtn: {
    borderColor: '#0033FF',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  signupText: {
    color: '#0033FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipBtn: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: '#eee',
    width: '100%',
    alignItems: 'center',
  },
  skipText: {
    color: '#0033FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});