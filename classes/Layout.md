# Class: Layout

控制布局
当添加了控制布局组件后，原本的position、size和scale可能会被自动管控手动设置将不会生效
```ts
// 创建节点
const node = new Transform();
// 添加布局组件
const layout = node.addComponent(Layout);
// 设置铺满整个父节点
layout.left = 0;
layout.right = 0;
layout.top = 0;
layout.right = 0;
// 放入父节点
parent.addChild(node);
```

## Hierarchy

- [`Component`](Component.md)

  ↳ **`Layout`**

## Table of contents

### Constructors

- [constructor](Layout.md#constructor)

### Properties

- [\_markResize](Layout.md#_markresize)
- [emitter](Layout.md#emitter)
- [id](Layout.md#id)
- [name](Layout.md#name)
- [node](Layout.md#node)

### Accessors

- [bottom](Layout.md#bottom)
- [horizontal](Layout.md#horizontal)
- [left](Layout.md#left)
- [right](Layout.md#right)
- [top](Layout.md#top)
- [vertical](Layout.md#vertical)

### Methods

- [addComponent](Layout.md#addcomponent)
- [destroy](Layout.md#destroy)
- [getComponent](Layout.md#getcomponent)
- [getComponents](Layout.md#getcomponents)
- [getComponentsInChildren](Layout.md#getcomponentsinchildren)
- [getOffsetLocation](Layout.md#getoffsetlocation)
- [onDestroy](Layout.md#ondestroy)
- [removeAllComponent](Layout.md#removeallcomponent)
- [removeComponent](Layout.md#removecomponent)
- [resize](Layout.md#resize)
- [saveNewSize](Layout.md#savenewsize)
- [start](Layout.md#start)
- [update](Layout.md#update)

## Constructors

### constructor

• **new Layout**(`transform`)

组件不能单独实例化，必须通过Transform.addComponent创建
```ts
const node = new Transform();
const componet = node.addComponent(Component);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Inherited from

[Component](Component.md).[constructor](Component.md#constructor)

#### Defined in

[src/core/component/Component.ts:37](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L37)

## Properties

### \_markResize

• **\_markResize**: `boolean` = `false`

#### Defined in

[src/core/component/Layout.ts:157](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L157)

___

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Inherited from

[Component](Component.md).[emitter](Component.md#emitter)

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Inherited from

[Component](Component.md).[id](Component.md#id)

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L12)

___

### name

• **name**: `string` = `''`

组件名

#### Inherited from

[Component](Component.md).[name](Component.md#name)

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

#### Inherited from

[Component](Component.md).[node](Component.md#node)

#### Defined in

[src/core/component/Component.ts:22](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L22)

## Accessors

### bottom

• `get` **bottom**(): `number`

相对底部的距离

#### Returns

`number`

#### Defined in

[src/core/component/Layout.ts:67](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L67)

• `set` **bottom**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:70](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L70)

___

### horizontal

• `get` **horizontal**(): `number`

垂直居中
top 和 bottom 将失效
注意：如果要让节点真正实现垂直居中需要设置节点的`anchor`
```ts
const node = new Transform();
node.anchor.y = 0.5;
node.addComponent(Layout);
```

#### Returns

`number`

#### Defined in

[src/core/component/Layout.ts:109](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L109)

• `set` **horizontal**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:112](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L112)

___

### left

• `get` **left**(): `number`

相对左边的距离

#### Returns

`number`

#### Defined in

[src/core/component/Layout.ts:31](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L31)

• `set` **left**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:34](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L34)

___

### right

• `get` **right**(): `number`

相对右边的距离

#### Returns

`number`

#### Defined in

[src/core/component/Layout.ts:55](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L55)

• `set` **right**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:58](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L58)

___

### top

• `get` **top**(): `number`

相对顶部的距离

#### Returns

`number`

#### Defined in

[src/core/component/Layout.ts:43](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L43)

• `set` **top**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:46](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L46)

___

### vertical

• `get` **vertical**(): `number`

水平剧中
left 和 right 将失效
注意：如果要让节点真正实现水平居中需要设置节点的`anchor`
```ts
const node = new Transform();
node.anchor.x = 0.5;
node.addComponent(Layout);
```

#### Returns

`number`

#### Defined in

[src/core/component/Layout.ts:87](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L87)

• `set` **vertical**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:90](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L90)

## Methods

### addComponent

▸ **addComponent**<`T`\>(`classConstructor`): `T`

添加一个组件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classConstructor` | [`Constructor`](../modules.md#constructor)<`T`\> | 要挂载的组件 |

#### Returns

`T`

#### Inherited from

[Component](Component.md).[addComponent](Component.md#addcomponent)

#### Defined in

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Inherited from

[Component](Component.md).[destroy](Component.md#destroy)

#### Defined in

[src/core/component/Component.ts:106](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L106)

___

### getComponent

▸ **getComponent**<`T`\>(`classConstructor`): `T`

获取单个组件，获取首个匹配到的组件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classConstructor` | [`Constructor`](../modules.md#constructor)<`T`\> | 组件 |

#### Returns

`T`

#### Inherited from

[Component](Component.md).[getComponent](Component.md#getcomponent)

#### Defined in

[src/core/component/Component.ts:83](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L83)

___

### getComponents

▸ **getComponents**<`T`\>(`classConstructor`): `T`[]

获取所有组件

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classConstructor` | [`Constructor`](../modules.md#constructor)<`T`\> | 组件 |

#### Returns

`T`[]

#### Inherited from

[Component](Component.md).[getComponents](Component.md#getcomponents)

#### Defined in

[src/core/component/Component.ts:91](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L91)

___

### getComponentsInChildren

▸ **getComponentsInChildren**<`T`\>(`classConstructor`): `T`[]

从子节点获取所有组件，不会包含当前节点

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classConstructor` | [`Constructor`](../modules.md#constructor)<`T`\> | 组件 |

#### Returns

`T`[]

#### Inherited from

[Component](Component.md).[getComponentsInChildren](Component.md#getcomponentsinchildren)

#### Defined in

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L99)

___

### getOffsetLocation

▸ **getOffsetLocation**(): [`Vector2`](Vector2.md)

获取本地偏移

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/component/Layout.ts:149](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L149)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Inherited from

[Component](Component.md).[onDestroy](Component.md#ondestroy)

#### Defined in

[src/core/component/Component.ts:113](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L113)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Inherited from

[Component](Component.md).[removeAllComponent](Component.md#removeallcomponent)

#### Defined in

[src/core/component/Component.ts:75](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L75)

___

### removeComponent

▸ **removeComponent**(`component`): `void`

移除一个组件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | [`Component`](Component.md) | 将要移除的组件 |

#### Returns

`void`

#### Inherited from

[Component](Component.md).[removeComponent](Component.md#removecomponent)

#### Defined in

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L68)

___

### resize

▸ **resize**(): `void`

重新计算布局/矫正布局
```ts
const node = new Transform();
const layout = node.addComponent(Layout);
node.anchor.set(0.5, 0.5);
layout.resize();
```

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:168](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L168)

___

### saveNewSize

▸ **saveNewSize**(): `void`

当挂载节点尺寸发生变化，且需要重新动态计算时调用
将保存当前组件的位置和大小状态

#### Returns

`void`

#### Defined in

[src/core/component/Layout.ts:138](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L138)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Overrides

[Component](Component.md).[start](Component.md#start)

#### Defined in

[src/core/component/Layout.ts:121](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L121)

___

### update

▸ **update**(): `void`

每帧调用

#### Returns

`void`

#### Overrides

[Component](Component.md).[update](Component.md#update)

#### Defined in

[src/core/component/Layout.ts:153](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Layout.ts#L153)
