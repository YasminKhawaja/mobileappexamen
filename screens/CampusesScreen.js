import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import CampusCard from "../components/CampusCard";
import localCampuses from "../data/campuses";
import { getCampusesFromWebflow } from "../services/webflowApi";

export default function CampusesScreen({ navigation }) {
  const [campusItems, setCampusItems] = useState(localCampuses);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCampuses() {
      try {
        const apiCampuses = await getCampusesFromWebflow();
        setCampusItems(apiCampuses);
      } catch (err) {
        console.log("CAMPUSES ERROR:", err);
        setError("API niet geladen, lokale data wordt getoond.");
        setCampusItems(localCampuses);
      } finally {
        setLoading(false);
      }
    }

    loadCampuses();
  }, []);

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>CAMPUSSEN</Text>
      <Text style={styles.title}>Onze campussen</Text>

      <Text style={styles.subtitle}>
        Ontdek de verschillende campussen van Busleyden Atheneum.
      </Text>

      {loading && <Text style={styles.resultText}>Campussen laden...</Text>}

      {error !== "" && <Text style={styles.errorText}>{error}</Text>}

      <Text style={styles.resultText}>
        {campusItems.length} campussen gevonden
      </Text>

      {campusItems.map((campus) => (
        <CampusCard
          key={campus.id}
          campus={campus}
          onPress={() =>
            navigation.navigate("CampusDetails", { campus: campus })
          }
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

  resultText: {
    fontSize: 16,
    marginBottom: 16,
    color: "#333333",
  },

  errorText: {
    color: "#C95B95",
    fontSize: 15,
    marginBottom: 16,
    fontWeight: "bold",
  },
});
