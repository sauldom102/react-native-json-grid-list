import React, {FC, useCallback} from 'react';
import {Props} from './types';
import Item, {calcHeight} from './Item';
import {List, Separator} from './styles';

const FlatGrid: FC<Props> = ({
  layouts,
  data,
  rowSeparator = 0,
  paddingHorizontal = 0,
  showsVerticalScrollIndicator,
}) => {
  const handleRenderItem = useCallback(
    ({item: {layout, items}}) => (
      <Item
        layout={layouts[layout]}
        items={items}
        paddingHorizontal={paddingHorizontal}
      />
    ),
    [layouts, paddingHorizontal],
  );

  const extractKey = useCallback((_, index) => index + '', []);

  const handleRenderSeparator = useCallback(
    () => <Separator size={rowSeparator} />,
    [rowSeparator],
  );

  const handleGetItemLayout = useCallback(
    (d, index) => {
      const {layout} = d[index];
      const l = layouts[layout];
      const length = calcHeight(l.height, paddingHorizontal);

      var offset = 0;
      d.slice(0, index).forEach((_: any, i: number) => {
        const {layout: dLayout} = d[i];
        const otherLayout = layouts[dLayout];
        offset += calcHeight(otherLayout.height, paddingHorizontal);
      });

      return {
        length,
        offset,
        index,
      };
    },
    [layouts, paddingHorizontal],
  );

  return (
    <List
      data={data}
      renderItem={handleRenderItem}
      keyExtractor={extractKey}
      ItemSeparatorComponent={handleRenderSeparator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      getItemLayout={handleGetItemLayout}
    />
  );
};

export default FlatGrid;
