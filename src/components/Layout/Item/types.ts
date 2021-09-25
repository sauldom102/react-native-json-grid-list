import {Color, OpacityProperty} from 'csstype';
import {ViewStyle} from 'react-native';
import {Source} from 'react-native-fast-image';
import {LayoutType} from '../../../models/Layout';
import {ChildrenProps} from '../../../models/Item';
import {ReactNode} from 'react';
import {VideoProperties} from 'react-native-video';

interface OnPressParams {
  itemId?: string;
  photo?: string;
  video?: string;
  childrenProps?: ChildrenProps;
}

export interface Props {
  id?: string;
  flex?: number;
  color?: Color;
  style?: ViewStyle;
  index?: number;
  parentType?: LayoutType;
  overlay?: OverlayProps;
  photo?: Source;
  video?: VideoProperties['source'];
  visible: boolean;
  spacing?: number;
  borderRadius?: number;
  reverseX?: boolean;
  reverseY?: boolean;
  children?: ReactNode;
  childrenProps?: ChildrenProps;
  onPress: (params: OnPressParams) => void;
}

export interface OverlayProps {
  color?: Color;
  opacity: OpacityProperty;
}

export interface ButtonProps {
  reverseX?: boolean;
  reverseY?: boolean;
}
