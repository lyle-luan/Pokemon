import React from 'react';
import {SectionList, StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';
import {HandbookListItem} from './HandbookListItem';
import Generation from '../PokemonData/Generation.json';
import {createStackNavigator,} from 'react-navigation';
import {HandbookHeader,} from './HandbookHeader';

export class HandbookList extends React.Component{

  static navigationOptions = {
    title: I18n.t('handbook'),
    headerStyle: {
      backgroundColor: '#EE1800',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

   showPokemonDetail = (pokemon) => {
       this.props.navigation.navigate('HandbookDetail', {pokemon:pokemon})
   };

   renderItemSeparatorComponent = () => {
     return (
       <View style={{flexDirection:'row', justifyContent:'flex-end', height: 1, backgroundColor: 'white'}}>
         <View style={{flex:0.24, height:1, backgroundColor: 'white'}}></View>
         <View style={{flex:0.76, height:1, backgroundColor: '#E9E9E9'}}></View>
       </View>
     );
   };

   renderSectionSeparatorComponent = () => {
     return (
       <View style={{flex:1, height: 1, backgroundColor: '#E9E9E9'}}></View>
     );
   };

   sectionHeader = (item) => {
     return (
       <HandbookHeader title={item.section.title} />
     );
   };

  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: I18n.t('gen_one'), data: Generation.gen_one},
            {title: I18n.t('gen_two'), data: Generation.gen_two},
          ]}
          ItemSeparatorComponent = {this.renderItemSeparatorComponent}
          SectionSeparatorComponent = {this.renderSectionSeparatorComponent}
          renderItem={({item})=><HandbookListItem pokemonID={item.key} handler={this.showPokemonDetail.bind(this)}/>}
          renderSectionHeader={this.sectionHeader} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
