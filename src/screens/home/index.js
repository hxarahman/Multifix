import * as React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
} from 'react-native';

import { URL } from '../../api';

import Icon from 'react-native-vector-icons/Ionicons';

const Ionicons = Icon;

//import Toast from 'react-native-toast-message';
import { useAuthorization } from '../../authProvider/AuthProvider';
import { styles } from './styles';

const images = [
  'https://gofixapp.s3.amazonaws.com/production/promotional_banners/images/4_%20partition/original/Win_Back_Banner_2021_Promo.jpg',
  'https://gofixapp.s3.amazonaws.com/production/promotional_banners/images/2_%20partition/original/Web_Banner_28_-_Huttons.jpg',
  'https://gofixapp.s3.amazonaws.com/production/promotional_banners/images/3_%20partition/original/Win_Back_Banner_2021-07.jpg',
];

export const Home = ({ navigation }) => {

  const { authToken } = useAuthorization();

  const [imgActive, setImgActive] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    getCategories(JSON.parse(authToken));
    //verifyEmail();
  }, []);
  
  const getCategories = async (authToken) => {
    try {
      const response = await fetch(URL + 'home', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + authToken,
        },
      });
      const json = await response.json();
      setData(json);
      if (json.message) {
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCategories(JSON.parse(authToken));
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.appNameContainer}>
            <Text style={styles.appName}>Multifix</Text>
        </View>
        <View style={styles.searchBtnContainer}>
          <TouchableHighlight
            underlayColor="#fff"
            style={styles.searchBtn}
            onPress={() => {
              navigation.navigate('Catalogue');
            }}>
            <View style={styles.search}>
                <Ionicons size={15} name={'search-outline'} />
                <Text style={styles.search_text}>What needs fixing ?</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image key={e} style={styles.wrap} source={{ uri: e }} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>

        <View style={styles.catBoxContainer}>
          <View style={styles.catBox}>
            {data.length
              ? data.map((item, index) => (
                  <TouchableOpacity key={item.id} style={styles.catBoxButtons}>
                    <Image
                      style={styles.catBoxIcons}
                      resizeMode={'contain'}
                      source={{ uri: item.image }}
                    />
                    <Text style={{fontSize:12}} numberOfLines={1}>{item.title}</Text>
                  </TouchableOpacity>
                ))
              : null}
            <TouchableOpacity style={styles.catBoxFooter}>
              <Text style={styles.catBoxFooterText}>
                Not Sure? Let us help you find out!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
