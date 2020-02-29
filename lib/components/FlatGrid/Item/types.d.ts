import { ViewStyle } from 'react-native';
import { LayoutRoot } from '../../../models/Layout';
import { ItemLayout } from '../../../models/Item';
interface onPressParams {
    layout: string;
    itemId?: string;
    photo?: string;
}
export interface Props {
    layoutName: string;
    layout: LayoutRoot;
    style?: ViewStyle;
    items: {
        [itemKey: string]: ItemLayout;
    };
    paddingHorizontal?: number;
    onPress: (params: onPressParams) => void;
}
export interface ContainerProps {
    height: number;
    reverseX?: boolean;
    reverseY?: boolean;
    paddingHorizontal: number;
}
export {};
