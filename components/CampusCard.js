import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CampusCard({ campus, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: campus.image }} style={styles.image} />

      <Text style={styles.focus}>{campus.focus}</Text>
      <Text style={styles.name}>{campus.name}</Text>
      <Text style={styles.address}>{campus.address}</Text>
      <Text style={styles.description}>{campus.description}</Text>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Bekijk campus →</Text>
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

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 8,
  },

  address: {
    fontSize: 15,
    color: "#C95B95",
    fontWeight: "bold",
    marginBottom: 10,
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
