import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';
import I18n from '../../i18n/i18n';

export class TextTouchableCell extends React.Component {
  render () {
    let title = this.props.title;
    let details = this.props.details;

    return (
      <View style={styles.container}>
        <Text>{I18n.t(title)}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
          {
            Object.entries(details).map(([detail, handler]) => <Button title={I18n.t(detail, {defaultValue: detail})} onPress={handler}/>)
          }
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
