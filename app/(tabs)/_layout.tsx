import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { HeaderRightTabs, TabBarIcon } from "./_components";
import { useCounter } from "../../context/CounterContext";
import { useLanguageApp } from "../../context/LanguageAppContext";
import Colors from "../../constants/Colors";
import Languages from "../../constants/Languages";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { handleRefresh } = useCounter();
  const { languageApp, onChangeLanguageApp } = useLanguageApp();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: `${Languages[languageApp].tab} 1`,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <HeaderRightTabs
              color={Colors[colorScheme ?? "light"].text}
              onChangeLanguage={onChangeLanguageApp}
              onRefreshCounter={handleRefresh}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: `${Languages[languageApp].tab} 2`,
          tabBarIcon: ({ color }) => <TabBarIcon name="bus" color={color} />,
          headerRight: () => (
            <HeaderRightTabs
              color={Colors[colorScheme ?? "light"].text}
              onChangeLanguage={onChangeLanguageApp}
              onRefreshCounter={handleRefresh}
            />
          ),
        }}
      />
    </Tabs>
  );
}
