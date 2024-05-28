import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { spacing } from "./spacing";

export const lightTheme = {
  colors: { ...colors.light },
  fontSize,
  spacing,
} as const;
