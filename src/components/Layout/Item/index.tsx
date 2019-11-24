import React, {FC} from 'react';
import {Props} from './types';
import {Container} from '../styles';
import {Button, Overlay} from './styles';
import FastImage from 'react-native-fast-image';

const LayoutItem: FC<Props> = ({
  flex = 1,
  color = 'transparent',
  spacing = 0,
  borderRadius = 0,
  style,
  index,
  parentType,
  overlay,
  photo,
  reverseX,
  reverseY,
  children,
  childrenProps = {},
}) => (
  <Container
    flex={flex}
    spacing={spacing}
    borderRadius={borderRadius}
    color={color}
    style={style}
    index={index}
    parentType={parentType}>
    <Button onPress={() => {}} reverseX={reverseX} reverseY={reverseY}>
      <>
        {photo && (
          <FastImage
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: -1,
            }}
            source={photo}
          />
        )}
        {overlay && (
          <Overlay color={overlay.color || '#000'} opacity={overlay.opacity} />
        )}
        {children && children(childrenProps)}
      </>
    </Button>
  </Container>
);

export default LayoutItem;
