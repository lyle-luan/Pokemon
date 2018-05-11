import React from 'react';
import {SectionList, StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';
import Generation from '../PokemonData/Generation.json';
import {HandbookListItem} from './HandbookListItem';

export class HandbookList extends React.Component{
  render () {
    // console.error(Generation.gen_one);
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: I18n.t('gen_one'), data: Generation.gen_one},
            {title: I18n.t('gen_two'), data: Generation.gen_two},
          ]}
          // renderItem={({item}) => <Text>{item}</Text>}
          renderItem={({item})=><HandbookListItem pokemonID={item}/>}
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
})

I18n.fallbacks = true;

I18n.translations = {
  en: {
    generationOne: 'Generation Ⅰ',
    generationTwo: 'Generation Ⅱ',
  },
  'zh-Hans': {
    generationOne: '第一世代',
    generationTwo: '第二世代',
  },
};
