import {createStackNavigator,} from 'react-navigation';
import {HandbookList,} from './HandbookList';
import {HandbookDetail,} from './HandbookDetail';

export const handbookStack = createStackNavigator({
  HandbookList: HandbookList,
  HandbookDetail: HandbookDetail,
});
