import * as React from 'react';

import {
    AppRegistry,
    View,
    TouchableHighlight,
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

const Ionicons = Icon;

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.state = {
            backgroundColor: '#dcdcdc',
        };
    }

    onClick() {
        this.setState({ backgroundColor: this.state.backgroundColor === '#dcdcdc' ? '#e91e63' : '#dcdcdc' });
    }

    render() {
        return (
            <TouchableHighlight
              underlayColor={'#fff'}
              onPress={this.onClick}
            >
                <View style={[
                        { backgroundColor: this.state.backgroundColor, width: 20, height: 20, borderRadius: 25,
                          justifyContent: 'center',
                          alignItems: 'center'
                        },
                    ]}>
                    <Ionicons name="checkmark-outline" color={'#fff'}/>
                </View>
            </TouchableHighlight>
        );
    }
}

AppRegistry.registerComponent("RandomBackground", () => CheckBox);