import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';
import {TypesView} from '../TypesView'

class BeStruckRow extends React.Component {
  render () {
    let type = this.props.type;
    let value = this.props.value;
    return (
      <View style={{height: 44, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',left:5}}>
        <TypesView types={[type]}/>
        <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text style={{color:'#353535', fontSize:20, fontWeight:'100', right:10}}>{value}</Text>
        </View>
      </View>
    );
  }
}

export class BeStruckCell extends React.Component {
  render () {
    let normal = this.props.types['normal'];
    let fighting = this.props.types['fighting'];
    let flying = this.props.types['flying'];
    let poison = this.props.types['poison'];
    let ground = this.props.types['ground'];
    let rock = this.props.types['rock'];
    let bug = this.props.types['bug'];
    let ghost = this.props.types['ghost'];
    let steel = this.props.types['steel'];
    let fire = this.props.types['fire'];
    let water = this.props.types['water'];
    let grass = this.props.types['grass'];
    let electric = this.props.types['electric'];
    let psychic = this.props.types['psychic'];
    let ice = this.props.types['ice'];
    let dragon = this.props.types['dragon'];
    let dark = this.props.types['dark'];
    let fairy = this.props.types['fairy'];

    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <BeStruckRow type={'normal'} value={normal} />
          <BeStruckRow type={'fighting'} value={fighting} />
          <BeStruckRow type={'flying'} value={flying} />
          <BeStruckRow type={'poison'} value={poison} />
          <BeStruckRow type={'ground'} value={ground} />
          <BeStruckRow type={'rock'} value={rock} />
          <BeStruckRow type={'bug'} value={bug} />
          <BeStruckRow type={'ghost'} value={ghost} />
          <BeStruckRow type={'steel'} value={steel} />
        </View>
        <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <BeStruckRow type={'fire'} value={fire} />
          <BeStruckRow type={'water'} value={water} />
          <BeStruckRow type={'grass'} value={grass} />
          <BeStruckRow type={'electric'} value={electric} />
          <BeStruckRow type={'psychic'} value={psychic} />
          <BeStruckRow type={'ice'} value={ice} />
          <BeStruckRow type={'dragon'} value={dragon} />
          <BeStruckRow type={'dark'} value={dark} />
          <BeStruckRow type={'fairy'} value={fairy} />
        </View>
      </View>
    );
  }
}
