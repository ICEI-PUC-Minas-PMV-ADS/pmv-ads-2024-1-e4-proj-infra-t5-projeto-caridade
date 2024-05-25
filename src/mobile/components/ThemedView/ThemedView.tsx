import { View, type ViewProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { styleSheet } from "./styles";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { styles } = useStyles(styleSheet);

  return <View style={[styles.view]} {...otherProps} />;
}
