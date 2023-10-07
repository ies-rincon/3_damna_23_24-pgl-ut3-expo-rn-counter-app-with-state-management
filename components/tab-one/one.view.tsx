import React from "react";
import { View, Text } from "react-native";
import { styles } from "./one.styles";
import { CustomButton } from "./one.components";
import Languages from "../../constants/Languages";

const TabOneView: React.FC<TabOneViewProps> = ({
  color,
  clickCounter,
  labelClick,
  languageApp,
}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <View style={styles.content}>
      <Text style={styles.labelText}>{Languages[languageApp].counter}</Text>
      <Text style={styles.counterText}>{clickCounter}</Text>
      <Text style={styles.labelText}>{labelClick}</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <CustomButton icon="refresh" />
      <CustomButton icon="plus-one" />
      <CustomButton icon="exposure-minus-1" />
    </View>
  </View>
);

export default TabOneView;
