import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';

const rowHeight = 30;

class HeaderView extends React.Component {
  render () {
    return (
      <View style={{flex:1, flexDirection: 'column', height: 68}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', height: 68}}>
          <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 68, borderColor: '#E9E9E9', borderBottomWidth: 1, borderRightWidth: 1, borderStyle: 'solid'}}>
            <Text style={{color:'#353535', fontSize:20, fontWeight:'normal'}}>{I18n.t('race_value')}</Text>
          </View>
          <View style={{width:140, flexDirection: 'column'}}>
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderColor: '#E9E9E9', borderStyle: 'solid', borderBottomWidth: 1}}>
              <Text style={{color:'#353535', fontSize:20, fontWeight:'normal'}}>{I18n.t('statistic_range')}</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#E9E9E9', borderStyle: 'solid'}}>
              <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems:'center', borderColor: '#E9E9E9', borderRightWidth: 1, borderStyle: 'solid'}}>
                <Text style={{color:'#353535', fontSize:15, fontWeight:'normal'}}>{I18n.t('level50')}</Text>
              </View>
              <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{color:'#353535', fontSize:15, fontWeight:'normal'}}>{I18n.t('level100')}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex:1, height:1, backgroundColor: '#E9E9E9'}}></View>
      </View>
    );
  }
}

class RaceValueBar extends React.Component {
  render () {
    let title = this.props.title;
    let value = this.props.value;
    let color = this.props.color;
    let clearValue = 100-value;
    return (
      <View style={{flex:1, flexDirection: 'row', borderColor: '#E9E9E9', borderRightWidth: 1, borderBottomWidth:1, borderStyle: 'solid'}}>
        <View style={{width:60, flexDirection: 'column', justifyContent: 'center', alignItems:'flex-end'}}>
          <Text style={{color:'#353535', fontSize:15, fontWeight:'normal'}} numberOfLines={1}>{title+': '+value}</Text>
        </View>
        <View style={{flex:1,flexDirection: 'row',left:2}}>
          <View style={{flex:value, top:5, height:24, backgroundColor: color}}></View>
          <View style={{flex:clearValue, right:2, backgroundColor:'white'}}></View>
        </View>
      </View>
    );
  }
}

class StatisticRange50 extends React.Component {
  render () {
    let min = this.props.min;
    let max = this.props.max;
    return (
      <View>
        <View style={{width:70, height:34, flexDirection: 'column', justifyContent: 'center', alignItems:'center', borderColor: '#E9E9E9', borderRightWidth: 1, borderBottomWidth: 1, borderStyle: 'solid'}}>
          <Text style={{color:'#353535', fontSize:15, fontWeight:'100'}}>{min+'~'+max}</Text>
        </View>
      </View>
    );
  }
}

class StatisticRange100 extends React.Component {
  render () {
    let min = this.props.min;
    let max = this.props.max;
    return (
      <View>
        <View style={{width:70, height:34, flexDirection: 'column', justifyContent: 'center', alignItems:'center', borderColor: '#E9E9E9', borderBottomWidth: 1, borderStyle: 'solid'}}>
          <Text style={{color:'#353535', fontSize:15, fontWeight:'100'}}>{min+'~'+max}</Text>
        </View>
      </View>
    );
  }
}

class RowView extends React.Component {

  calculateStatisticHP = (raceValue, baseStats, individualValues, level, naturePercent) => {
    return Math.floor((raceValue*2+baseStats/4+individualValues)*level/100+level+10);
  }

  calculateStatisticNotHP = (raceValue, baseStats, individualValues, level, naturePercent) => {
    return Math.floor(((raceValue*2+baseStats/4+individualValues)*level/100+5)*naturePercent);
  }

  render () {
    let title = this.props.title;
    let raceValue = this.props.race_value;
    let color = this.props.color;
    let isHP = this.props.isHP;

    let min50 = 0;
    let max50 = 0;
    let min100 = 0;
    let max100 = 0;
    if (isHP) {
      min50 = this.calculateStatisticHP(raceValue, 0, 0, 50, 0.9);
      max50 = this.calculateStatisticHP(raceValue, 252, 31, 50, 1.1);
      min100 = this.calculateStatisticHP(raceValue, 0, 0, 100, 0.9);
      max100 = this.calculateStatisticHP(raceValue, 252, 31, 100, 1.1);
    }else{
      min50 = this.calculateStatisticNotHP(raceValue, 0, 0, 50, 0.9);
      max50 = this.calculateStatisticNotHP(raceValue, 252, 31, 50, 1.1);
      min100 = this.calculateStatisticNotHP(raceValue, 0, 0, 100, 0.9);
      max100 = this.calculateStatisticNotHP(raceValue, 252, 31, 100, 1.1);
    }

    return (
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', height: 34}}>
        <RaceValueBar style={{flex:6}} title={I18n.t(title, {defaultValue: title})} value={raceValue} color={color} />
        <View style={{width:140, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <StatisticRange50 style={{flex:1}} min={min50} max={max50}/>
          <StatisticRange100 style={{flex:1}} min={min100} max={max100}/>
        </View>
      </View>
    );
  }
}

export class RaceValueCell extends React.Component {
  render () {

    let hp = this.props.hp;
    let attack = this.props.attack;
    let defense = this.props.defense;
    let sp_atk = this.props.sp_atk;
    let sp_def = this.props.sp_def;
    let speed = this.props.speed;
    let total = hp+attack+defense+sp_atk+sp_def+speed;

    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <HeaderView style={{flex:2}} />
        <RowView style={{flex:1}} title={'HP'} isHP={true} race_value={hp} color={'#8CC45B'} />
        <RowView style={{flex:1}} title={'attack'} isHP={false} race_value={attack} color={'#F2C64A'} />
        <RowView style={{flex:1}} title={'defense'} isHP={false} race_value={defense} color={'#D3853F'} />
        <RowView style={{flex:1}} title={'sp_atk'} isHP={false} race_value={sp_atk} color={'#56B2BD'} />
        <RowView style={{flex:1}} title={'sp_def'} isHP={false} race_value={sp_def} color={'#598FC8'} />
        <RowView style={{flex:1}} title={'speed'} isHP={false} race_value={speed} color={'#A25BCC'} />
        <View style={{height:34, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center', borderColor: '#E9E9E9', borderBottomWidth: 1, borderStyle: 'solid'}}>
          <Text style={{color:'#353535', fontSize:15, fontWeight:'normal'}}>{I18n.t('total')+': '+total}</Text>
        </View>
      </View>
    );
  }
}
