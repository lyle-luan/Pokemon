import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class TextCell extends React.Component {
  render () {
    let title = this.props.title;
    let detail = this.props.detail;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
          <Text>{detail}</Text>
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
