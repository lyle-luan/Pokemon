import {createStackNavigator,} from 'react-navigation';
import {MineList,} from './MineList';

export const mineStack = createStackNavigator({
  MineList: MineList,
});
