import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';

export class TextCell extends React.Component {
  render () {
    let title = this.props.title;
    let detail = this.props.detail;
    return (
      <View style={styles.container}>
        <Text>{I18n.t(title)}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
          <Text>{I18n.t(detail, {defaultValue: detail})}</Text>
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
