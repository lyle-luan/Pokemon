import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';

export class TextTouchableCell extends React.Component {

  showPokemonDetail = () => {
    console.log('lsdjkfl;skfj;sfkjs;dlkj');
  };

  WholeNews() {
    return tmp_array.map(function(news, i){
      return(
        <View key={i}>
          <Text>{news.headline}</Text>
          <View>
            <Text>{news.text}</Text>
          </View>
        </View>
      );
    });
  }

  render () {
    let title = this.props.title;
    let details = this.props.details;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
          {
            Object.entries(details).map(([detail, handler]) => <Button title={detail} onPress={handler}/>)
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
