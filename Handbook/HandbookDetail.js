import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import I18n from '../i18n/i18n';
import {createStackNavigator,} from 'react-navigation';

export class HandbookDetail extends React.Component{

  render () {
    const pokemon = this.props.navigation.state.params.pokemon;

    console.log('pokemon: '+pokemon);

    return (
      <View style={styles.container}>
        <Image source={{uri: pokemon.image}} style={{width: 90, height: 90}} />
        <Text>{I18n.t(pokemon.name)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
