import { ReactChildren } from 'react';
import { FastImageSource } from 'react-native-fast-image';
import { VideoProperties } from 'react-native-video';
export interface ChildrenProps {
    [propName: string]: any;
}
export interface ItemLayout {
    color?: string;
    photo?: FastImageSource;
    video?: VideoProperties['source'];
    childrenProps?: ChildrenProps;
    children?: (props: ChildrenProps) => ReactChildren;
}
