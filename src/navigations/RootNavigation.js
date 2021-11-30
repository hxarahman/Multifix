import * as React from 'react';

import {
  StatusBar,
  Platform,
} from 'react-native';

import { BottomTab } from '../navigations';
import { 
  SpalshScreen,
  RegisterScreen, 
  LoginScreen, 
  ForgotPassword 
} from '../screens/auth'
import OrderDetails from '../screens/orders/OrderDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthorization } from '../authProvider/AuthProvider';

const Stack = createStackNavigator();

const RootNavigation = (props) => {

  const { authToken } = useAuthorization();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <Stack.Navigator initialRouteName='SpalshScreen'>
        {authToken != null ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={BottomTab}
          />
        ):(
          <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="SpalshScreen"
            component={SpalshScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="RegisterScreen"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={({ route }) => ({
              headerTitle: route.params.itemId,
              headerBackTitle: 'Back',
            })}
            name="OrderDetails"
            component={OrderDetails}
          />
          </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;