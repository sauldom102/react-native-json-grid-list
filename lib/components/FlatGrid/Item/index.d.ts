/// <reference types="react" />
import {Props} from './types';
declare const calcHeight: (
  layoutHeight:
    | number
    | {
        cols: number;
        spacing: number;
      },
  paddingHorizontal: number,
) => number;
export {calcHeight};
declare const _default: import('react').NamedExoticComponent<Props>;
export default _default;
