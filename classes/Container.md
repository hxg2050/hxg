# Class: Container

显示对象

## Hierarchy

- [`BaseContainer`](BaseContainer.md)

  ↳ **`Container`**

  ↳↳ [`Text`](Text.md)

## Table of contents

### Constructors

- [constructor](Container.md#constructor)

### Properties

- [emitter](Container.md#emitter)
- [id](Container.md#id)
- [name](Container.md#name)
- [node](Container.md#node)

### Methods

- [addComponent](Container.md#addcomponent)
- [destroy](Container.md#destroy)
- [getComponent](Container.md#getcomponent)
- [getComponents](Container.md#getcomponents)
- [getComponentsInChildren](Container.md#getcomponentsinchildren)
- [onDestroy](Container.md#ondestroy)
- [removeAllComponent](Container.md#removeallcomponent)
- [removeComponent](Container.md#removecomponent)
- [start](Container.md#start)
- [update](Container.md#update)

## Constructors

### constructor

• **new Container**(`transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Overrides

[BaseContainer](BaseContainer.md).[constructor](BaseContainer.md#constructor)

#### Defined in

[src/core/component/Container.ts:5](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Container.ts#L5)

## Properties

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Inherited from

[BaseContainer](BaseContainer.md).[emitter](BaseContainer.md#emitter)

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Inherited from

[BaseContainer](BaseContainer.md).[id](BaseContainer.md#id)

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L12)

___

### name

• **name**: `string` = `''`

组件名

#### Inherited from

[BaseContainer](BaseContainer.md).[name](BaseContainer.md#name)

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

#### Inherited from

[BaseContainer](BaseContainer.md).[node](BaseContainer.md#node)

#### Defined in

[src/core/component/Component.ts:22](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L22)

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

[BaseContainer](BaseContainer.md).[addComponent](BaseContainer.md#addcomponent)

#### Defined in

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[destroy](BaseContainer.md#destroy)

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

[BaseContainer](BaseContainer.md).[getComponent](BaseContainer.md#getcomponent)

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

[BaseContainer](BaseContainer.md).[getComponents](BaseContainer.md#getcomponents)

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

[BaseContainer](BaseContainer.md).[getComponentsInChildren](BaseContainer.md#getcomponentsinchildren)

#### Defined in

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L99)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[onDestroy](BaseContainer.md#ondestroy)

#### Defined in

[src/core/component/Component.ts:113](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L113)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[removeAllComponent](BaseContainer.md#removeallcomponent)

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

[BaseContainer](BaseContainer.md).[removeComponent](BaseContainer.md#removecomponent)

#### Defined in

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L68)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[start](BaseContainer.md#start)

#### Defined in

[src/core/component/BaseContainer.ts:11](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/BaseContainer.ts#L11)

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

[BaseContainer](BaseContainer.md).[update](BaseContainer.md#update)

#### Defined in

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L52)
