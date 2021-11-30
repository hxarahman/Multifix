import * as React from 'react';

import { AuthProvider } from './src/authProvider/AuthProvider';
import { RootNavigation } from './src/navigations';

import { enableScreens } from 'react-native-screens';
enableScreens();


export default App = () => {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}