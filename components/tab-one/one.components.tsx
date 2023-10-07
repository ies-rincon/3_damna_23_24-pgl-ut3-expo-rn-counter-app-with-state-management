import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-elements";
import { styles } from "./one.styles";
import { useCounter } from "../../context/CounterContext";

export const CustomButton: React.FC<CustomButtonProps> = ({ icon }) => {
  const { handleIncrement, handleDecrement, handleRefresh, clickCounter } =
    useCounter(); // Usa el contexto

  const onPressHandler = () => {
    if (icon === "refresh") {
      handleRefresh();
    } else if (icon === "plus-one") {
      handleIncrement();
    } else if (icon === "exposure-minus-1") {
      handleDecrement();
    }
  };
  return (
    <View style={styles.buttonContainer}>
      <FAB
        disabled={icon === "exposure-minus-1" && clickCounter === 0}
        icon={{ name: icon, color: "white" }}
        onPress={onPressHandler}
      />
    </View>
  );
};
