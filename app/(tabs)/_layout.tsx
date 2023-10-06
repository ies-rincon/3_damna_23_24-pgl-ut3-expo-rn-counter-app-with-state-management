import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { TouchableOpacity, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { useCounter } from "../../context/CounterContext";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { handleRefresh, clickCounter } = useCounter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: `Page 1: ${clickCounter}`,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={handleRefresh}
              style={{ marginRight: 15 }}
            >
              <FontAwesome
                name="refresh"
                size={25}
                color={Colors[colorScheme ?? "light"].text}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Page 2",
          tabBarIcon: ({ color }) => <TabBarIcon name="bus" color={color} />,
        }}
      />
    </Tabs>
  );
}
