import React from 'react';
import {SectionList, StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';

export class HandbookList extends React.Component{
  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: I18n.t('generationOne'), data: ['Devin']},
            {title: I18n.t('generationTwo'), data: ['Jackson', 'James']},
          ]}
          renderItem={({item})=><Text>{item}</Text>}
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
