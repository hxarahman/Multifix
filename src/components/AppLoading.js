import * as React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    ActivityIndicator 
} from "react-native";

const styles = StyleSheet.create({
  loadingScreen: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.3
  },
  loadingScreenText: {
    color: '#FFFFFF',
    fontSize: 27,
    fontFamily: 'Poppins-SemiBold',
  },
});

const AppLoading = (props) => {
  return (
    <>
      <View style={styles.loadingScreen}>
        <Text style={styles.loadingScreenText}>Loading...</Text>
        <ActivityIndicator size="large" color="#FFFF" />
      </View>
      {props.children}
    </>
  );
};

export default AppLoading;
