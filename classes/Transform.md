# Class: Transform<T\>

节点，用于构建整个项目的节点树，也是所有组件挂载的节点
```ts
const node = new Transform();
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Container`](Container.md) = [`Container`](Container.md) |

## Table of contents

### Constructors

- [constructor](Transform.md#constructor)

### Properties

- [\_anchor](Transform.md#_anchor)
- [\_rotation](Transform.md#_rotation)
- [active](Transform.md#active)
- [alpha](Transform.md#alpha)
- [children](Transform.md#children)
- [components](Transform.md#components)
- [container](Transform.md#container)
- [deliver](Transform.md#deliver)
- [emitter](Transform.md#emitter)
- [id](Transform.md#id)
- [name](Transform.md#name)
- [parent](Transform.md#parent)
- [pierce](Transform.md#pierce)
- [Event](Transform.md#event)

### Accessors

- [anchor](Transform.md#anchor)
- [position](Transform.md#position)
- [rotation](Transform.md#rotation)
- [scale](Transform.md#scale)
- [size](Transform.md#size)
- [touch](Transform.md#touch)

### Methods

- [addChild](Transform.md#addchild)
- [addChildAt](Transform.md#addchildat)
- [addComponent](Transform.md#addcomponent)
- [destroy](Transform.md#destroy)
- [find](Transform.md#find)
- [getComponent](Transform.md#getcomponent)
- [getComponents](Transform.md#getcomponents)
- [getComponentsInChildren](Transform.md#getcomponentsinchildren)
- [getOffset](Transform.md#getoffset)
- [getRectangle](Transform.md#getrectangle)
- [getWordPoisition](Transform.md#getwordpoisition)
- [getWordRotation](Transform.md#getwordrotation)
- [getWordScale](Transform.md#getwordscale)
- [removeAllComponent](Transform.md#removeallcomponent)
- [removeChild](Transform.md#removechild)
- [removeChildAt](Transform.md#removechildat)
- [removeChildren](Transform.md#removechildren)
- [removeComponent](Transform.md#removecomponent)
- [update](Transform.md#update)

## Constructors

### constructor

• **new Transform**<`T`\>(`classConstructor?`)

一个节点只能挂载一个视觉组件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Container`](Container.md)<`T`\> = [`Container`](Container.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classConstructor?` | [`Constructor`](../modules.md#constructor)<`T`\> |

#### Defined in

[src/core/transform/Transform.ts:65](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L65)

## Properties

### \_anchor

• **\_anchor**: [`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:115](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L115)

___

### \_rotation

• **\_rotation**: `number` = `0`

#### Defined in

[src/core/transform/Transform.ts:104](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L104)

___

### active

• **active**: `boolean` = `true`

#### Defined in

[src/core/transform/Transform.ts:31](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L31)

___

### alpha

• **alpha**: `number` = `1`

透明度

#### Defined in

[src/core/transform/Transform.ts:163](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L163)

___

### children

• **children**: [`Transform`](Transform.md)<[`Container`](Container.md)\>[] = `[]`

子节点

#### Defined in

[src/core/transform/Transform.ts:248](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L248)

___

### components

• **components**: [`Component`](Component.md)[] = `[]`

所有组件
默认包含一个容器组件，当添加了其他容器组件后自动替换，只能包含一个视觉组件

#### Defined in

[src/core/transform/Transform.ts:132](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L132)

___

### container

• **container**: `T`

#### Defined in

[src/core/transform/Transform.ts:126](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L126)

___

### deliver

• **deliver**: `boolean` = `true`

是否继续向父元素传递事件（冒泡）

#### Defined in

[src/core/transform/Transform.ts:154](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L154)

___

### emitter

• **emitter**: `StoreEmitter`<[`TransformEvent`](../modules.md#transformevent)\>

#### Defined in

[src/core/transform/Transform.ts:34](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L34)

___

### id

• **id**: `number` = `0`

#### Defined in

[src/core/transform/Transform.ts:28](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L28)

___

### name

• **name**: `string` = `'node'`

#### Defined in

[src/core/transform/Transform.ts:33](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L33)

___

### parent

• `Optional` **parent**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

父节点

#### Defined in

[src/core/transform/Transform.ts:137](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L137)

___

### pierce

• **pierce**: `boolean` = `false`

是否穿透，可触发非父元素外的其它元素事件

#### Defined in

[src/core/transform/Transform.ts:158](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L158)

___

### Event

▪ `Static` **Event**: `Object`

事件

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ADDED` | ``"ADDED"`` | 当添加到显示舞台时 |
| `CHILD_ADDED` | ``"CHILD_ADDED"`` | 当添加新的字节点时 |
| `RESIZE` | ``"RESIZE"`` | 尺寸发生变化时 |
| `TICKER_AFTER` | ``"TICKER_AFTER"`` | 帧刷新后 |
| `TICKER_BEFORE` | ``"TICKER_BEFORE"`` | 帧刷新前 |

#### Defined in

[src/core/transform/Transform.ts:38](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L38)

## Accessors

### anchor

• `get` **anchor**(): [`Vector2`](Vector2.md)

锚点

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:119](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L119)

• `set` **anchor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:122](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L122)

___

### position

• `get` **position**(): [`Vector2`](Vector2.md)

位置

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:74](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L74)

• `set` **position**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:77](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L77)

___

### rotation

• `get` **rotation**(): `number`

旋转

#### Returns

`number`

#### Defined in

[src/core/transform/Transform.ts:108](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L108)

• `set` **rotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:111](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L111)

___

### scale

• `get` **scale**(): [`Vector2`](Vector2.md)

缩放

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:97](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L97)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:100](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L100)

___

### size

• `get` **size**(): [`Vector2`](Vector2.md)

大小

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:85](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L85)

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:88](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L88)

___

### touch

• `get` **touch**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/transform/Transform.ts:147](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L147)

• `set` **touch**(`val`): `void`

触摸事件，默认关闭

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:143](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L143)

## Methods

### addChild

▸ **addChild**(`transform`): `void`

插入一个子节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> | 待插入的节点 |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:254](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L254)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): `void`

在指定位置插入节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Transform`](Transform.md)<[`Container`](Container.md)\> | 待插入的节点 |
| `index` | `number` | 要插入的位置 |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:267](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L267)

___

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

#### Defined in

[src/core/transform/Transform.ts:169](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L169)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:316](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L316)

___

### find

▸ **find**(`path`): [`Transform`](Transform.md)<[`Container`](Container.md)\>

路径查找节点
```ts
// 创建身体节点
const body = new Transform();
// 设置名称
body.name = 'body';
// 创建头部节点
const head = new Transform();
// 设置名称
head.name = 'head';
// 创建左眼节点
const leftEye = new Transform();
// 设置名称
leftEye.name = 'lEye';
// 创建右眼节点
const rightEye = new Transform();
// 设置名称
rightEye.name = 'rEye';
// 将右眼添加到头部
head.addChild(leftEye);
// 将左眼添加到头部
head.addChild(rightEye);
// 将头部添加到身体
body.addChild(head);
// 从身体获取左眼
body.find('head/lEye');
// 从身体获取右眼
body.find('head/rEye');
```

**`Path`**

- 路径

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |

#### Returns

[`Transform`](Transform.md)<[`Container`](Container.md)\>

#### Defined in

[src/core/transform/Transform.ts:353](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L353)

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

#### Defined in

[src/core/transform/Transform.ts:203](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L203)

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

- 所有满足条件的组件

#### Defined in

[src/core/transform/Transform.ts:211](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L211)

___

### getComponentsInChildren

▸ **getComponentsInChildren**<`T`\>(`classConstructor`): `T`[]

从子节点获取所有组件，不会包含当前节点
递归查询所有子节点的

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

- 所有满足条件的组件

#### Defined in

[src/core/transform/Transform.ts:227](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L227)

___

### getOffset

▸ **getOffset**(): [`Vector2`](Vector2.md)

获取右上角偏真实移量

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:371](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L371)

___

### getRectangle

▸ **getRectangle**(): [`Vector2`](Vector2.md)

获取尺寸，计算宽高，缩放之后的尺寸实尺寸

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:418](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L418)

___

### getWordPoisition

▸ **getWordPoisition**(): [`Vector2`](Vector2.md)

获取相对世界坐标

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:378](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L378)

___

### getWordRotation

▸ **getWordRotation**(): `number`

获取相对于世界的旋转

#### Returns

`number`

#### Defined in

[src/core/transform/Transform.ts:390](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L390)

___

### getWordScale

▸ **getWordScale**(): [`Vector2`](Vector2.md)

获取相对于世界的缩放

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/transform/Transform.ts:404](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L404)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:193](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L193)

___

### removeChild

▸ **removeChild**(`transform`): `void`

移除一个节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> | 将要移除的节点 |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:279](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L279)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`Transform`](Transform.md)<[`Container`](Container.md)\>

移除一个指定位置的元素

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 要移除节点的位置 |

#### Returns

[`Transform`](Transform.md)<[`Container`](Container.md)\>

#### Defined in

[src/core/transform/Transform.ts:292](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L292)

___

### removeChildren

▸ **removeChildren**(): `void`

移除所有子元素

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:301](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L301)

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

#### Defined in

[src/core/transform/Transform.ts:182](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L182)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/core/transform/Transform.ts:309](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/transform/Transform.ts#L309)
