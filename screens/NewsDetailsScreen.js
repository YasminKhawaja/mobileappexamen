import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NewsDetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>{item.category}</Text>

      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Datum</Text>
        <Text style={styles.infoText}>{item.date}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Leestijd</Text>
        <Text style={styles.infoText}>{item.readTime}</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.sectionTitle}>Artikel</Text>
        <Text style={styles.content}>{item.content}</Text>
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
    marginBottom: 24,
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

  contentBox: {
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

  content: {
    fontSize: 16,
    color: "#444444",
    lineHeight: 24,
  },
});
