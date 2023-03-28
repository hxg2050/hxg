# Class: Button

处理点击事件
```ts
// 创建节点
const node = new Transform();
// 添加布局组件
const button = node.addComponent(Button);
const target = this;
function onClick() {
     console.log('click');
     button.remove(onClick, target);
}
// 添加点击事件
button.add(onClick, target)
// 放入父节点
parent.addChild(node);
```

## Hierarchy

- [`Component`](Component.md)

  ↳ **`Button`**

## Table of contents

### Constructors

- [constructor](Button.md#constructor)

### Properties

- [callback](Button.md#callback)
- [difftime](Button.md#difftime)
- [emitter](Button.md#emitter)
- [id](Button.md#id)
- [name](Button.md#name)
- [node](Button.md#node)

### Methods

- [add](Button.md#add)
- [addComponent](Button.md#addcomponent)
- [destroy](Button.md#destroy)
- [getComponent](Button.md#getcomponent)
- [getComponents](Button.md#getcomponents)
- [getComponentsInChildren](Button.md#getcomponentsinchildren)
- [onDestroy](Button.md#ondestroy)
- [remove](Button.md#remove)
- [removeAllComponent](Button.md#removeallcomponent)
- [removeComponent](Button.md#removecomponent)
- [start](Button.md#start)
- [update](Button.md#update)

## Constructors

### constructor

• **new Button**(`transform`)

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

### callback

• **callback**: `Map`<`any`, `Function`[]\>

#### Defined in

[src/core/component/Button.ts:62](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Button.ts#L62)

___

### difftime

• **difftime**: `number` = `200`

起落时间间隔

#### Defined in

[src/core/component/Button.ts:60](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Button.ts#L60)

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

## Methods

### add

▸ **add**(`callback`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |
| `target` | `any` |

#### Returns

`void`

#### Defined in

[src/core/component/Button.ts:64](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Button.ts#L64)

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

### remove

▸ **remove**(`callback`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |
| `target` | `any` |

#### Returns

`void`

#### Defined in

[src/core/component/Button.ts:73](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Button.ts#L73)

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

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Overrides

[Component](Component.md).[start](Component.md#start)

#### Defined in

[src/core/component/Button.ts:24](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Button.ts#L24)

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

[Component](Component.md).[update](Component.md#update)

#### Defined in

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L52)
