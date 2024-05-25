import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ fontSize, spacing, colors }) => ({
  default: {
    fontSize: fontSize.md,
    lineHeight: spacing.lg,
  },
  defaultSemiBold: {
    fontSize: fontSize.md,
    lineHeight: spacing.lg,
    fontWeight: "600",
  },
  title: {
    fontSize: fontSize.xl,
    fontWeight: "bold",
    lineHeight: spacing.xl,
  },
  subtitle: {
    fontSize: fontSize.lg,
    fontWeight: "bold",
  },
  link: {
    lineHeight: spacing.xl,
    fontSize: fontSize.md,
    color: colors.text,
  },
}));
