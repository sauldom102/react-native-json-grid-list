import React, {FC, useCallback, memo} from 'react';
import {Props} from './types';
import {Container} from '../styles';
import {Button, Overlay} from './styles';
import FastImage from 'react-native-fast-image';

const LayoutItem: FC<Props> = ({
  id,
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
  onPress,
}) => {
  const handlePress = useCallback(() => {
    onPress({itemId: id, photo: photo?.uri});
  }, [onPress, id, photo]);

  return (
    <Container
      flex={flex}
      spacing={spacing}
      borderRadius={borderRadius}
      color={color}
      style={style}
      index={index}
      parentType={parentType}>
      <Button onPress={handlePress} reverseX={reverseX} reverseY={reverseY}>
        <>
          {photo && (
            <FastImage
              // eslint-disable-next-line react-native/no-inline-styles
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
            <Overlay
              color={overlay.color || '#000'}
              opacity={overlay.opacity}
            />
          )}
          {children && children(childrenProps)}
        </>
      </Button>
    </Container>
  );
};

export default memo(LayoutItem);
