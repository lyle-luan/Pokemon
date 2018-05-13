import React from 'react';
import {SectionList, StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';
import {HandbookListItem} from './HandbookListItem';
import Generation from '../PokemonData/Generation.json';
import Pokemons from '../PokemonData/Pokemons.json'

export class HandbookList extends React.Component{

  render () {

    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: I18n.t('gen_one'), data: Generation.gen_one},
            {title: I18n.t('gen_two'), data: Generation.gen_two},
          ]}
          renderItem={({item})=><HandbookListItem pokemon={Pokemons[item.key]} pokemonID={item.key}/>}
          renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
