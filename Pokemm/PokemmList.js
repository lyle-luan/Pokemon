import React from 'react';
import {SectionList, StyleSheet, Text, View, Image} from 'react-native';

export class PokemmList extends React.Component{
  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: '攻略', data: ['Devin']},
            {title: '新闻', data: ['Jackson', 'James']},
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
