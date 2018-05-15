import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import I18n from '../i18n/i18n';
import {createStackNavigator,} from 'react-navigation';
import {TextCell} from './DetailCells/TextCell';
import {TypeCell} from './DetailCells/TypeCell';
import {TextTouchableCell} from './DetailCells/TextTouchableCell'

export class HandbookDetail extends React.Component{

  showAbilityDetail = () => {
    console.log('show ability');
  };

  render () {
    const pokemon = this.props.navigation.state.params.pokemon;

    var ability =  I18n.t(pokemon.ability)
    var detailsHandlers = {};
    detailsHandlers[ability] = this.showAbilityDetail.bind(this);

    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: pokemon.image}} style={{width: 180, height: 180}} />
        <TextCell title={I18n.t(pokemon.name)} detail={pokemon.id} />
        <TypeCell types={pokemon.type} />
        <TextTouchableCell title={I18n.t('ability')} details={detailsHandlers} />
        {/* <TextTouchableCell title={I18n.t('hidden_ability')} details={[I18n.t(pokemon.hidden_ability)]} /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
