# React Native JSON Grid List

This library will help you create impressive grid lists like these.

| List 1                     | List 2                     |
| -------------------------- | -------------------------- |
| ![](docs/images/list1.png) | ![](docs/images/list2.png) |

| List 3                     | List 4                     |
| -------------------------- | -------------------------- |
| ![](docs/images/list3.png) | ![](docs/images/list4.png) |

## Getting started

Two main components are exported from this library: `FlatGrid` and `GridItem`. The most common use case is just using the first one, you won't need to use `GridItem` unless you want to show a grid outside of a list.

Many grid templates are already created so you won't have to make your owns if you are comfortable with the ones which are included.

### Installing

You can install the package via npm or yarn.

```bash
npm install -S react-native-json-grid-list
```

or

```bash
yarn add react-native-json-grid-list
```

### Usage

#### Usage (FlatGrid)

Import the `FlatGrid` component.

```javascript
import FlatGrid, {LAYOUTS} from 'react-native-json-grid-list';
```

Now let's define what will be the content of our items. In this case, we just want a random photo from [Unspash](https://unsplash.com).

```javascript
const ITEM_CONTENT = {
  photo: {
    uri: 'https://source.unsplash.com/random',
  },
};
```

Render our grid list.

```javascript
<FlatGrid
  data={[
    {
      layout: 'layout-1',
      items: {
        'item-1': ITEM_CONTENT,
        'item-2': ITEM_CONTENT,
        'item-3': ITEM_CONTENT,
        'item-4': ITEM_CONTENT,
      },
    },
  ]}
  layouts={LAYOUTS}
  rowSeparator={8}
  paddingHorizontal={8}
  showsVerticalScrollIndicator={false}
/>
```

##### Properties

| Property          | Type                                           | Default value                         |  Description           |
| ----------------- | ---------------------------------------------- | ------------------------------------- | ---------------------- |
| rowSeparator      | number                                         |                                       | Separator between rows |
| paddingHorizontal | number                                         |                                       | Padding horizontal     |
| layouts           | [Layouts](src/components/FlatGrid/types.ts)    | [LAYOUTS](src/models/Layout/mock.tsx) | Layout definition      |
| data              | [ItemType[]](src/components/FlatGrid/types.ts) |                                       | Items                  |

## How to create your own layouts

Just the same way as you would nest components to get the layout you want, you can create your own grid layouts writing it in JSON format following some rules.

We got three layout types:

1. Rows:

```js
{
  "id": "row-1",
  "type": "row",
  "flex": 2,
  "layouts": [
    // ...more rows, columns or items
  ]
}
```

2. Columns:

```js
// You can omit flex attribute if it's equal to 1
{
  "id": "col-1",
  "type": "column",
  // "flex": 1,
  "layouts": [
    // ...more rows, columns or items
  ]
}
```

3. Items:

```js
// You can omit flex attribute if it's equal to 1
{
  "id": "item-1",
  // "flex": 1,

  // add an overlay
  "overlay": {
    "color": "#f00",
    "opacity": .6
  }
}
```

### Layout examples

```js
// Note that you can omit flex when it's equal to 1
{
  "spacing": 8,
  "height": 350,
  "layouts": [
    {
      "id": "column-1",
      "type": "column",
      "layouts": [
        {
          "id": "item-1",
          "flex": 2,
        },
        {
          "id": "item-2",
          // "flex": 1
        },
      ],
    },
    {
      "id": "item-3"
      // "flex": 1
    },
  ]
}
```
