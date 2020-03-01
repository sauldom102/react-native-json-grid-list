import React, {FC, memo, useMemo, useCallback} from 'react';
import {Dimensions} from 'react-native';
import {Props} from './types';
import {Container} from './styles';
import Layout from '../../../components/Layout';
import {LayoutType, LayoutRoot} from '../../../models/Layout';

const {width} = Dimensions.get('window');

const Item: FC<Props> & {
  calcHeight: (
    layoutHeight: LayoutRoot['height'] | undefined,
    paddingHorizontal: number,
  ) => number;
} = ({
  layout,
  items,
  onPress,
  visible,
  layoutName,
  style,
  renderItemChildren,
  paddingHorizontal = 0,
}) => {
  const h = useMemo(() => Item.calcHeight(layout.height, paddingHorizontal), [
    layout.height,
    paddingHorizontal,
  ]);

  const handlePressItem = useCallback(
    ({itemId, photo, video}) => {
      if (onPress) {
        onPress({
          layout: layoutName,
          itemId,
          photo,
          video,
        });
      }
    },
    [onPress, layoutName],
  );

  const handleRenderItemChildren = useCallback(
    ({itemId, photo, video, childrenProps}) => {
      if (renderItemChildren) {
        return renderItemChildren({
          layout: layoutName,
          itemId,
          photo,
          video,
          childrenProps,
        });
      }
    },
    [renderItemChildren, layoutName],
  );

  return (
    <Container
      height={h}
      reverseX={layout.reverseX}
      reverseY={layout.reverseY}
      style={style}
      paddingHorizontal={paddingHorizontal}>
      <Layout
        {...layout}
        items={items}
        spacing={layout.spacing}
        type={LayoutType.ROW}
        onPressItem={handlePressItem}
        visible={visible}
        renderItemChildren={handleRenderItemChildren}
      />
    </Container>
  );
};

const calcHeight = (
  layoutHeight: LayoutRoot['height'] | undefined,
  paddingHorizontal: number,
) => {
  if (layoutHeight) {
    if (typeof layoutHeight === 'number') {
      return layoutHeight;
    } else if (layoutHeight.cols) {
      const {cols, spacing: rootSpacing} = layoutHeight;
      return cols * (width - paddingHorizontal * 2 - rootSpacing);
    }
  }

  return 0;
};

Item.calcHeight = calcHeight;

export {calcHeight};

export default memo(Item);
