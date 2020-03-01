import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {LayoutRoot} from '../../../models/Layout';
import {ItemLayout} from '../../../models/Item';

interface onPressParams {
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

export interface Props {
  layoutName: string;
  layout: LayoutRoot;
  style?: ViewStyle;
  items: {
    [itemKey: string]: ItemLayout;
  };
  visible: boolean;
  paddingHorizontal?: number;
  onPress?: (params: onPressParams) => void;
  renderItemChildren?: (params: renderItemChildrenParams) => ReactNode;
}

export interface ContainerProps {
  height: number;
  reverseX?: boolean;
  reverseY?: boolean;
  paddingHorizontal: number;
}
