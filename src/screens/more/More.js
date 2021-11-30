import * as React from 'react';

import {
  SafeAreaView, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  View,
  Touchable,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const Ionicons = Icon;

const MoreNav = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor:'#fff', height: '100%'}}>
      <TouchableOpacity style={styles.button} onPress={ () => { navigation.navigate('MyThings') } }>
        <Ionicons name={'folder-outline'} style={styles.icon}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>My Things</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={ () => { navigation.navigate('MyProfile') } }>
        <Ionicons name={'person-outline'} style={styles.icon}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>My Profile</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button:{
    flexDirection:'row',
    width:'100%',
    paddingLeft: 10
  },
  icon:{
    fontSize: 23,
    paddingTop: 15,
    paddingBottom: 15
  },
  textContainer:{
    width: '100%',
    marginLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa'
  },
  text:{
    fontSize: 18,
  },
});

export default MoreNav;