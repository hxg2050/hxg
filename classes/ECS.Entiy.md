# Class: Entiy

[ECS](../modules/ECS.md).Entiy

## Table of contents

### Constructors

- [constructor](ECS.Entiy.md#constructor)

### Properties

- [components](ECS.Entiy.md#components)

### Methods

- [addComponent](ECS.Entiy.md#addcomponent)
- [getComponent](ECS.Entiy.md#getcomponent)
- [removeComponent](ECS.Entiy.md#removecomponent)

## Constructors

### constructor

• **new Entiy**(`word`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | [`Word`](ECS.Word.md) |

#### Defined in

[src/core/ecs/ECS.ts:28](https://github.com/hxg2050/hxg/blob/2de6870/src/core/ecs/ECS.ts#L28)

## Properties

### components

• **components**: typeof [`Component`](ECS.Component.md)[] = `[]`

#### Defined in

[src/core/ecs/ECS.ts:26](https://github.com/hxg2050/hxg/blob/2de6870/src/core/ecs/ECS.ts#L26)

## Methods

### addComponent

▸ **addComponent**<`T`\>(`classConstructor`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](ECS.Component.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classConstructor` | `Constructor`<`T`\> |

#### Returns

`T`

#### Defined in

[src/core/ecs/ECS.ts:39](https://github.com/hxg2050/hxg/blob/2de6870/src/core/ecs/ECS.ts#L39)

___

### getComponent

▸ **getComponent**<`T`\>(`classConstructor`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](ECS.Component.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classConstructor` | `Constructor`<`T`\> |

#### Returns

`T`

#### Defined in

[src/core/ecs/ECS.ts:32](https://github.com/hxg2050/hxg/blob/2de6870/src/core/ecs/ECS.ts#L32)

___

### removeComponent

▸ **removeComponent**<`T`\>(`classConstructor`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](ECS.Component.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classConstructor` | `Constructor`<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/core/ecs/ECS.ts:55](https://github.com/hxg2050/hxg/blob/2de6870/src/core/ecs/ECS.ts#L55)
