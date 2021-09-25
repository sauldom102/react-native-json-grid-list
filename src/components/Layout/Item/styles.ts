import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import DefaultVideo from 'react-native-video';
import {OverlayProps, ButtonProps} from './types';

export const Button = styled(RectButton)<ButtonProps>`
  flex: 1;
  transform: ${({reverseX, reverseY}) =>
    `scaleX(${reverseX ? -1 : 1}) scaleY(${reverseY ? -1 : 1})`};
`;

const absoluteFill = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Image = styled(FastImage)`
  ${absoluteFill}
  z-index: -1;
`;

export const Video = styled(DefaultVideo)`
  ${absoluteFill}
`;

export const Overlay = styled.View<OverlayProps>`
  ${absoluteFill}
  background-color: ${({color}) => color};
  opacity: ${({opacity}) => opacity};
`;
