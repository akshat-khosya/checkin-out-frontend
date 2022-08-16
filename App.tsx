import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import Button from './src/components/Button';
import Header from './src/components/Headers';
import Logo from './src/components/Logo';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme';
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScrren';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='StartScreen'
      screenOptions={{
        headerShown:false
      }}
      >
      
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
      </NavigationContainer>
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
