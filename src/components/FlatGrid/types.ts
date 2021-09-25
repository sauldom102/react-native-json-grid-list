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

interface ChildrenProps {
  [propName: string]: any;
}

interface OnItemPressParams {
  layout: string;
  itemId?: string;
  photo?: string;
  video?: string;
  childrenProps?: ChildrenProps;
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
  onItemPress?: (params: OnItemPressParams) => void;
  renderItemChildren?: (params: renderItemChildrenParams) => ReactNode;
  data: ItemType[];
};

export interface SeparatorProps {
  size: number;
}
