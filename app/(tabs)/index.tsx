import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { FAB } from "react-native-elements";
import { useCounter } from "../../context/CounterContext";

const Page1: React.FC<{ color: string }> = ({ color }) => {
  const { clickCounter } = useCounter();

  const labelClick = clickCounter === 1 ? "Click" : "Clicks";

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.content}>
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
};

interface CustomButtonProps {
  icon: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  refreshButton: {
    backgroundColor: "transparent",
  },
  content: {
    alignItems: "center",
  },
  counterText: {
    fontSize: 160,
    fontWeight: "100",
  },
  labelText: {
    fontSize: 25,
  },
  buttonsContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 5,
  },
});

export default Page1;
