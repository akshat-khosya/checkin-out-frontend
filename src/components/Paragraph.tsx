import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Paragraph({children,...props}:{children:React.ReactNode}) {
  return <Text style={styles.text} {...props}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
});