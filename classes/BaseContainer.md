# Class: BaseContainer

显示对象

## Hierarchy

- [`Component`](Component.md)

  ↳ **`BaseContainer`**

  ↳↳ [`Container`](Container.md)

  ↳↳ [`Sprite`](Sprite.md)

## Implements

- [`IContainer`](../interfaces/IContainer.md)

## Table of contents

### Constructors

- [constructor](BaseContainer.md#constructor)

### Properties

- [emitter](BaseContainer.md#emitter)
- [id](BaseContainer.md#id)
- [name](BaseContainer.md#name)
- [node](BaseContainer.md#node)

### Methods

- [addComponent](BaseContainer.md#addcomponent)
- [destroy](BaseContainer.md#destroy)
- [getComponent](BaseContainer.md#getcomponent)
- [getComponents](BaseContainer.md#getcomponents)
- [getComponentsInChildren](BaseContainer.md#getcomponentsinchildren)
- [onDestroy](BaseContainer.md#ondestroy)
- [removeAllComponent](BaseContainer.md#removeallcomponent)
- [removeComponent](BaseContainer.md#removecomponent)
- [start](BaseContainer.md#start)
- [update](BaseContainer.md#update)

## Constructors

### constructor

• **new BaseContainer**(`transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Overrides

[Component](Component.md).[constructor](Component.md#constructor)

#### Defined in

[src/core/component/BaseContainer.ts:6](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/BaseContainer.ts#L6)

## Properties

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Inherited from

[Component](Component.md).[emitter](Component.md#emitter)

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Inherited from

[Component](Component.md).[id](Component.md#id)

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L12)

___

### name

• **name**: `string` = `''`

组件名

#### Inherited from

[Component](Component.md).[name](Component.md#name)

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

#### Inherited from

[Component](Component.md).[node](Component.md#node)

#### Defined in

[src/core/component/Component.ts:22](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L22)

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

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Implementation of

[IContainer](../interfaces/IContainer.md).[destroy](../interfaces/IContainer.md#destroy)

#### Inherited from

[Component](Component.md).[destroy](Component.md#destroy)

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

[Component](Component.md).[getComponent](Component.md#getcomponent)

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

[Component](Component.md).[getComponents](Component.md#getcomponents)

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

[Component](Component.md).[getComponentsInChildren](Component.md#getcomponentsinchildren)

#### Defined in

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L99)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Implementation of

[IContainer](../interfaces/IContainer.md).[onDestroy](../interfaces/IContainer.md#ondestroy)

#### Inherited from

[Component](Component.md).[onDestroy](Component.md#ondestroy)

#### Defined in

[src/core/component/Component.ts:113](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L113)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Inherited from

[Component](Component.md).[removeAllComponent](Component.md#removeallcomponent)

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

[Component](Component.md).[removeComponent](Component.md#removecomponent)

#### Defined in

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L68)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Implementation of

[IContainer](../interfaces/IContainer.md).[start](../interfaces/IContainer.md#start)

#### Overrides

[Component](Component.md).[start](Component.md#start)

#### Defined in

[src/core/component/BaseContainer.ts:11](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/BaseContainer.ts#L11)

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

#### Implementation of

[IContainer](../interfaces/IContainer.md).[update](../interfaces/IContainer.md#update)

#### Inherited from

[Component](Component.md).[update](Component.md#update)

#### Defined in

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L52)
