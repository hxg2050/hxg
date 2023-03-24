# Class: Text

文字显示组件
```ts
// 创建一个文字节点
const node = new Transform(Text);
// 设置组件宽度
node.size.x = 200;
// 获取文字组件
const text = node.getComponent(Text)!;
// 设置文字间距为5像素
text.letterPacing = 5;
// 设置行间距为5像素
text.lineSpace = 5;
// 文字居中显示
text.algin = TextAlgin.CENTER;
// 设置要显示的文字内容
text.value = '创建了一个文字组件';
// 设置字体跟随系统
text.fontFamily = 'system';
// 设置文字大小
text.fontSize = 20;
// 设置文字为斜体
text.italic = true;
// 设置文字加粗
text.bold = true;
// 设置文字超过宽度后自动换行，前提是设置了节点的宽度
text.autoWarp = true;
// 设置文字显示颜色为红色
text.color = '#FF0000';
```

## Hierarchy

- [`Container`](Container.md)

  ↳ **`Text`**

## Table of contents

### Constructors

- [constructor](Text.md#constructor)

### Properties

- [emitter](Text.md#emitter)
- [id](Text.md#id)
- [name](Text.md#name)
- [node](Text.md#node)
- [texture](Text.md#texture)

### Accessors

- [algin](Text.md#algin)
- [autoWarp](Text.md#autowarp)
- [bold](Text.md#bold)
- [color](Text.md#color)
- [fontFamily](Text.md#fontfamily)
- [fontSize](Text.md#fontsize)
- [italic](Text.md#italic)
- [letterPacing](Text.md#letterpacing)
- [lineSpace](Text.md#linespace)
- [value](Text.md#value)

### Methods

- [addComponent](Text.md#addcomponent)
- [destroy](Text.md#destroy)
- [getComponent](Text.md#getcomponent)
- [getComponents](Text.md#getcomponents)
- [getComponentsInChildren](Text.md#getcomponentsinchildren)
- [onDestroy](Text.md#ondestroy)
- [removeAllComponent](Text.md#removeallcomponent)
- [removeComponent](Text.md#removecomponent)
- [start](Text.md#start)
- [update](Text.md#update)

## Constructors

### constructor

• **new Text**(`transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Inherited from

[Container](Container.md).[constructor](Container.md#constructor)

#### Defined in

[src/core/component/Container.ts:5](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Container.ts#L5)

## Properties

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Inherited from

[Container](Container.md).[emitter](Container.md#emitter)

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Inherited from

[Container](Container.md).[id](Container.md#id)

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L12)

___

### name

• **name**: `string` = `''`

组件名

#### Inherited from

[Container](Container.md).[name](Container.md#name)

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

#### Inherited from

[Container](Container.md).[node](Container.md#node)

#### Defined in

[src/core/component/Component.ts:22](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L22)

___

### texture

• **texture**: [`TextTexture`](TextTexture.md)

记录文本实际宽度,需要动态计算

#### Defined in

[src/core/component/Text.ts:202](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L202)

## Accessors

### algin

• `get` **algin**(): [`TextAlgin`](../enums/TextAlgin.md)

水平对齐方式

#### Returns

[`TextAlgin`](../enums/TextAlgin.md)

#### Defined in

[src/core/component/Text.ts:76](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L76)

• `set` **algin**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`TextAlgin`](../enums/TextAlgin.md) |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:79](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L79)

___

### autoWarp

• `get` **autoWarp**(): `boolean`

是否自动换行
前提条件，设置了宽度，如果没设置宽度自动换行将不生效

#### Returns

`boolean`

#### Defined in

[src/core/component/Text.ts:167](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L167)

• `set` **autoWarp**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:170](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L170)

___

### bold

• `get` **bold**(): `boolean`

文字加粗

#### Returns

`boolean`

#### Defined in

[src/core/component/Text.ts:151](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L151)

• `set` **bold**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:154](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L154)

___

### color

• `get` **color**(): `string`

文字颜色

#### Returns

`string`

#### Defined in

[src/core/component/Text.ts:182](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L182)

• `set` **color**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:185](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L185)

___

### fontFamily

• `get` **fontFamily**(): `string`

字体

#### Returns

`string`

#### Defined in

[src/core/component/Text.ts:106](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L106)

• `set` **fontFamily**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:109](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L109)

___

### fontSize

• `get` **fontSize**(): `number`

字体大小

#### Returns

`number`

#### Defined in

[src/core/component/Text.ts:121](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L121)

• `set` **fontSize**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:124](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L124)

___

### italic

• `get` **italic**(): `boolean`

斜体

#### Returns

`boolean`

#### Defined in

[src/core/component/Text.ts:136](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L136)

• `set` **italic**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:139](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L139)

___

### letterPacing

• `get` **letterPacing**(): `number`

字间距

#### Returns

`number`

#### Defined in

[src/core/component/Text.ts:46](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L46)

• `set` **letterPacing**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:49](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L49)

___

### lineSpace

• `get` **lineSpace**(): `number`

行间距

#### Returns

`number`

#### Defined in

[src/core/component/Text.ts:61](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L61)

• `set` **lineSpace**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:64](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L64)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[src/core/component/Text.ts:91](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L91)

• `set` **value**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Defined in

[src/core/component/Text.ts:94](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L94)

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

[Container](Container.md).[addComponent](Container.md#addcomponent)

#### Defined in

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Inherited from

[Container](Container.md).[destroy](Container.md#destroy)

#### Defined in

[src/core/component/Component.ts:106](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L106)

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

[Container](Container.md).[getComponent](Container.md#getcomponent)

#### Defined in

[src/core/component/Component.ts:83](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L83)

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

[Container](Container.md).[getComponents](Container.md#getcomponents)

#### Defined in

[src/core/component/Component.ts:91](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L91)

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

[Container](Container.md).[getComponentsInChildren](Container.md#getcomponentsinchildren)

#### Defined in

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L99)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Overrides

[Container](Container.md).[onDestroy](Container.md#ondestroy)

#### Defined in

[src/core/component/Text.ts:220](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L220)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Inherited from

[Container](Container.md).[removeAllComponent](Container.md#removeallcomponent)

#### Defined in

[src/core/component/Component.ts:75](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L75)

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

[Container](Container.md).[removeComponent](Container.md#removecomponent)

#### Defined in

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L68)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Overrides

[Container](Container.md).[start](Container.md#start)

#### Defined in

[src/core/component/Text.ts:204](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Text.ts#L204)

___

### update

▸ **update**(`time`): `void`

每帧调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | 和上一帧的间隔时间 ms |

#### Returns

`void`

#### Inherited from

[Container](Container.md).[update](Container.md#update)

#### Defined in

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L52)
