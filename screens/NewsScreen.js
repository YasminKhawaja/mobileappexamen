import { ScrollView, StyleSheet, Text } from "react-native";

import NewsCard from "../components/NewsCard";
import news from "../data/news";

export default function NewsScreen({ navigation }) {
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>ACTUEEL</Text>
      <Text style={styles.title}>Nieuws & Events</Text>

      <Text style={styles.subtitle}>
        Lees de laatste nieuwtjes en activiteiten van Busleyden Atheneum.
      </Text>

      <Text style={styles.resultText}>
        {news.length} nieuwsberichten gevonden
      </Text>

      {news.map((item) => (
        <NewsCard
          key={item.id}
          item={item}
          onPress={() => navigation.navigate("NewsDetails", { item: item })}
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
