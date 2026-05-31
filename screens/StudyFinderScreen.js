import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import StudyCard from "../components/StudyCard";
import studies from "../data/studies";

export default function StudyFinderScreen({ navigation }) {
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>STUDIEKIEZER</Text>
      <Text style={styles.title}>Vind jouw opleiding</Text>

      <Text style={styles.subtitle}>
        Zoek een opleiding en ontdek welke richting bij jou past.
      </Text>

      <TextInput style={styles.input} placeholder="Zoek..." />

      <Text style={styles.resultText}>
        {studies.length} resultaten gevonden
      </Text>

      {studies.map((study) => (
        <StudyCard
          key={study.id}
          study={study}
          onPress={() => navigation.navigate("StudyDetails", { study: study })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    padding: 24,
  },

  label: {
    color: "#95C23D",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#555555",
    lineHeight: 22,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 16,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },

  resultText: {
    fontSize: 16,
    marginBottom: 16,
    color: "#333333",
  },
});
