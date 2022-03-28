import * as React from 'react';

import { 
  SafeAreaView, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  ScrollView,
  TextInput
} from 'react-native';
import TextTicker from 'react-native-text-ticker'
import { URL } from '../../api';
import { useAuthorization } from '../../authProvider/AuthProvider';

import Icon from 'react-native-vector-icons/Ionicons';
const Ionicons = Icon;

import { styles } from './styles';

export const Catalogue = ({ navigation }) => {

  const [listData, setListData] = React.useState(
    Array(10)
        .fill('')
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={1}>
          <Text
            style={{
              color:'#e91e63', 
              marginRight:10, 
              fontFamily: 'Nexa-Bold', 
              fontSize: 15}}
          >Help</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation])
 
  const { authToken } = useAuthorization();

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getCategories(JSON.parse(authToken));
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
        console.log(json.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor:'#fff', height: '100%'}}>
      <View style={{padding:5, height: 30}}>
        <TextInput style={{borderColor:'black', borderWidth:1, borderRadius:5}}/>
        <Ionicons size={15} name={'search-outline'} />
      </View>
      <View style={styles.viewContainer}>
          <View style={styles.leftView}>
        <ScrollView>
          {data.length
              ? data.map((item, index) => (
            <TouchableOpacity 
              key={item.id}
              activeOpacity={1}
              style={styles.categories}>
                <Image
                  style={styles.icons}
                  resizeMode={'contain'}
                  source={{ uri: item.image }}
                />
                <View style={{width: '100%'}}>
                {item.title.length > 11 ? (
                  <TextTicker
                    style={{ fontSize: 12 }}
                    duration={3000}
                    loop
                    repeatSpacer={5}
                  >
                    {item.title}
                  </TextTicker>
                ) : (
                  <Text
                    numberOfLines={1}
                    style={{ fontSize: 12, textAlign: 'center' }}
                  >
                    {item.title}
                  </Text>
                )}
                </View>
              </TouchableOpacity>
              ))
              : null}
          </ScrollView>
        </View>
        <View style={styles.rightView}>
          <ScrollView>
          {listData.length
              ? listData.map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={1}>
              <View style={styles.listView}>
                <Text numberOfLines={1} style={styles.listText}>List onesdwedasdas#</Text>
                <View style={styles.listIconView}>
                  <Ionicons style={styles.listIcons} name={'chevron-forward-outline'}/>
                </View>
              </View>    
            </TouchableOpacity>
            ))
            : null}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};