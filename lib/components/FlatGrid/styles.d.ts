import {FlatList} from 'react-native';
import {ItemType, SeparatorProps} from './types';
export declare const List: import('styled-components').StyledComponent<
  new () => FlatList<ItemType>,
  any,
  {},
  never
>;
export declare const Separator: import('styled-components').StyledComponent<
  typeof import('react-native').View,
  import('styled-components').DefaultTheme,
  SeparatorProps,
  never
>;
