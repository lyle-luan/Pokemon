import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import I18n from '../i18n/i18n';
import {createStackNavigator,} from 'react-navigation';
import {NameIDCell} from './DetailCells/NameIDCell';
import {TypeCell} from './DetailCells/TypeCell';

export class HandbookDetail extends React.Component{

  render () {
    const pokemon = this.props.navigation.state.params.pokemon;
    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: pokemon.image}} style={{width: 180, height: 180}} />
        <NameIDCell name={pokemon.name} id={pokemon.id} />
        <TypeCell types={pokemon.type} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
