import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../../i18n/i18n';

const rowHeight = 30;

class HeaderView extends React.Component {
  render () {
    return (
      <View style={{flex:1, flexDirection: 'column', height: 88}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', height: 88}}>
          <View style={{flex:6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 88, borderColor: '#E9E9E9', borderBottomWidth: 1, borderRightWidth: 1, borderStyle: 'solid'}}>
            <Text style={{color:'#353535', fontSize:20, fontWeight:'normal'}}>{I18n.t('race_value')}</Text>
          </View>
          <View style={{flex:4, flexDirection: 'column'}}>
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
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:2, flexDirection: 'row'}}>
          <Text>{title+': '+value}</Text>
        </View>
        <View style={{flex:8, flexDirection: 'row'}}>
          <View style={{flex:value, backgroundColor: color}}></View>
          <View style={{flex:clearValue, backgroundColor:'black'}}></View>
        </View>
      </View>
    );
  }
}

class StatisticRange extends React.Component {
  render () {
    let min = this.props.min;
    let max = this.props.max;
    return (
      <View>
        <Text>{min+'~'+max}</Text>
      </View>
    );
  }
}

class RowViewHP extends React.Component {

  calculateStatisticHP = (raceValue, baseStats, individualValues, level, naturePercent) => {
    return Math.floor((raceValue*2+baseStats/4+individualValues)*level/100+level+10);
  }

  render () {
    let title = this.props.title;
    let raceValue = this.props.race_value;
    let color = this.props.color;

    let min50 = this.calculateStatisticHP(raceValue, 0, 0, 50, 0.9);
    let max50 = this.calculateStatisticHP(raceValue, 252, 31, 50, 1.1);
    let min100 = this.calculateStatisticHP(raceValue, 0, 0, 100, 0.9);
    let max100 = this.calculateStatisticHP(raceValue, 252, 31, 100, 1.1);

    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <RaceValueBar style={{flex:6}} title={I18n.t(title, {defaultValue: title})} value={raceValue} color={color} />
        <StatisticRange style={{flex:2}} min={min50} max={max50}/>
        <StatisticRange style={{flex:2}} min={min100} max={max100}/>
      </View>
    );
  }
}

class RowViewNotHP extends React.Component {

  calculateStatisticNotHP = (raceValue, baseStats, individualValues, level, naturePercent) => {
    return Math.floor(((raceValue*2+baseStats/4+individualValues)*level/100+5)*naturePercent);
  }

  render () {
    let title = this.props.title;
    let raceValue = this.props.race_value;
    let color = this.props.color;

    let min50 = this.calculateStatisticNotHP(raceValue, 0, 0, 50, 0.9);
    let max50 = this.calculateStatisticNotHP(raceValue, 252, 31, 50, 1.1);
    let min100 = this.calculateStatisticNotHP(raceValue, 0, 0, 100, 0.9);
    let max100 = this.calculateStatisticNotHP(raceValue, 252, 31, 100, 1.1);

    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <RaceValueBar style={{flex:6}} title={I18n.t(title, {defaultValue: title})} value={raceValue} color={color} />
        <StatisticRange style={{flex:2}} min={min50} max={max50}/>
        <StatisticRange style={{flex:2}} min={min100} max={max100}/>
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
        <RowViewHP style={{flex:1}} title={'HP'} race_value={hp} color={'red'} />
        <RowViewNotHP style={{flex:1}} title={'attack'} race_value={attack} color={'red'} />
        <RowViewNotHP style={{flex:1}} title={'defense'} race_value={defense} color={'red'} />
        <RowViewNotHP style={{flex:1}} title={'sp_atk'} race_value={sp_atk} color={'red'} />
        <RowViewNotHP style={{flex:1}} title={'sp_def'} race_value={sp_def} color={'red'} />
        <RowViewNotHP style={{flex:1}} title={'speed'} race_value={speed} color={'red'} />
        <View style={{flex:1}}>
          <Text>{I18n.t('total')+': '+total}</Text>
        </View>
      </View>
    );
  }
}
