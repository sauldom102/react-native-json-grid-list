import {ReactNode} from 'react';
import {FlatListProps} from 'react-native';
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

interface onItemPressParams {
  layout: string;
  itemId?: string;
  photo?: string;
  video?: string;
}

interface ChildrenProps {
  [propName: string]: any;
}

interface renderItemChildrenParams {
  layout: string;
  itemId?: string;
  photo?: string;
  video?: string;
  childrenProps?: ChildrenProps;
}

export type Props = Omit<
  FlatListProps<ItemType>,
  'data' | 'renderItem' | 'keyExtractor'
> & {
  rowSeparator?: number;
  paddingHorizontal?: number;
  layouts: Layouts;
  onItemPress?: (params: onItemPressParams) => void;
  renderItemChildren?: (params: renderItemChildrenParams) => ReactNode;
  data: ItemType[];
};

export interface SeparatorProps {
  size: number;
}
