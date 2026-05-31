import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function CampusDetailsScreen({ route }) {
  const { campus } = route.params;

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>CAMPUS</Text>

      <Text style={styles.title}>{campus.name}</Text>

      <Image source={{ uri: campus.image }} style={styles.image} />

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Focus</Text>
        <Text style={styles.infoText}>{campus.focus}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Adres</Text>
        <Text style={styles.infoText}>{campus.address}</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.sectionTitle}>Over deze campus</Text>
        <Text style={styles.description}>{campus.description}</Text>
      </View>
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
    fontSize: 34,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginBottom: 14,
  },

  infoLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#C95B95",
    marginBottom: 6,
  },

  infoText: {
    fontSize: 17,
    color: "#111111",
  },

  descriptionBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginTop: 10,
    marginBottom: 40,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111111",
  },

  description: {
    fontSize: 16,
    color: "#444444",
    lineHeight: 24,
  },
});
