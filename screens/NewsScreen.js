import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import NewsCard from "../components/NewsCard";
import news from "../data/news";

const categories = ["Alles", "Activiteit", "Terugblik", "Nieuws"];
const sortOptions = ["A/Z", "Z/A"];

export default function NewsScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alles");
  const [selectedSort, setSelectedSort] = useState("A/Z");

  const filteredNews = news
    .filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategory === "Alles" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (selectedSort === "A/Z") {
        return a.title.localeCompare(b.title);
      }

      if (selectedSort === "Z/A") {
        return b.title.localeCompare(a.title);
      }

      return 0;
    });

  function resetFilters() {
    setSearchText("");
    setSelectedCategory("Alles");
    setSelectedSort("A/Z");
  }

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.label}>ACTUEEL</Text>
      <Text style={styles.title}>Nieuws & Events</Text>

      <Text style={styles.subtitle}>
        Lees de laatste nieuwtjes en activiteiten van Busleyden Atheneum.
      </Text>

      <Text style={styles.filterTitle}>Zoeken</Text>

      <TextInput
        style={styles.input}
        placeholder="Zoek op titel..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <Text style={styles.filterTitle}>Categorie</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterRow}>
          {categories.map((category) => (
            <Pressable
              key={category}
              style={[
                styles.filterButton,
                selectedCategory === category && styles.activeFilterButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedCategory === category &&
                    styles.activeFilterButtonText,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.filterTitle}>Sorteren</Text>

      <View style={styles.filterRow}>
        {sortOptions.map((sort) => (
          <Pressable
            key={sort}
            style={[
              styles.filterButton,
              selectedSort === sort && styles.activeFilterButton,
            ]}
            onPress={() => setSelectedSort(sort)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedSort === sort && styles.activeFilterButtonText,
              ]}
            >
              {sort}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.resetButton} onPress={resetFilters}>
        <Text style={styles.resetButtonText}>Reset filters</Text>
      </Pressable>

      <Text style={styles.resultText}>
        {filteredNews.length} nieuwsberichten gevonden
      </Text>

      {filteredNews.map((item) => (
        <NewsCard
          key={item.id}
          item={item}
          onPress={() => navigation.navigate("NewsDetails", { item: item })}
        />
      ))}

      {filteredNews.length === 0 && (
        <Text style={styles.emptyText}>Geen nieuwsberichten gevonden.</Text>
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
