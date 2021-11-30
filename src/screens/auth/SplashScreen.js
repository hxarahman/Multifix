import * as React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  Icon,
  SocialIcon,
} from 'react-native-elements';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {images} from '../../constants';

import {styles} from './style';

import { GRADIENT } from '../../constants/themes';


const SpalshScreen = ({ navigation }) => {

  const exportData = async () => {
    AsyncStorage.getAllKeys().then((keys) =>
      AsyncStorage.multiGet(keys).then((data) => console.log(data))
    );
  };

  React.useEffect(() => {
    exportData();
  }, []);

    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardScrollView}>
      <LinearGradient colors={GRADIENT} style={styles.background}>
      <View style={styles.container}>
        <View
          style={styles.logoContainer}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            style={styles.logo}
            resizeMode="contain"
            source={images.logo}
          />
          <Text
            style={styles.logoText}>
            MULTIFIX
          </Text>
        </View>
        <Animatable.View
          animation="fadeInUp"
          duration={1500}
          style={styles.card}>
          <TouchableOpacity
            style={styles.btnLarge}
            onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.btnLargeTxt}>Login</Text>
            <Icon name="login" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>
              Don't have a Multifix Account ? Register
            </Text>
          </TouchableOpacity>
          <View style={styles.authBtns}>
            <TouchableOpacity activeOpacity={1}>
              <SocialIcon style={styles.facebook} type="facebook" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1}>
              <SocialIcon style={styles.google} type="google" />
            </TouchableOpacity>

            {Platform.OS === 'ios' ? (
              <TouchableOpacity activeOpacity={1}>
                <SocialIcon style={styles.apple} type="apple" />
              </TouchableOpacity>
            ) : null}
          </View>
        </Animatable.View>
      </View>
      </LinearGradient>
      </KeyboardAwareScrollView>
    );
};

export default SpalshScreen;
