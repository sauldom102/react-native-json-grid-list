import {Color, OpacityProperty} from 'csstype';

export enum LayoutType {
  ROW = 'row',
  COLUMN = 'column',
  ITEM = 'item',
}

interface Overlay {
  color: Color;
  opacity: OpacityProperty;
}

export interface LayoutRoot extends Layout {
  height:
    | number
    | {
        cols: number;
        spacing: number;
      };
}

export interface Layout {
  id?: string;
  type?: LayoutType;
  layouts?: Layout[];
  flex?: number;
  color?: string;
  spacing?: number;
  borderRadius?: number;
  overlay?: Overlay;
  reverseX?: boolean;
  reverseY?: boolean;
}
