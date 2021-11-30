import * as React from 'react';

import {
  SafeAreaView, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  View,
  Touchable,
} from 'react-native';

const MyThings = (props) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height:'100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>Coming Soon!</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyThings;