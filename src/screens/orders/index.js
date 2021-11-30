import * as React from 'react';

import { TopTabs } from '../../navigations/TopTabs';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Orders = (props) => {
  return (
    <TopTabs />
  );
};