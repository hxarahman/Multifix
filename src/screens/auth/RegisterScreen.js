import * as React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import { URL } from '../../api';
import { useAuthorization } from '../../authProvider/AuthProvider';

import {styles} from './style';
import { GRADIENT } from '../../constants/themes';

const RegisterScreen = ({ navigation }) => {

  const { signIn } = useAuthorization();

  const [isLoading, setLoading] = React.useState(false);

  const [fullName, onChangeName] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailAddress, onChangeEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, onChangePass] = React.useState('');
  const [passError, setPassError] = React.useState('');
  const [confirmPassword, onChangeConfirmPass] = React.useState('');


  const handleRegister = async () => {
    try {
      const response = await fetch(URL + 'register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: emailAddress,
          password: password,
          password_confirmation: confirmPassword,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.errors) {
        setNameError(json.errors.name);
        setEmailError(json.errors.email);
        setPassError(json.errors.password);
      } else if (json.user) {
        let token = JSON.stringify(json.token);
        signIn(token);
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
        <Text
          style={styles.cardHeader}>
          REGISTER NEW ACCOUNT
        </Text>
        <Animatable.View
          animation="fadeInUp"
          duration={1500}
          style={styles.card}>
          <View style={{ width: '80%' }}>
            <Text style={styles.label}>
              Full Name
            </Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={fullName}
            keyboardType="default"
            textContentType="name"
            autoComplete="name"
            returnKeyType="next"
          />
          <View style={{ width: '80%' }}>
            <Text style={nameError === '' ? null : styles.errors}>
              {nameError}
            </Text>
          </View>

          <View style={{ width: '80%' }}>
            <Text style={styles.label}>
              Email Address
            </Text>
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
            <Text style={emailError === '' ? null : styles.errors}>
              {emailError}
            </Text>
          </View>

          <View style={{ width: '80%' }}>
            <Text style={styles.label}>
              Password
            </Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            value={password}
            keyboardType="default"
            textContentType="password"
            autoComplete="password"
            returnKeyType="done"
          />
          <View style={{ width: '80%' }}>
            <Text style={styles.errors}></Text>
          </View>

          <View style={{ width: '80%' }}>
            <Text style={styles.label}>
              Confirm Password
            </Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirmPass}
            value={confirmPassword}
            keyboardType="default"
            textContentType="password"
            autoComplete="password"
            returnKeyType="done"
          />
          <View style={{ width: '80%' }}>
            <Text style={passError === '' ? null : styles.errors}>
              {passError}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btnLarge}
            onPress={() => {
              setLoading(true);
              handleRegister();
            }}>
            {isLoading === true ? (
              <ActivityIndicator size="large" color="#000" />
            ) : (
              <>
                <Text style={styles.btnLargeTxt}>Register</Text>
                <Icon name="login" />
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <Text style={styles.link}>Go Back</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      </LinearGradient>
      </KeyboardAwareScrollView>
    );
  
};

export default RegisterScreen;