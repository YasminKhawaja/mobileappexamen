import { Pressable, StyleSheet, Text, View } from "react-native";

export default function NewsCard({ item, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.readTime}>{item.readTime}</Text>
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.intro}>{item.intro}</Text>

      <Text style={styles.link}>Lees meer →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },

  category: {
    backgroundColor: "#EFF7DF",
    color: "#95C23D",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: "bold",
  },

  readTime: {
    fontSize: 13,
    color: "#555555",
    fontWeight: "bold",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 10,
  },

  intro: {
    fontSize: 16,
    color: "#444444",
    lineHeight: 22,
    marginBottom: 14,
  },

  link: {
    color: "#95C23D",
    fontWeight: "bold",
    fontSize: 16,
  },
});
