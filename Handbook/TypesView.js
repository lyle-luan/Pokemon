import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../i18n/i18n';

class TypeView extends React.Component {
    render () {
      let type = this.props.type;
      let name = I18n.t(type);
      let typeStyle = styles[type];
      let textBGStyle = [typeStyle, styles.textBG];
      return (
        <View style={styles.container}>
          <View style={textBGStyle}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      );
    }
}

export class TypesView extends React.Component {
  render () {
    let types = this.props.types;
    return (
      <View style={{flexDirection:'row'}}>
        {types.map((type)=>(
          <TypeView type={type} />
        ))}
      </View>
    );
  }
}

// display: inline-block;
//     box-sizing: border-box;
//     box-shadow: 0 0 1px 1px #fff inset;
//     line-height: 16px;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor:'#656557',
    borderStyle:'solid',
    backgroundColor: 'white',
    width: 72,
    height: 20,
  },
  textBG: {
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0,
    width: 69,
    height: 17,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textShadowOffset:{width:0.5, height:0.5},
    textShadowColor:'#656565',
    textShadowRadius:2,
    textAlign: 'center',
  },
  grass: {
    backgroundColor: '#77CC55',
  },
  poison: {
    backgroundColor: 'purple',
  },
  fire: {
    backgroundColor: 'red',
  },
})
