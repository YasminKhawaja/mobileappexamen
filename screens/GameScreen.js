import { StyleSheet, Text, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini-game</Text>
      <Text style={styles.text}>Hier komt het boekenspel.</Text>
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
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 12,
  },

  text: {
    fontSize: 18,
    color: "#555555",
  },
});
