import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity>
        <View style={{margin:10,padding :20 , backgroundColor:'grey',borderRadius:20,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,}}>

        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Cards;
