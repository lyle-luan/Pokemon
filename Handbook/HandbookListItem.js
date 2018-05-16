import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import I18n from '../i18n/i18n';
import {TypesView} from './TypesView';
import Pokemons from '../PokemonData/Pokemons.json';

export class HandbookListItem extends React.Component {
  constructor(props) {
    super(props);

     let pokemon = Pokemons[this.props.pokemonID];

     let hp = pokemon.race_value.hp;
     let attack = pokemon.race_value.attack;
     let defense = pokemon.race_value.defense;
     let sp_atk = pokemon.race_value.sp_atk;
     let sp_def = pokemon.race_value.sp_def;
     let speed = pokemon.race_value.speed;
     let raceValue = hp+attack+defense+sp_atk+sp_def+speed;

     pokemon.raceValue = raceValue;

    this.state = {pokemon: pokemon};
  }

   showPokemonDetail = () => {
     this.props.handler(this.state.pokemon);
   };

  render () {
    let pokemon = this.state.pokemon;

    return (
      <TouchableHighlight style={{flex:1}} onPress={this.showPokemonDetail}>
        <View style={{flex:1, flexDirection:'row'}}>
          <Image source={{uri: pokemon.image}} style={{width: 90, height: 90}} />
          <View style={{flex:1, flexDirection:'column', justifyContent: 'center'}}>
            <Text>{I18n.t(pokemon.name)}</Text>
            <Text>{I18n.t('race_value') + pokemon.raceValue}</Text>
            <TypesView types={pokemon.type}/>
          </View>
          <View style={{flex:1, flexDirection:'column',alignItems:'flex-end'}}>
            <Text>{'#'+pokemon.sn}</Text>
          </View>
        </View>
      </TouchableHighlight>
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
