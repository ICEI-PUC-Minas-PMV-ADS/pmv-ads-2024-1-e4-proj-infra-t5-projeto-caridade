import { View } from "react-native";
import { ThemedText } from "../ThemedText/ThemedText";

export function FallbackComponent() {
  return (
    <View>
      <ThemedText>
        Ooops.... Something went wrong. Please reload your app
      </ThemedText>
    </View>
  );
}
