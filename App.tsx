import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import Button from './src/components/Button';
import TextInput from './src/components/TextInput';
import { theme } from './src/core/theme';
export default function App() {
  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button mode="contained" >Click Me</Button>
        <TextInput label="Email" /> 
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
