import React, {FC, useCallback, useState} from 'react';
import {ViewToken} from 'react-native';
import {Props} from './types';
import Item, {calcHeight} from './Item';
import {List, Separator} from './styles';
import notEmpty from '../../utils/notEmpty';

const FlatGrid: FC<Props> = ({
  layouts,
  data,
  rowSeparator = 0,
  paddingHorizontal = 0,
  showsVerticalScrollIndicator,
  onItemPress,
  style,
}) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const isItemVisible = useCallback(
    (itemIndex: number) => visibleItems.indexOf(itemIndex) !== -1,
    [visibleItems],
  );

  const handleRenderItem = useCallback(
    ({item: {layout, items}, index}) => (
      <Item
        layoutName={layout}
        layout={layouts[layout]}
        items={items}
        paddingHorizontal={paddingHorizontal}
        onPress={onItemPress}
        visible={isItemVisible(index)}
      />
    ),
    [layouts, paddingHorizontal, onItemPress, isItemVisible],
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

  const handleViewableItemsChanged = useCallback(
    ({viewableItems: vi}: {viewableItems: ViewToken[]}) => {
      setVisibleItems(vi.map(({index}) => index).filter(notEmpty));
    },
    [],
  );

  return (
    <List
      data={data}
      renderItem={handleRenderItem}
      keyExtractor={extractKey}
      ItemSeparatorComponent={handleRenderSeparator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      getItemLayout={handleGetItemLayout}
      onViewableItemsChanged={handleViewableItemsChanged}
      style={style}
    />
  );
};

export default FlatGrid;
