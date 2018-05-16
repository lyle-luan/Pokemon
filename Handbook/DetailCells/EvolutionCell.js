import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../../i18n/i18n';
import Evolution from '../../PokemonData/Evolution.json';
import Pokemons from '../../PokemonData/Pokemons.json';

export class EvolutionCell extends React.Component {
  render () {
    let pokemonID = this.props.pokemonID;
    let evolutionAarry = Evolution[pokemonID];

    let pokemon = Pokemons[pokemonID];

    return (
      <View style={styles.container}>
        <Image source={{uri: pokemon.image}} style={{width: 180, height: 180}} />
        <Text>{I18n.t(pokemon.name)}</Text>

        {
          evolutionAarry.map((evolution)=>(
            <View style={{flex:1, flexDirection: 'column'}}>
              <Text>{I18n.t('level')+evolution.level}</Text>
              <Text>{evolution.carry_item}</Text>
              <Text>{evolution.condition}</Text>
              <Image source={{uri: Pokemons[evolution.pokemon_id].image}} style={{width: 180, height: 180}} />
              <Text>{I18n.t(Pokemons[evolution.pokemon_id].name)}</Text>
            </View>
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
