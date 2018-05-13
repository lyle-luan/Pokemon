import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';
import {TypesView} from './TypesView';

export class HandbookListItem extends React.Component {
  render () {
     let pokemon = this.props.pokemon;

     let name = this.props.pokemonID;
     let id = '#'+this.props.pokemonID.split('_')[0].substring(1);

     let hp = pokemon.race_value.hp;
     let attack = pokemon.race_value.attack;
     let defense = pokemon.race_value.defense;
     let sp_atk = pokemon.race_value.sp_atk;
     let sp_def = pokemon.race_value.sp_def;
     let speed = pokemon.race_value.speed;
     let raceValue = hp+attack+defense+sp_atk+sp_def+speed;

    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <Image source={{uri: this.props.pokemonID}} style={{width: 90, height: 90}} />
        <View style={{flex:1, flexDirection:'column', justifyContent: 'center'}}>
          <Text>{I18n.t(this.props.pokemonID)}</Text>
          <Text>{I18n.t('race_value') + raceValue}</Text>
          <TypesView types={pokemon.type}/>
        </View>
        <View style={{flex:1, flexDirection:'column',alignItems:'flex-end'}}>
          <Text>{id}</Text>
        </View>
      </View>
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
