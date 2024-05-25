import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ colors }) => ({
  view: {
    backgroundColor: colors.background,
  },
}));
