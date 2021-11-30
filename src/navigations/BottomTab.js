import * as React from 'react';

import { View, Text } from 'react-native';

import { Home } from '../screens/home';
import { Cart } from '../screens/cart';
import { Orders } from '../screens/orders';
import { Catalogue } from '../screens/catalogue';
import { More } from '../screens/more';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
        {
          if (route.name === 'Home') {
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <Icon
                name={focused ? 'cart' : 'cart-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Orders') {
            return (
              <Icon
                name={focused ? 'receipt' : 'receipt-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Catalogue') {
            return (
              <Icon
                name={focused ? 'list' : 'list-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'More') {
            return (
              <Icon
                name={
                  focused
                    ? 'ellipsis-horizontal'
                    : 'ellipsis-horizontal-outline'
                }
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {},
      })}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ headerTitle: 'Service Requests', tabBarBadge: 3 }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{ headerTitle: 'My Orders' }}
        name="Orders"
        component={Orders}
      />
      <Tab.Screen
        options={{ headerTitle: 'Service Catalogue' }}
        name="Catalogue"
        component={Catalogue}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;