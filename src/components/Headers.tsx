import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";

export default function Header({children,...props}:{children:React.ReactNode}) {
  return <Text style={styles.header} {...props}> {children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color:theme.colors.primary,
    fontWeight:'bold',
    paddingVertical:12,
  },
});