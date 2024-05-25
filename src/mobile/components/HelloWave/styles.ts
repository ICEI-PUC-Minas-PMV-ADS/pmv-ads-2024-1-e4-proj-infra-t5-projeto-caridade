import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ spacing, fontSize }) => ({
  text: {
    fontSize: fontSize.xl,
    lineHeight: spacing.xl,
    marginTop: -spacing.sm,
  },
}));
