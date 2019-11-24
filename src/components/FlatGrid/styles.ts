import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ItemType, SeparatorProps} from './types';

export const List = styled(FlatList as new () => FlatList<ItemType>)``;

export const Separator = styled.View<SeparatorProps>`
  height: ${({size}) => size}px;
`;
