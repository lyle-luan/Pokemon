import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import I18n from '../i18n/i18n';
import {createStackNavigator,} from 'react-navigation';
import {TextCell} from './DetailCells/TextCell';
import {TypeCell} from './DetailCells/TypeCell';
import {TextTouchableCell} from './DetailCells/TextTouchableCell'
import Pokemons from '../PokemonData/Pokemons.json';

export class HandbookDetail extends React.Component{

  showAbilityDetail = (ability) => {
    // const pokemon = this.props.navigation.state.params.pokemon;
    console.log('show ability: '+ability);
  };

  showEggsGroupsDetail = (eggGroup) => {
    console.log('show egg groups: '+eggGroup);
  };

  showCatchRate = (catchRate) => {
    console.log('show catch rate: '+catchRate);
  }

  render () {
    const pokemon = this.props.navigation.state.params.pokemon;

    var ability =  pokemon.ability
    var detailsHandlers = {};
    detailsHandlers[ability] = this.showAbilityDetail.bind(this, ability);

    var hiddenAbility =  pokemon.hidden_ability
    var hiddenDetailsHandlers = {};
    hiddenDetailsHandlers[hiddenAbility] = this.showAbilityDetail.bind(this, hiddenAbility);

    var eggGroupsDetailsHandlers = {};
    pokemon.egg_groups.map((eggGroup)=>(
      eggGroupsDetailsHandlers[eggGroup] = this.showEggsGroupsDetail.bind(this, eggGroup)
    ))

    var catchRateHandlers = {};
    var catchRate = pokemon.catch_rate
    catchRateHandlers[catchRate] = this.showCatchRate.bind(this, catchRate)

    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: pokemon.image}} style={{width: 180, height: 180}} />
        <TextCell title={pokemon.name} detail={pokemon.id} />
        <TypeCell types={pokemon.type} />
        <TextTouchableCell title={'ability'} details={detailsHandlers} />
        <TextTouchableCell title={'hidden_ability'} details={hiddenDetailsHandlers} />
        <TextCell title={'base_stats'} detail={I18n.t(pokemon.ev_yield)+pokemon.ev_yield_num} />
        <TextCell title={'base_exp'} detail={pokemon.base_exp+''} />
        <TextCell title={'vs_exp'} detail={pokemon.vs_exp+''} />
        <TextCell title={'exp_100'} detail={pokemon.exp_100+''} />
        <TextTouchableCell title={'egg_groups'} details={eggGroupsDetailsHandlers}/>
        <TextCell title={'egg_cycle'} detail={pokemon.hatch_time_cycle+I18n.t('egg_cycle')+'('+pokemon.hatch_time_step+I18n.t('step')+')'} />
        <TextCell title={'gender_ratio'} detail={pokemon.gender_ratio_male+'%'+I18n.t('male')+pokemon.gender_ratio_female+'%'+I18n.t('female')} />
        <TextCell title={'sex_diff'} detail={pokemon.id+'_'+pokemon.sex_diff} />
        <TextTouchableCell title={'catch_rate'} details={catchRateHandlers}/>
        <TextCell title={'category'} detail={pokemon.category} />
        <TextCell title={'height'} detail={pokemon.height} />
        <TextCell title={'weight'} detail={pokemon.weight} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
