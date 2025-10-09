import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from "react-native";
import { useUser } from "./context/UserContext";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const { setUser } = useUser();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://jobconnect-backend-th2k.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.user && data.token) {
        setUser({ ...data.user, token: data.token });
        router.replace("/");
      } else {
        Alert.alert("Login Failed", data.message || "Please try again.");
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

      <Text style={styles.title}>Welcome to JobConnect</Text>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.googleBtn}>
        <Image source={require("../assets/images/google-logo.png")} style={styles.googleLogo} />
        <Text style={styles.googleBtnText}>Log in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginBtnText}>Log in</Text>}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.signupLink}>
          Don’t have an account ? <Text style={{ color: "#0033FF" }}>sign-up</Text>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#222",
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0033FF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 18,
    justifyContent: "center",
  },
  googleLogo: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  googleBtnText: {
    color: "#0033FF",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#222",
    fontSize: 16,
    marginBottom: 18,
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
  loginBtn: {
    backgroundColor: "#0033FF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupLink: {
    color: "#222",
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
  },
});