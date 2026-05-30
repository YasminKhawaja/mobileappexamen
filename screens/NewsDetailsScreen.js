import { StyleSheet, Text, View } from "react-native";

export default function NewsDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nieuws detail</Text>
      <Text style={styles.text}>Hier komt het volledige nieuwsbericht.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F7F8FA",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    color: "#555555",
  },
});
