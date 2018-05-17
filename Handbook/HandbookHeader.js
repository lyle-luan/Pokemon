import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export class HandbookHeader extends React.Component {
  render () {
    let title = this.props.title;
    console.log('title: '+ title);
    return (
      <View style={{height: 50, backgroundColor: 'white', justifyContent:'center'}}>
        <Text style={{left: 15, color:'353535', fontSize:19, fontWeight:'normal'}}>{title}</Text>
      </View>
    );
  }
}
