interface Action {
  label: string;
  onPress: () => void;
  icon: "sun" | "moon" | "log-out";
}
