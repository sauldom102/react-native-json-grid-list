import {ContainerProps} from './types';
import {LayoutType} from '../../models/Layout';
export declare const spacingCssPiece: ({
  parentType,
  spacing,
  index,
}: {
  reverse?: boolean;
  parentType?: LayoutType;
  spacing?: number;
  index?: number;
}) => import('styled-components').FlattenSimpleInterpolation;
export declare const Container: import('styled-components').StyledComponent<
  typeof import('react-native').View,
  import('styled-components').DefaultTheme,
  ContainerProps,
  never
>;
