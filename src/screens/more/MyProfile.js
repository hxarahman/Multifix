import * as React from 'react';

import {
  SafeAreaView, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const Ionicons = Icon;

const MyProfile = (props) => {

  const [fullName, setFullName] = React.useState('Abdul Rahman')
  const [email, setEmail] = React.useState('fz050799@gmail.com')
  const [image, setImage] = React.useState('https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/10d6a232729d3a4b722359614706d057')

  const getAuthinfo = async () => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(()=> {
    //getAuthinfo();
  },[]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height:'100%'}}>
        <ScrollView>
        <View style={styles.profile}>
            <View style={{ width: '22%'}}>
                <Image
                    resizeMode="contain"
                    source={{uri: image}}
                    style={{width: 70,height:70, borderRadius: 50}}
                />
            </View>
            <View style={{ width: '78%'}}>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit profile</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>My Addresses</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Change Password</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Notification Setting</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Promotion Setting</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Terms of Use</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>privacy Policy</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={18} style={styles.arrow} name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={ styles.logOut } >Logout</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons size={20} color={'#e91e63'} style={styles.arrow} name='log-out-outline' />
                </View>
            </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20, textAlign: 'center', color: '#aaaaaa' }} >Multifix 1.0.0</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    profile:{
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 20,
        height: 100
    },
    name:{
        fontSize: 20,
        fontWeight: '500',
    },
    email:{
        fontSize: 16
    },
    buttonContainer:{
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 0
    },
    button:{
        height: 50,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15
    },
    buttonText:{
        fontSize: 16
    },
    logOut:{
        fontSize: 16,
        color: '#e91e63',
    },
    arrowContainer:{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
    arrow:{ marginRight: 8 }
});

export default MyProfile;