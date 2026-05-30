import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import StudyFinderScreen from "./screens/StudyFinderScreen";
import StudyDetailsScreen from "./screens/StudyDetailsScreen";
import CampusesScreen from "./screens/CampusesScreen";
import CampusDetailsScreen from "./screens/CampusDetailsScreen";
import NewsScreen from "./screens/NewsScreen";
import NewsDetailsScreen from "./screens/NewsDetailsScreen";
import GameScreen from "./screens/GameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StudyFinder" component={StudyFinderScreen} />
        <Stack.Screen name="StudyDetails" component={StudyDetailsScreen} />
        <Stack.Screen name="Campuses" component={CampusesScreen} />
        <Stack.Screen name="CampusDetails" component={CampusDetailsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
