import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';

export class HandbookListItem extends React.Component {
  render () {

    let pokemonPath = '../PokemonData/Pokemons/'+this.props.pokemonID+'.json';
    let pokemonData = require('../PokemonData/Pokemons/000001.json');

    return (


      <View>

        <Text>{pokemonData.name}</Text>
      </View>

        //通过 state/props 来初始化控件
        //引入图片
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sectionHeader: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
// })
