import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../../i18n/i18n';
import Evolution from '../../PokemonData/Evolution.json';
import Pokemons from '../../PokemonData/Pokemons.json';
import {HandbookListItem} from '../HandbookListItem';

export class EvolutionCell extends React.Component {
  render () {
    let pokemonID = this.props.pokemonID;
    let evolutionAarry = Evolution[pokemonID];
    let pokemon = Pokemons[pokemonID];

    return (
      <View style={styles.container}>
        <HandbookListItem pokemonID={pokemonID} />
        <View style={{flex:1, flexDirection: 'row',}}>
          <View style={{width:90, height:1, backgroundColor: 'white'}}></View>
          <View style={{flex:1, height:1, backgroundColor: '#E9E9E9'}}></View>
        </View>
        {
          evolutionAarry.map((evolution)=>(
            <View style={{flex:1, flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 45, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                  <Text style={{color:'#353535', fontSize:15, fontWeight:'normal'}}>{'↓'}</Text>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <Text>{I18n.t('level')+evolution.level}</Text>
                  {(() => {
                    if (evolution.carry_item) {
                      <Text>{evolution.carry_item}</Text>
                    }
                  })()}
                  {(() => {
                    if (evolution.condition) {
                      <Text>{evolution.condition}</Text>
                    }
                  })()}
                </View>
              </View>
              <HandbookListItem pokemonID={evolution.pokemon_id} />
              <View style={{flex:1, flexDirection: 'row',}}>
                <View style={{width:90, height:1, backgroundColor: 'white'}}></View>
                <View style={{flex:1, height:1, backgroundColor: '#E9E9E9'}}></View>
              </View>
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
