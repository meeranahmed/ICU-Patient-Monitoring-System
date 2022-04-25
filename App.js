
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/stackNavigator";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  
  );
}
export default App;