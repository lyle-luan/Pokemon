import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';
import {TypesView} from '../TypesView'

class BeStruckRow extends React.Component {
  render () {
    let type = this.props.type;
    let value = this.props.value;
    return (
      <View style={{flex:1, height: 44, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', left: 5}}>
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
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'normal'} value={normal} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'fire'} value={fire} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'fighting'} value={fighting} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'water'} value={water} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'flying'} value={flying} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'grass'} value={grass} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'poison'} value={poison} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'electric'} value={electric} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'ground'} value={ground} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'psychic'} value={psychic} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'rock'} value={rock} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'ice'} value={ice} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'bug'} value={bug} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'dragon'} value={dragon} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'ghost'} value={ghost} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'dark'} value={dark} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
        <View style={{flexDirection: 'row'}}>
          <BeStruckRow type={'steel'} value={steel} />
          <View style={{width:1, backgroundColor: '#E9E9E9'}}></View>
          <BeStruckRow type={'fairy'} value={fairy} />
        </View>
        <View style={{height:1, backgroundColor: '#E9E9E9'}}></View>
      </View>
    );
  }
}
