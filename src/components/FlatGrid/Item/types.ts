import {ViewStyle} from 'react-native';
import {LayoutRoot} from '../../../models/Layout';
import {ItemLayout} from '../../../models/Item';

export interface Props {
  layout: LayoutRoot;
  style?: ViewStyle;
  items: {
    [itemKey: string]: ItemLayout;
  };
  paddingHorizontal?: number;
}

export interface ContainerProps {
  height: number;
  reverseX?: boolean;
  reverseY?: boolean;
  paddingHorizontal: number;
}
