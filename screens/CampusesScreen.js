import { ScrollView, StyleSheet, Text } from "react-native";

import CampusCard from "../components/CampusCard";
import campuses from "../data/campuses";

export default function CampusesScreen({ navigation }) {
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>CAMPUSSEN</Text>
      <Text style={styles.title}>Onze campussen</Text>

      <Text style={styles.subtitle}>
        Ontdek de verschillende campussen van Busleyden Atheneum.
      </Text>

      <Text style={styles.resultText}>
        {campuses.length} campussen gevonden
      </Text>

      {campuses.map((campus) => (
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
});
