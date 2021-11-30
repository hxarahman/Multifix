import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Active, Warranty, Completed } from '../screens/orders/components';

const MaterialTopTab = createMaterialTopTabNavigator();

export const TopTabs = (props) => {
  return (
    <MaterialTopTab.Navigator
      initialRouteName='Active'
      screenOptions={{
        tabBarLabelStyle:{
          fontSize: 14,
        },
        tabBarIndicatorStyle:{
          backgroundColor: 'black',
        },
        tabBarStyle:{
          fontSize: 20,
          backgroundColor: '#f6f8fa',
          justifyContent: 'center',
          height: 60,
        }
      }}
    >
      <MaterialTopTab.Screen name="Active" component={Active} />
      <MaterialTopTab.Screen name="Warranty" component={Warranty} />
      <MaterialTopTab.Screen name="Completed" component={Completed} />
    </MaterialTopTab.Navigator>
  );
};
