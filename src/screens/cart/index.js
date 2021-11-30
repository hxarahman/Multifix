import React, { useState } from "react";

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  Modal,
  Pressable,
} from 'react-native';

import CheckBox from '../../components/CheckBox';

import { SwipeListView } from 'react-native-swipe-list-view';

import { images } from '../../constants';

import Icon from 'react-native-vector-icons/Ionicons';
const Ionicons = Icon;

import { styles } from "./styles";

export const Cart = ({ navigation }) => {

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Pressable onPress={() => setModalVisible(true)}>
              <Ionicons name='help-circle-outline' size={30} style={{ marginRight: 15 }} />
          </Pressable>
        ),
      });
    }, [navigation])

    const [modalVisible, setModalVisible] = useState(false);
    
    const [listData, setListData] = useState(
      Array(5)
          .fill('')
          .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );
        
    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

  return(
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={styles.modal}>
                    <Pressable
                      style={{ width: '100%', alignItems: 'flex-end' }}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Ionicons size={30} style={{ padding: 5 }} name='close-outline' />
                    </Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>How To Delete Cart items ?</Text>
                    <View style={{ padding: 20 }}>
                        <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 30}}>Swipe left to appear delete button.</Text>
                        <Image 
                            resizeMode='contain'
                            source={images.swipe}
                            style={{ width: '100%', height: 120}}
                        />
                    </View>
                </View>
            </View>
        </Modal>

        <View style={styles.container}>
            <SwipeListView
                data={listData}

                renderItem={ data => (
                    <TouchableHighlight
                        style={styles.rowFront}
                        underlayColor={'#AAA'}
                    >
                        <View>
                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                <Image
                                    resizeMode={'contain'}
                                    source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3032007f7d36d8414c4e02ca1a4ff8f6'}}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                                <Text style={{ marginLeft: 15, color: '#e91e63', fontWeight: '600'}}>HOME IMPROVEMENTS</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 10}}>
                                <CheckBox />
                                <Text style={{ marginLeft: 15, fontWeight: '600' }}>DF-00-003 - Disinfectant Fogging - 3 room flat or below 800 sq ft</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 35,  borderBottomColor: '#afafaf', borderBottomWidth: 0.5, paddingBottom: 10}}>
                                <View style={{ flexDirection: 'row'}}>
                                  <TouchableOpacity 
                                    style={{ borderWidth: 0.5, borderColor: '#afafaf', width: 20, height:20, alignItems: 'center', justifyContent: 'center'}}
                                    >
                                    <Text>-</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity 
                                    style={{ borderWidth: 0.5, borderColor: '#afafaf', width: 40, height:20, alignItems: 'center', justifyContent: 'center'}}
                                  >
                                  <Text>0</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity 
                                    style={{ borderWidth: 0.5, borderColor: '#afafaf', width: 20, height:20, alignItems: 'center', justifyContent: 'center'}}
                                    >
                                    <Text>+</Text>
                                  </TouchableOpacity>
                                </View>
                                <View style={{flex:1, alignItems: 'flex-end'}}>
                                  <Text style={{ fontWeight: '600', fontSize: 16}}>$815.00</Text>
                                </View>
                            </View>
                            <TouchableOpacity 
                              style={{ flexDirection: 'row', marginLeft: 35,  borderBottomColor: '#afafaf', borderBottomWidth: 0.5, paddingBottom: 15, paddingTop: 15}}
                            >
                              <Text style={{fontSize: 14, color: '#e91e63'}}>Edit Service Remark</Text>
                              <View style={{flex:1, alignItems: 'flex-end'}}>
                                <Ionicons size={18} color={'#e91e63'} name='chevron-forward-outline' />
                              </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>) }

                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnRight]}
                            onPress={() => {
                                Alert.alert(
                                    "Are you sure you want to delete ?",
                                    "You can still add them back via service catalogue.",
                                    [
                                      { text: "OK", onPress: () => deleteRow(rowMap, data.item.key) },
                                      {
                                        text: "Cancel",
                                        style: "cancel"
                                      },
                                    ]
                                );
                            }}
                        >
                            <Text style={styles.backTextWhite}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                  )}

                leftOpenValue={0}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                disableRightSwipe
            />
        </View>

        <View style={styles.checkoutContainer}>
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotal} >SUBTOTAL: $100.00</Text>
          </View>
          <View style={styles.checkout}>
            <Button
              title="Checkout"
              color="#fff"
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};