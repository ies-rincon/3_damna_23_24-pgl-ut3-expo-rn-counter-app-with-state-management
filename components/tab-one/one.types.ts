interface TabOneContainerProps {
  color: string;
}
interface TabOneViewProps extends TabOneContainerProps {
  clickCounter: CounterContextType["clickCounter"];
  labelClick: string;
  languageApp: LanguageAppContextType["languageApp"];
}
interface CustomButtonProps {
  icon: string;
}
