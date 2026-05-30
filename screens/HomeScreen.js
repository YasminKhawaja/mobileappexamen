import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>BA</Text>
        </View>

        <Text style={styles.schoolName}>Busleyden Atheneum</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>Eén school, vele mogelijkheden</Text>

        <Text style={styles.subtitle}>
          Ontdek een school waar talent bloeit en elke leerling zijn eigen pad
          vindt.
        </Text>

        <Pressable
          style={styles.mainButton}
          onPress={() => navigation.navigate("StudyFinder")}
        >
          <Text style={styles.mainButtonText}>Start de studiekiezer</Text>
        </Pressable>
      </View>

      <View style={styles.menu}>
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("StudyFinder")}
        >
          <Text style={styles.cardTitle}>Studiekiezer</Text>
          <Text style={styles.cardText}>
            Zoek een opleiding die bij jou past.
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("Campuses")}
        >
          <Text style={styles.cardTitle}>Campussen</Text>
          <Text style={styles.cardText}>
            Bekijk de verschillende campussen.
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("News")}
        >
          <Text style={styles.cardTitle}>Nieuws</Text>
          <Text style={styles.cardText}>
            Lees nieuws en activiteiten van de school.
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.cardTitle}>Mini-game</Text>
          <Text style={styles.cardText}>Pak boeken en scoor punten.</Text>
        </Pressable>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#95C23D",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
  },

  schoolName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111111",
  },

  hero: {
    marginBottom: 32,
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 17,
    color: "#333333",
    lineHeight: 24,
    marginBottom: 24,
  },

  mainButton: {
    backgroundColor: "#95C23D",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 30,
    alignSelf: "flex-start",
  },

  mainButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  menu: {
    gap: 16,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111111",
  },

  cardText: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 22,
  },
});
