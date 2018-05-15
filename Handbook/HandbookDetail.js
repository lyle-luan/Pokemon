import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import I18n from '../i18n/i18n';
import {createStackNavigator,} from 'react-navigation';
import {TextCell} from './DetailCells/TextCell';
import {TypeCell} from './DetailCells/TypeCell';
import {TextTouchableCell} from './DetailCells/TextTouchableCell'

export class HandbookDetail extends React.Component{

  showAbilityDetail = (ability) => {
    // const pokemon = this.props.navigation.state.params.pokemon;
    console.log('show ability: '+ability);
  };

  showEggsGroupsDetail = (eggGroup) => {
    console.log('show egg groups: '+eggGroup);
  };

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

    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: pokemon.image}} style={{width: 180, height: 180}} />
        <TextCell title={pokemon.name} detail={pokemon.id} />
        <TypeCell types={pokemon.type} />
        <TextTouchableCell title={'ability'} details={detailsHandlers} />
        <TextTouchableCell title={'hidden_ability'} details={hiddenDetailsHandlers} />
        <TextTouchableCell title={'egg_groups'} details={eggGroupsDetailsHandlers}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
