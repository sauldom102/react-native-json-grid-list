import { FastImageSource } from 'react-native-fast-image';
import { ReactChildren } from 'react';
export interface ChildrenProps {
    [propName: string]: any;
}
export interface ItemLayout {
    color?: string;
    photo?: FastImageSource;
    childrenProps?: ChildrenProps;
    children?: (props: ChildrenProps) => ReactChildren;
}
