import {Color, OpacityProperty} from 'csstype';
import {ViewStyle} from 'react-native';
import {FastImageSource} from 'react-native-fast-image';
import {LayoutType} from '../../../models/Layout';
import {ChildrenProps} from '../../../models/Item';
import {ReactNode} from 'react';

export interface Props {
  flex?: number;
  color?: Color;
  style?: ViewStyle;
  index?: number;
  parentType?: LayoutType;
  overlay?: OverlayProps;
  photo?: FastImageSource;
  spacing?: number;
  borderRadius?: number;
  reverseX?: boolean;
  reverseY?: boolean;
  children?: (props: ChildrenProps) => ReactNode;
  childrenProps?: ChildrenProps;
}

export interface OverlayProps {
  color?: Color;
  opacity: OpacityProperty;
}

export interface ButtonProps {
  reverseX?: boolean;
  reverseY?: boolean;
}
