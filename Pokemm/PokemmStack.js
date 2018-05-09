import {createStackNavigator,} from 'react-navigation';
import {PokemmList,} from './PokemmList';

export const pokemmStack = createStackNavigator({
  PokemmList: PokemmList,
});
