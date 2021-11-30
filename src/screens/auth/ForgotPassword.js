import * as React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import { URL } from '../../api';

import {styles} from './style';
import { GRADIENT } from '../../constants/themes';

const ForgotPassword = ({ navigation }) => {

  const [emailAddress, onChangeEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const handleResetPassword = async () => {
    try {
      const response = await fetch(URL+'reset-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailAddress,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.bool == true) {
        setMessage(json.status);
        setIsSent(true);
      } else if (json.bool == false) {
        setMessage(json.status);
      } else if (json.errors) {
        setMessage(json.errors.email);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardScrollView}>
      <LinearGradient colors={GRADIENT} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.cardHeader}>Forgot Password ?</Text>
        <Animatable.View
          animation="fadeInUp"
          duration={1500}
          style={styles.card}>
          {isSent === true ? (
            <>
            <View style={{ width: '80%' }}>
            <Text style={message === '' ? null : [styles.message,{color:'green'}]}>
              {message}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnLarge}
            onPress={() => navigation.goBack()}>
                <Text style={styles.btnLargeTxt}>Back To Login</Text>
          </TouchableOpacity>
          </>
          ):(
            <>
          <View style={{width:"80%"}}>
            <Text style={{ fontSize:15, fontFamily:"Nexa-Bold"}}>Email Address</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={emailAddress}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            returnKeyType="done"
          />
          <View style={{ width: '80%' }}>
            <Text style={message === '' ? null : styles.message}>
              {message}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnLarge}
            onPress={() => {
              setLoading(true);
              handleResetPassword();
            }}>
            {isLoading === true ? (
              <ActivityIndicator size="large" color="#000" />
            ) : (
              <>
                <Text style={styles.btnLargeTxt}>Submit</Text>
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
            <Text style={styles.link}>Go Back</Text>
          </TouchableOpacity>
            </>
              )}
        </Animatable.View>
      </View>
      </LinearGradient>
      </KeyboardAwareScrollView>
    );
};

export default ForgotPassword;
