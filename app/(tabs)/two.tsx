import { Text, View } from "../../components/Themed";
import { useCounter } from "../../context/CounterContext";
import { styles } from "./_tabStyles";
export default function TabTwoScreen() {
  const { clickCounter } = useCounter();
  const labelClick = clickCounter === 1 ? "Click" : "Clicks";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{clickCounter}</Text>
      <Text style={styles.title}>{labelClick}</Text>
    </View>
  );
}
