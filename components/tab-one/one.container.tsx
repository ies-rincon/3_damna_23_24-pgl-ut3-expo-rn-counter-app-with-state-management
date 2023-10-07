import React from "react";
import TabOneView from "./one.view";
import { useCounter } from "../../context/CounterContext";
import { useLanguageApp } from "../../context/LanguageAppContext";

const TabOneContainer: React.FC<TabOneContainerProps> = ({ color }) => {
  const { clickCounter } = useCounter();
  const { languageApp } = useLanguageApp();
  const labelClick = clickCounter === 1 ? "Click" : "Clicks";
  const props = {
    clickCounter,
    color,
    labelClick,
    languageApp,
  };
  return <TabOneView {...props} />;
};

export default TabOneContainer;
