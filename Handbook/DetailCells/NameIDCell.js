import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';

export class NameIDCell extends React.Component {
  render () {
    let name = this.props.name;
    let id = this.props.id;
    return (
      <View style={styles.container}>
        <Text>{I18n.t(name)}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
          <Text>{id}</Text>
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
