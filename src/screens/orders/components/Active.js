import * as React from "react";

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'; 

const Active = ({navigation}) => {
  return(
    <SafeAreaView style={{backgroundColor: '#fff', height:'100%'}}>
      <TouchableHighlight underlayColor="#fff" onPress={ () => { navigation.navigate('OrderDetails', { itemId: '#SO-MLFX-0000451-19' }) }}>
            <View style={styles.list}>
                <View style={{width:'60%'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            resizeMode={'contain'}
                            source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3032007f7d36d8414c4e02ca1a4ff8f6'}}
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                        <Text style={styles.orderId}>#SO-MLFX-0000451-19</Text>
                    </View>
                    <Text style={styles.date}>04 Apr 2021, 16:00 - 17:00</Text>
                </View>
                <View style={{width:'40%', alignItems:'flex-end'}}>
                    <Text style={styles.orderStatus}>Allocating</Text>
                    <Text style={styles.price}>$51.75</Text>
                </View>
            </View>
        </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list:{
      flexDirection:'row',
      backgroundColor: 'white',
      margin: 10,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      paddingRight: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      borderRadius: 5
  },
  orderId:{
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 10
  },
  date:{
      fontSize: 14,
      color:'green'
  },
  orderStatus:{
      fontSize: 16,
      color:'#e91e63',
      marginBottom:10
  },
  price:{
      fontSize: 16,
      fontWeight: 'bold',
  }
});

export default Active;