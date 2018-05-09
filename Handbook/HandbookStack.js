import {createStackNavigator,} from 'react-navigation';
import {HandbookList,} from './HandbookList';

export const handbookStack = createStackNavigator({
  HandbookList: HandbookList,
});
