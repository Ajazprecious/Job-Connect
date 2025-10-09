import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useUser } from "./context/UserContext";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen() {
  const { setUser } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !country || !password || password !== confirmPassword) {
      Alert.alert("Error", "Please fill all fields correctly.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://jobconnect-backend-th2k.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, country, password }),
      });
      const data = await res.json();
      if (res.ok && data.user && data.token) {
        setUser({ ...data.user, token: data.token });
        router.replace("/");
      } else {
        Alert.alert("Signup Failed", data.message || "Please try again.");
      }
    } catch (err) {
      Alert.alert("Network Error", "Could not connect to server.");
    }
    setLoading(false);
  };

  return (
    <View style={styles.root}>
      {/* Time and Back Button */}
      <View style={styles.topBar}>
        <Text style={styles.timeText}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>fill in your details to create an account</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={name}
          onChangeText={setName}
          placeholderTextColor="#bbb"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#bbb"
        />

        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={country}
          onChangeText={setCountry}
          placeholderTextColor="#bbb"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder=""
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#bbb"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#222" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder=""
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            placeholderTextColor="#bbb"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? "eye" : "eye-off"} size={24} color="#222" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.signupBtnText}>Sign up</Text>}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.loginLink}>
          Already have an account? <Text style={{ color: "#0033FF" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", padding: 24 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  timeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    color: "#222",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  form: { marginBottom: 24 },
  label: {
    fontSize: 16,
    color: "#222",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 4,
    backgroundColor: "#fafafa",
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  signupBtn: {
    backgroundColor: "#0033FF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,
  },
  signupBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginLink: {
    color: "#222",
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
  },
});