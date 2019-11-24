import React, {FC, useMemo} from 'react';
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
}) => {
  const itemInfo = useMemo<ItemLayout | undefined>(
    () => (items && id ? items[id] : undefined),
    [id, items],
  );

  if (type === LayoutType.ITEM) {
    return (
      <Item
        {...itemInfo}
        index={index}
        parentType={parentType}
        spacing={spacing}
        borderRadius={borderRadius}
        flex={flex}
        overlay={overlay}
        reverseX={reverseX}
        reverseY={reverseY}>
        {itemInfo && itemInfo.children ? itemInfo.children : undefined}
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
          />
        ))}
    </Container>
  );
};

export default Layout;
