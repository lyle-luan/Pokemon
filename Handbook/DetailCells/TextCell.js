import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';

export class TextCell extends React.Component {
  render () {
    let title = this.props.title;
    let detail = this.props.detail;
    return (
      <View style={styles.container}>
        <View style={styles.cellContainer}>
          <Text style={styles.title}>{I18n.t(title)}</Text>
          <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
            <Text style={styles.detail}>{I18n.t(detail, {defaultValue: detail})}</Text>
          </View>
        </View>
        <View style={{flex:1, height:1, backgroundColor: '#E9E9E9'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    height: 44,
  },
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    backgroundColor: 'white',
  },
  title: {
    color:'#353535',
    fontSize:20,
    fontWeight:'normal',
  },
  detail: {
    color:'#353535',
    fontSize:20,
    fontWeight:'100'
  },
});
