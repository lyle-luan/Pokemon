import {createStackNavigator,} from 'react-navigation';
import {ToolsList,} from './ToolsList';

export const toolsStack = createStackNavigator({
  ToolsList: ToolsList,
});
