import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {Layout, LayoutType} from '../../models/Layout';
import {ItemLayout} from '../../models/Item';

interface ChildrenProps {
  [propName: string]: any;
}

interface OnPressItemParams {
  itemId?: string;
  photo?: string;
  video?: string;
  childrenProps?: ChildrenProps;
}

interface renderItemChildrenParams {
  itemId?: string;
  photo?: string;
  video?: string;
  childrenProps?: ChildrenProps;
}

export interface Props extends Layout {
  style?: ViewStyle;
  index?: number;
  parentType?: LayoutType;
  items?: {
    [itemKey: string]: ItemLayout;
  };
  visible: boolean;
  onPressItem: (params: OnPressItemParams) => void;
  renderItemChildren?: (params: renderItemChildrenParams) => ReactNode;
}

export interface ContainerProps {
  flex: Props['flex'];
  type?: Props['type'];
  color: Props['color'];
  spacing?: Props['spacing'];
  index?: Props['index'];
  parentType?: Props['parentType'];
  borderRadius?: Props['borderRadius'];
}
