import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../i18n/i18n';

class TypeView extends React.Component {
    render () {
      let type = this.props.type;
      let name = I18n.t(type);
      let style = styles[type];

      return (
        <View style={style}>
          <Text style={styles.text}>{name}</Text>
        </View>
      );
    }
}

export class TypesView extends React.Component {
  render () {
    let types = this.props.types;
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        {types.map((type)=>(
          <TypeView type={type} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  grass: {
    backgroundColor: 'green',
  },
  poison: {
    backgroundColor: 'purple',
  },
  fire: {
    backgroundColor: 'red',
  },
})
