import {Props as ItemProps} from './Item/types';
import {ViewStyle, FlatListProps} from 'react-native';
import {ItemLayout} from '../../models/Item';
import {LayoutRoot} from '../../models/Layout';

export interface ItemType {
  layout: string;
  items: {
    [itemKey: string]: ItemLayout;
  };
}

export interface Layouts {
  [name: string]: LayoutRoot;
}

export interface Props {
  style?: ViewStyle;
  rowSeparator?: number;
  paddingHorizontal?: number;
  showsVerticalScrollIndicator?: FlatListProps<
    ItemProps
  >['showsVerticalScrollIndicator'];
  layouts: Layouts;
  data: ItemType[];
}

export interface SeparatorProps {
  size: number;
}
