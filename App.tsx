import './global.css';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen'; // 🔥 CHANGE THIS LINE ONLY
import { DefenderProvider } from 'pages/Scoreboard/contexts/DefenderContext';
import { PlayerQueueProvider } from './pages/Scoreboard/contexts/PlayerQueueContext';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <DefenderProvider>
          <PlayerQueueProvider>
            <View className="h-full w-full flex-1">
              <HomeScreen /> {/* 🔥 HomeScreen instead of Scorer */}
            </View>
          </PlayerQueueProvider>
        </DefenderProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}
