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
      <TouchableHighlight style={{flex:1, backgroundColor:'white'}} onPress={this.showPokemonDetail}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', height: 90, backgroundColor: 'white'}}>
          <Image source={{uri: pokemon.image}} style={{left:5, width: 80, height: 80}} />
          <View style={{flex:1, flexDirection:'column', justifyContent: 'space-between', left:10}}>
            <Text style={{color:'#353535', fontSize:20, fontWeight:'normal'}}>{I18n.t(pokemon.name)}</Text>
            <Text style={{color:'#888888', fontSize:15, fontWeight:'normal'}}>{I18n.t('race_value') + pokemon.raceValue}</Text>
            <TypesView style={{flex:1}} types={pokemon.type}/>
          </View>
          <View>
            <Text style={{color:'#888888', fontSize:15, fontWeight:'normal'}}>{'#'+pokemon.sn}</Text>
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
