# Class: Component

## Hierarchy

- **`Component`**

  ↳ [`BaseContainer`](BaseContainer.md)

  ↳ [`Layout`](Layout.md)

  ↳ [`Audio`](Audio.md)

  ↳ [`Button`](Button.md)

## Implements

- [`IComponent`](../interfaces/IComponent.md)

## Table of contents

### Constructors

- [constructor](Component.md#constructor)

### Properties

- [emitter](Component.md#emitter)
- [id](Component.md#id)
- [name](Component.md#name)
- [node](Component.md#node)

### Methods

- [addComponent](Component.md#addcomponent)
- [destroy](Component.md#destroy)
- [getComponent](Component.md#getcomponent)
- [getComponents](Component.md#getcomponents)
- [getComponentsInChildren](Component.md#getcomponentsinchildren)
- [onDestroy](Component.md#ondestroy)
- [removeAllComponent](Component.md#removeallcomponent)
- [removeComponent](Component.md#removecomponent)
- [start](Component.md#start)
- [update](Component.md#update)

## Constructors

### constructor

• **new Component**(`transform`)

组件不能单独实例化，必须通过Transform.addComponent创建
```ts
const node = new Transform();
const componet = node.addComponent(Component);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Defined in

[src/core/component/Component.ts:37](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L37)

## Properties

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L12)

___

### name

• **name**: `string` = `''`

组件名

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

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

#### Defined in

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[destroy](../interfaces/IComponent.md#destroy)

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

#### Defined in

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L99)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onDestroy](../interfaces/IComponent.md#ondestroy)

#### Defined in

[src/core/component/Component.ts:113](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L113)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

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

#### Defined in

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L68)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[start](../interfaces/IComponent.md#start)

#### Defined in

[src/core/component/Component.ts:45](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L45)

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

[IComponent](../interfaces/IComponent.md).[update](../interfaces/IComponent.md#update)

#### Defined in

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/component/Component.ts#L52)
