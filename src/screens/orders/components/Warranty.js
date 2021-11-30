import * as React from "react";

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const Ionicons = Icon;

const Warranty = ({navigation}) => {
  return(
    <SafeAreaView 
      style={{ backgroundColor: '#fff', height:'100%' }}
    >
      <View 
        style={{
          flex:1, 
          justifyContent:'center', 
          alignItems:'center'
        }}
      >
        <Ionicons 
          size={100} 
          color={'#000'} 
          style={{opacity:0.2, marginBottom:10}} 
          name='receipt-outline' 
        />
        <Text 
          style={{ fontSize:16, lineHeight:25 }}
        >No recent orders found.</Text>
        <TouchableOpacity 
          onPress={() => { navigation.navigate('Catalogue'); }}
        >
          <View 
            style={{
              flexDirection:'row', 
              justifyContent: 'center',
              alignItems:'center'
            }}
          >
            <Text 
              style={{ color: '#e91e63', fontSize: 16 }}
            >Browse our catalogue</Text>
            <Ionicons 
              size={16} 
              style={{ color: '#e91e63' }} 
              name='chevron-forward-outline' 
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Warranty;