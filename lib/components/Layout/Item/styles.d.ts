import {RectButton} from 'react-native-gesture-handler';
import DefaultVideo from 'react-native-video';
import {OverlayProps, ButtonProps} from './types';
export declare const Button: import('styled-components').StyledComponent<
  typeof RectButton,
  any,
  ButtonProps,
  never
>;
export declare const Image: import('styled-components').StyledComponent<
  any,
  any,
  object,
  string | number | symbol
>;
export declare const Video: import('styled-components').StyledComponent<
  typeof DefaultVideo,
  any,
  {},
  never
>;
export declare const Overlay: import('styled-components').StyledComponent<
  typeof import('react-native').View,
  import('styled-components').DefaultTheme,
  OverlayProps,
  never
>;
