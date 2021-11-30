import * as React from 'react';

import MoreNav from './More'
import MyThings from './MyThings'
import MyProfile from './MyProfile'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const More = (props) => {
  return (
    <Stack.Navigator
      initialRouteName='Index'
    >
      <Stack.Screen options={{ headerTitle: 'More', headerBackTitleVisible: false , headerLeft: false}} name='MoreNav' component={MoreNav} />
      <Stack.Screen 
        options={{ 
          headerTitle: 'My Things', 
          headerBackTitleVisible: false, 
          headerTintColor: '#e91e63', 
          headerTitleStyle:{ 
            color: 'black' 
          },
        }} name='MyThings' component={MyThings} />
      <Stack.Screen 
        options={{ 
          headerTitle: 'My Profile', 
          headerBackTitleVisible: false, 
          headerTintColor: '#e91e63', 
          headerTitleStyle:{ 
            color: 'black' 
          },
        }} name='MyProfile' component={MyProfile} />
    </Stack.Navigator>
  );
};