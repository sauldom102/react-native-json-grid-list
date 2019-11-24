import styled from 'styled-components/native';
import {ContainerProps} from './types';

export const Container = styled.View<ContainerProps>`
  height: ${({height}) => height}px;
  transform: ${({reverseX, reverseY}) =>
    `scaleX(${reverseX ? -1 : 1}) scaleY(${reverseY ? -1 : 1})`};
  padding: 0 ${({paddingHorizontal}) => paddingHorizontal}px;
`;
