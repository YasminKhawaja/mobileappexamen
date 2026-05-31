import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import StudyCard from "../components/StudyCard";
import studies from "../data/studies";

const campuses = [
  "Alle",
  "Botaniek",
  "Caputsteen",
  "De Beemden",
  "Basisverpleegkunde",
  "Nekkerspoel",
  "Pitzemburg",
  "Stassart",
  "Zandpoort",
];

const focuses = [
  "Alle",
  "Gezondheid & Wetenschap",
  "Integraal & Creatief",
  "Buiten-gewoon Leren",
  "HBO5 Verpleegkunde",
  "Werken & Leren",
  "Kennis & Onderzoek",
  "Mens & Welzijn",
  "IT & Ondernemen",
];

const types = ["Alle", "Doorstroom", "Dubbele finaliteit", "Arbeidsmarkt"];

export default function StudyFinderScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("Alle");
  const [selectedFocus, setSelectedFocus] = useState("Alle");
  const [selectedType, setSelectedType] = useState("Alle");

  const filteredStudies = studies.filter((study) => {
    const matchesSearch = study.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCampus =
      selectedCampus === "Alle" || study.campus === selectedCampus;

    const matchesFocus =
      selectedFocus === "Alle" || study.focus === selectedFocus;

    const matchesType = selectedType === "Alle" || study.type === selectedType;

    return matchesSearch && matchesCampus && matchesFocus && matchesType;
  });

  function resetFilters() {
    setSearchText("");
    setSelectedCampus("Alle");
    setSelectedFocus("Alle");
    setSelectedType("Alle");
  }

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>STUDIEKIEZER</Text>
      <Text style={styles.title}>Vind jouw opleiding</Text>

      <Text style={styles.subtitle}>
        Filter op campus, studiegebied of onderwijsvorm en ontdek welke
        opleiding bij jou past.
      </Text>

      <Text style={styles.filterTitle}>Zoeken</Text>

      <TextInput
        style={styles.input}
        placeholder="Zoek op opleiding..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <Text style={styles.filterTitle}>Campus</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterRow}>
          {campuses.map((campus) => (
            <Pressable
              key={campus}
              style={[
                styles.filterButton,
                selectedCampus === campus && styles.activeFilterButton,
              ]}
              onPress={() => setSelectedCampus(campus)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedCampus === campus && styles.activeFilterButtonText,
                ]}
              >
                {campus}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.filterTitle}>Focus</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterRow}>
          {focuses.map((focus) => (
            <Pressable
              key={focus}
              style={[
                styles.filterButton,
                selectedFocus === focus && styles.activeFilterButton,
              ]}
              onPress={() => setSelectedFocus(focus)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedFocus === focus && styles.activeFilterButtonText,
                ]}
              >
                {focus}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.filterTitle}>Onderwijsvorm</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterRow}>
          {types.map((type) => (
            <Pressable
              key={type}
              style={[
                styles.filterButton,
                selectedType === type && styles.activeFilterButton,
              ]}
              onPress={() => setSelectedType(type)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedType === type && styles.activeFilterButtonText,
                ]}
              >
                {type}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.resetButton} onPress={resetFilters}>
        <Text style={styles.resetButtonText}>Reset filters</Text>
      </Pressable>

      <Text style={styles.resultText}>
        {filteredStudies.length} resultaten gevonden
      </Text>

      {filteredStudies.map((study) => (
        <StudyCard
          key={study.id}
          study={study}
          onPress={() => navigation.navigate("StudyDetails", { study: study })}
        />
      ))}

      {filteredStudies.length === 0 && (
        <Text style={styles.emptyText}>Geen opleidingen gevonden.</Text>
      )}
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
    marginBottom: 24,
  },

  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666666",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 16,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },

  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  filterButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#DADADA",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  activeFilterButton: {
    backgroundColor: "#95C23D",
    borderColor: "#95C23D",
  },

  filterButtonText: {
    color: "#333333",
    fontWeight: "600",
  },

  activeFilterButtonText: {
    color: "#ffffff",
  },

  resetButton: {
    backgroundColor: "#111111",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    alignSelf: "flex-start",
    marginTop: 4,
    marginBottom: 18,
  },

  resetButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  resultText: {
    fontSize: 16,
    marginBottom: 16,
    color: "#333333",
  },

  emptyText: {
    fontSize: 16,
    color: "#777777",
    marginBottom: 40,
  },
});
