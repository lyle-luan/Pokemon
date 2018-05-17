import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';
import {TypesView} from '../TypesView'

export class TypeCell extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cellContainer}>
          <Text style={styles.title}>{I18n.t('type')}</Text>
          <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
            <TypesView types={this.props.types}/>
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
});
