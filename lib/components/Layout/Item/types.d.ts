import { Color, OpacityProperty } from 'csstype';
import { ViewStyle } from 'react-native';
import { FastImageSource } from 'react-native-fast-image';
import { LayoutType } from '../../../models/Layout';
import { ChildrenProps } from '../../../models/Item';
import { ReactNode } from 'react';
import { VideoProperties } from 'react-native-video';
interface onPressParams {
    itemId?: string;
    photo?: string;
}
export interface Props {
    id?: string;
    flex?: number;
    color?: Color;
    style?: ViewStyle;
    index?: number;
    parentType?: LayoutType;
    overlay?: OverlayProps;
    photo?: FastImageSource;
    video?: VideoProperties['source'];
    visible: boolean;
    spacing?: number;
    borderRadius?: number;
    reverseX?: boolean;
    reverseY?: boolean;
    children?: (props: ChildrenProps) => ReactNode;
    childrenProps?: ChildrenProps;
    onPress: (params: onPressParams) => void;
}
export interface OverlayProps {
    color?: Color;
    opacity: OpacityProperty;
}
export interface ButtonProps {
    reverseX?: boolean;
    reverseY?: boolean;
}
export {};
