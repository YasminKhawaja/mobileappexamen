import { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function GameScreen() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);

  const [bookPosition, setBookPosition] = useState({
    top: 100,
    left: 100,
  });

  function moveBook() {
    const randomLeft = Math.random() * (width - 120);
    const randomTop = Math.random() * 250;

    setBookPosition({
      top: randomTop,
      left: randomLeft,
    });
  }

  function startGame() {
    setScore(0);
    setTimeLeft(20);
    setIsPlaying(true);
    moveBook();
  }

  function catchBook() {
    if (!isPlaying) return;

    setScore(score + 1);
    moveBook();
  }

  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft === 0) {
      setIsPlaying(false);
      return;
    }

    const countdown = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(countdown);
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (!isPlaying) return;

    const moveInterval = setInterval(() => {
      moveBook();
    }, 1000);

    return () => clearInterval(moveInterval);
  }, [isPlaying]);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.label}>MINI-GAME</Text>
      <Text style={styles.title}>Pak de boeken</Text>

      <Text style={styles.description}>
        Tik zo snel mogelijk op het boek voordat de tijd op is.
      </Text>

      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Score</Text>
          <Text style={styles.infoNumber}>{score}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Tijd</Text>
          <Text style={styles.infoNumber}>{timeLeft}s</Text>
        </View>
      </View>

      <View style={styles.gameArea}>
        {isPlaying && (
          <Pressable
            style={[
              styles.bookButton,
              {
                top: bookPosition.top,
                left: bookPosition.left,
              },
            ]}
            onPress={catchBook}
          >
            <Text style={styles.book}>📚</Text>
          </Pressable>
        )}
      </View>

      {isPlaying ? (
        <Text style={styles.status}>Vang zoveel mogelijk boeken!</Text>
      ) : timeLeft === 0 ? (
        <Text style={styles.status}>Game over! Je score is {score}.</Text>
      ) : (
        <Text style={styles.status}>Druk op start om te spelen.</Text>
      )}

      <View style={styles.buttonWrapper}>
        <Button title="Start / Herstart" onPress={startGame} color="#95C23D" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    color: "#95C23D",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 12,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },

  infoRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },

  infoBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    minWidth: 110,
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 8,
    fontWeight: "bold",
  },

  infoNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111111",
  },

  gameArea: {
    width: "100%",
    height: 350,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginBottom: 24,
    position: "relative",
    overflow: "hidden",
  },

  bookButton: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EFF7DF",
    justifyContent: "center",
    alignItems: "center",
  },

  book: {
    fontSize: 40,
  },

  status: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 24,
    textAlign: "center",
  },

  buttonWrapper: {
    width: "80%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 40,
  },
});
