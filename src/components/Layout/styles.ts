import styled, {css} from 'styled-components/native';
import {ContainerProps} from './types';
import {LayoutType} from '../../models/Layout';

export const spacingCssPiece = ({
  parentType,
  spacing,
  index,
}: {
  reverse?: boolean;
  parentType?: LayoutType;
  spacing?: number;
  index?: number;
}) => {
  return css`
    margin-top: ${parentType === LayoutType.COLUMN && index ? spacing : 0}px;
    margin-left: ${parentType === LayoutType.ROW && index ? spacing : 0}px;
  `;
};

export const Container = styled.View<ContainerProps>`
  overflow: hidden;
  flex: ${({flex}) => flex};
  flex-direction: ${({type}) =>
    type && [LayoutType.ROW, LayoutType.COLUMN].indexOf(type) !== -1
      ? type
      : 'row'};
  background-color: ${({color}) => color};
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  ${({index, parentType, spacing}) =>
    spacingCssPiece({parentType, spacing, index})};
`;
