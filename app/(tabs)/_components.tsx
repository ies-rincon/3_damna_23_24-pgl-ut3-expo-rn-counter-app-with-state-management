import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity, View } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;

export const HeaderRightTabs = ({
  color,
  onChangeLanguage,
  onRefreshCounter,
}: {
  color: string;
  onChangeLanguage: LanguageAppContextType["onChangeLanguageApp"];
  onRefreshCounter: CounterContextType["handleRefresh"];
}) => (
  <View style={{ flexDirection: "row" }}>
    <TouchableOpacity onPress={onChangeLanguage} style={{ marginRight: 15 }}>
      <FontAwesome name="language" size={25} color={color} />
    </TouchableOpacity>
    <TouchableOpacity onPress={onRefreshCounter} style={{ marginRight: 15 }}>
      <FontAwesome name="refresh" size={25} color={color} />
    </TouchableOpacity>
  </View>
);
