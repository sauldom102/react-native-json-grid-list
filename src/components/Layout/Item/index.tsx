import React, {FC, useCallback, memo, useRef, useEffect} from 'react';
import {Props} from './types';
import {Container} from '../styles';
import {Button, Image, Video, Overlay} from './styles';
import DefaultVideo from 'react-native-video';

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
  video,
  visible,
  reverseX,
  reverseY,
  children,
  childrenProps,
  onPress,
}) => {
  const videoRef = useRef<DefaultVideo>(null);

  useEffect(() => {
    if (visible) {
      videoRef.current?.seek(0);
    }
  }, [visible]);

  const handlePress = useCallback(() => {
    const v = typeof video === 'object' ? video?.uri : undefined;
    onPress({itemId: id, photo: photo?.uri, video: v, childrenProps});
  }, [onPress, id, photo, video]);

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
          {photo && <Image source={photo} />}
          {video && <Video ref={videoRef} source={video} muted resizeMode="cover" />}
          {overlay && (
            <Overlay
              color={overlay.color || '#000'}
              opacity={overlay.opacity}
            />
          )}
          {children}
        </>
      </Button>
    </Container>
  );
};

export default memo(LayoutItem);
