import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProfilingScreen from './src/screens/ProfilingScreen';
import LanguageSettingsScreen from './src/screens/LanguageSettingsScreen';
import NewsDashboardScreen from './src/screens/NewsDashboardScreen';
import CommunityReelsScreen from './src/screens/CommunityReelsScreen';
import PremiumSubscriptionScreen from './src/screens/PremiumSubscriptionScreen';
import GemsRewardsScreen from './src/screens/GemsRewardsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Community') iconName = focused ? 'people' : 'people-outline';
          else if (route.name === 'Premium') iconName = focused ? 'star' : 'star-outline';
          else if (route.name === 'Rewards') iconName = focused ? 'gift' : 'gift-outline';
          return <Ionicons name={iconName} size={size + 2} color={color} />;
        },
        tabBarActiveTintColor: '#0EA5E9',  // Light Blue to match design
        tabBarInactiveTintColor: '#9CA3AF', // Gray
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F3F4F6',
          height: 65,
          paddingBottom: 10,
          paddingTop: 8,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' }
      })}
    >
      <Tab.Screen name="Home" component={NewsDashboardScreen} />
      <Tab.Screen name="Community" component={CommunityReelsScreen} />
      <Tab.Screen name="Premium" component={PremiumSubscriptionScreen} />
      <Tab.Screen name="Rewards" component={GemsRewardsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#F9FAFB' } }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profiling" component={ProfilingScreen} />
        <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{ presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
