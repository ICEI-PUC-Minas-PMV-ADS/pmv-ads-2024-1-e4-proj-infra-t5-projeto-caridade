import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { spacing } from "./spacing";

export const darkTheme = {
  colors: { ...colors.dark },
  fontSize,
  spacing,
} as const;
