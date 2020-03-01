import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import DefaultVideo from 'react-native-video';
import {OverlayProps, ButtonProps} from './types';

export const Button = styled(RectButton)<ButtonProps>`
  flex: 1;
  transform: ${({reverseX, reverseY}) =>
    `scaleX(${reverseX ? -1 : 1}) scaleY(${reverseY ? -1 : 1})`};
`;

export const Video = styled(DefaultVideo)`
  flex: 1;
`;

export const Overlay = styled.View<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({color}) => color};
  opacity: ${({opacity}) => opacity};
`;
