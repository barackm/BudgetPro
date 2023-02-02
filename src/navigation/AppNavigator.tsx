import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import { colors, metrics } from '../theme';
import BottomTabButton from '../components/BottomTabButton';
import HomeIcon from '../components/svgs/HomeIcon';
import WalletIcon from '../components/svgs/WalletIcon';
import GraphIcon from '../components/svgs/GraphIcon';
import UserIcon from '../components/svgs/UserIcon';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        // increase the height of the tab bar
        tabBarStyle: { height: metrics.moderateScale(90) },
        tabBarLabelStyle: { display: 'none' },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <HomeIcon size={size} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <WalletIcon color={color} focused={focused} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Budget"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabButton color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Investments"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <GraphIcon size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <UserIcon size={size} color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
