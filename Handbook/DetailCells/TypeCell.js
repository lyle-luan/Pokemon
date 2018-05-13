import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';
import {TypesView} from '../TypesView'

export class TypeCell extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>{I18n.t('type')}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
          <TypesView types={this.props.types}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
