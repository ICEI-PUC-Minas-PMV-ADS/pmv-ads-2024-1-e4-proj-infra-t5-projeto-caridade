import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ spacing }) => ({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: spacing.xl,
    gap: spacing.md,
    overflow: "hidden",
  },
}));
