import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ spacing }) => ({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  content: {
    marginTop: spacing.sm,
    marginLeft: spacing.sm,
  },
}));
