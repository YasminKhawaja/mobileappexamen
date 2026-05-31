import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function StudyCard({ study, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: study.image }} style={styles.image} />

      <Text style={styles.campus}>{study.campus}</Text>
      <Text style={styles.title}>{study.title}</Text>
      <Text style={styles.focus}>{study.focus}</Text>
      <Text style={styles.description}>{study.description}</Text>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Meer info →</Text>
      </View>
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

  image: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    marginBottom: 16,
  },

  campus: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555555",
    marginBottom: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 10,
  },

  focus: {
    alignSelf: "flex-start",
    backgroundColor: "#EFF7DF",
    color: "#95C23D",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    color: "#444444",
    lineHeight: 22,
    marginBottom: 14,
  },

  button: {
    marginTop: 4,
  },

  buttonText: {
    color: "#95C23D",
    fontWeight: "bold",
    fontSize: 16,
  },
});
