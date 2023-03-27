# Class: Word

[ECS](../modules/ECS.md).Word

## Table of contents

### Constructors

- [constructor](ECS.Word.md#constructor)

### Properties

- [components](ECS.Word.md#components)
- [map](ECS.Word.md#map)
- [systems](ECS.Word.md#systems)

### Methods

- [bindEntiy](ECS.Word.md#bindentiy)
- [createEntiy](ECS.Word.md#createentiy)
- [getEntiys](ECS.Word.md#getentiys)
- [registerComponent](ECS.Word.md#registercomponent)
- [registerSystem](ECS.Word.md#registersystem)
- [start](ECS.Word.md#start)
- [stop](ECS.Word.md#stop)
- [update](ECS.Word.md#update)

## Constructors

### constructor

• **new Word**()

## Properties

### components

• **components**: typeof [`Component`](ECS.Component.md)[] = `[]`

#### Defined in

[src/core/ecs/ECS.ts:83](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L83)

___

### map

• **map**: `Record`<`string`, [`Entiy`](ECS.Entiy.md)[]\> = `{}`

#### Defined in

[src/core/ecs/ECS.ts:82](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L82)

___

### systems

• **systems**: [`System`](ECS.System.md)[] = `[]`

#### Defined in

[src/core/ecs/ECS.ts:84](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L84)

## Methods

### bindEntiy

▸ **bindEntiy**(`entiy`, `components`): `void`

关联实体,不可随便调用

#### Parameters

| Name | Type |
| :------ | :------ |
| `entiy` | [`Entiy`](ECS.Entiy.md) |
| `components` | typeof [`Component`](ECS.Component.md)[] |

#### Returns

`void`

#### Defined in

[src/core/ecs/ECS.ts:109](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L109)

___

### createEntiy

▸ **createEntiy**(`components?`): [`Entiy`](ECS.Entiy.md)

在当前世界下创建一个实体

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `components` | typeof [`Component`](ECS.Component.md)[] | `[]` |

#### Returns

[`Entiy`](ECS.Entiy.md)

#### Defined in

[src/core/ecs/ECS.ts:156](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L156)

___

### getEntiys

▸ **getEntiys**(`...components`): [`Entiy`](ECS.Entiy.md)[]

获取实体

#### Parameters

| Name | Type |
| :------ | :------ |
| `...components` | `Constructor`<[`Component`](ECS.Component.md)\>[] |

#### Returns

[`Entiy`](ECS.Entiy.md)[]

#### Defined in

[src/core/ecs/ECS.ts:91](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L91)

___

### registerComponent

▸ **registerComponent**(`component`): `void`

注册组件，需要在世界开启前注册所有用到的组件
为什么要提前注册？提高性能，动态注册将需要额外的判断逻辑去处理

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | typeof [`Component`](ECS.Component.md) |

#### Returns

`void`

#### Defined in

[src/core/ecs/ECS.ts:128](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L128)

___

### registerSystem

▸ **registerSystem**(`system`): `void`

注册系统

#### Parameters

| Name | Type |
| :------ | :------ |
| `system` | [`System`](ECS.System.md) |

#### Returns

`void`

#### Defined in

[src/core/ecs/ECS.ts:147](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L147)

___

### start

▸ **start**(): `void`

开始运行世界

#### Returns

`void`

#### Defined in

[src/core/ecs/ECS.ts:166](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L166)

___

### stop

▸ **stop**(): `void`

暂停运行世界

#### Returns

`void`

#### Defined in

[src/core/ecs/ECS.ts:173](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L173)

___

### update

▸ **update**(`dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dt` | `number` |

#### Returns

`void`

#### Defined in

[src/core/ecs/ECS.ts:177](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ecs/ECS.ts#L177)
