import React, {FC, useMemo, memo, useCallback} from 'react';
import {Props} from './types';
import {Container} from './styles';
import Item from './Item';
import {LayoutType} from '../../models/Layout';
import {ItemLayout} from '../../models/Item';

const Layout: FC<Props> = ({
  id,
  type = LayoutType.ITEM,
  items,
  layouts,
  flex = 1,
  color = 'transparent',
  spacing = 0,
  borderRadius = 0,
  style,
  index,
  parentType,
  overlay,
  reverseX,
  reverseY,
  onPressItem,
  renderItemChildren,
  visible,
}) => {
  const itemInfo = useMemo<ItemLayout | undefined>(
    () => (items && id ? items[id] : undefined),
    [id, items],
  );

  const handleRenderItemChildren = useCallback(() => {
    if (renderItemChildren) {
      const v =
        itemInfo?.video && typeof itemInfo?.video === 'object'
          ? itemInfo?.video?.uri
          : undefined;
      return renderItemChildren({
        itemId: id,
        photo: itemInfo?.photo?.uri,
        video: v,
        childrenProps: itemInfo?.childrenProps,
      });
    }
  }, [renderItemChildren, itemInfo, id]);

  if (type === LayoutType.ITEM) {
    return (
      <Item
        {...itemInfo}
        id={id}
        index={index}
        parentType={parentType}
        spacing={spacing}
        borderRadius={borderRadius}
        flex={flex}
        overlay={overlay}
        reverseX={reverseX}
        reverseY={reverseY}
        onPress={onPressItem}
        visible={visible}>
        {handleRenderItemChildren()}
      </Item>
    );
  }

  return (
    <Container
      flex={flex}
      type={type}
      spacing={spacing}
      borderRadius={borderRadius}
      color={color}
      style={style}
      index={index}
      parentType={parentType}>
      {layouts &&
        layouts.map((layout, i) => (
          <Layout
            {...layout}
            items={items}
            spacing={spacing}
            borderRadius={borderRadius}
            index={i}
            parentType={type}
            key={layout.id}
            reverseX={reverseX}
            reverseY={reverseY}
            onPressItem={onPressItem}
            renderItemChildren={renderItemChildren}
            visible={visible}
          />
        ))}
    </Container>
  );
};

export default memo(Layout);
