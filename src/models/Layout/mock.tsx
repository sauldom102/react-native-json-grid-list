import React from 'react';
import {Text, View} from 'react-native';
import {LayoutType, LayoutRoot} from '.';

export const LAYOUT1 = {
  spacing: 8,
  height: 350,
  borderRadius: 8,
  layouts: [
    {
      id: 'column-1',
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'item-1',
          overlay: {
            color: '#000',
            opacity: 0.5,
          },
          flex: 2,
        },
        {
          id: 'item-2',
        },
      ],
    },
    {
      id: 'item-3',
    },
  ],
} as LayoutRoot;

export const LAYOUT2 = {
  spacing: 8,
  height: {
    cols: 1,
    spacing: 16,
  },
  borderRadius: 8,
  layouts: [
    {
      id: 'column-1',
      flex: 2,
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'row-1',
          type: LayoutType.ROW,
          layouts: [
            {
              id: 'item-1',
            },
            {
              id: 'item-2',
            },
          ],
        },
        {
          id: 'item-3',
        },
        {
          id: 'row-2',
          type: LayoutType.ROW,
          layouts: [
            {
              id: 'item-4',
            },
            {
              id: 'item-5',
            },
          ],
        },
      ],
    },
    {
      id: 'item-6',
    },
  ],
} as LayoutRoot;

export const LAYOUT3 = {
  spacing: 8,
  height: {
    cols: 2 / 3,
    spacing: 8,
  },
  borderRadius: 8,
  layouts: [
    {
      id: 'column-1',
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'item-1',
        },
        {
          id: 'item-2',
          overlay: {
            opacity: 0.4,
            color: '#f00',
          },
        },
      ],
    },
    {
      id: 'item-3',
      flex: 2,
    },
  ],
} as LayoutRoot;

export const LAYOUT4 = {
  spacing: 8,
  height: {
    cols: 2 / 3,
    spacing: 16,
  },
  layouts: [
    {
      id: 'item-1',
    },
    {
      id: 'column-1',
      flex: 2,
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'row-1',
          type: LayoutType.ROW,
          layouts: [
            {
              id: 'item-2',
            },
            {
              id: 'item-3',
            },
          ],
        },
        {
          id: 'item-4',
          overlay: {
            opacity: 0.5,
          },
          children: ({more = 220}: {more: number}) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                {`+${more} more`}
              </Text>
            </View>
          ),
        },
      ],
    },
  ],
} as LayoutRoot;

export const LAYOUT5 = {
  spacing: 8,
  height: {
    cols: 1,
    spacing: 16,
  },
  layouts: [
    {
      id: 'column-1',
      type: LayoutType.COLUMN,
      layouts: [
        {
          id: 'item-1',
          flex: 2,
        },
        {
          id: 'item-2',
        },
      ],
    },
    {
      id: 'column-2',
      type: LayoutType.COLUMN,
      flex: 2,
      layouts: [
        {
          id: 'row-1',
          type: LayoutType.ROW,
          layouts: [
            {
              id: 'item-3',
            },
            {
              id: 'item-4',
            },
          ],
        },
        {
          id: 'item-5',
          flex: 2,
        },
      ],
    },
  ],
} as LayoutRoot;

export const LAYOUT6 = {
  ...LAYOUT5,
  reverseX: true,
} as LayoutRoot;

export const LAYOUT7 = {
  ...LAYOUT4,
  reverseY: true,
} as LayoutRoot;

export default {
  'layout-1': LAYOUT1,
  'layout-2': LAYOUT2,
  'layout-3': LAYOUT3,
  'layout-4': LAYOUT4,
  'layout-5': LAYOUT5,
  'layout-6': LAYOUT6,
  'layout-7': LAYOUT7,
};
