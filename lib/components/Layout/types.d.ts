import {ViewStyle} from 'react-native';
import {Layout, LayoutType} from '../../models/Layout';
import {ItemLayout} from '../../models/Item';
export interface Props extends Layout {
  style?: ViewStyle;
  index?: number;
  parentType?: LayoutType;
  items?: {
    [itemKey: string]: ItemLayout;
  };
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
