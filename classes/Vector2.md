# Class: Vector2

二维向量

## Table of contents

### Constructors

- [constructor](Vector2.md#constructor)

### Properties

- [x](Vector2.md#x)
- [y](Vector2.md#y)

### Methods

- [add](Vector2.md#add)
- [clone](Vector2.md#clone)
- [mul](Vector2.md#mul)
- [normalized](Vector2.md#normalized)
- [set](Vector2.md#set)

## Constructors

### constructor

• **new Vector2**(`num?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | `number` |

#### Defined in

[src/core/math/Vector2.ts:6](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L6)

• **new Vector2**(`vector2`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector2` | [`Vector2`](Vector2.md) |

#### Defined in

[src/core/math/Vector2.ts:7](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L7)

• **new Vector2**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/core/math/Vector2.ts:8](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L8)

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/core/math/Vector2.ts:13](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L13)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/core/math/Vector2.ts:14](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L14)

## Methods

### add

▸ **add**(`num`): [`Vector2`](Vector2.md)

向量加法

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:44](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L44)

▸ **add**(`x`, `y`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:45](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L45)

▸ **add**(`vector2`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector2` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:46](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L46)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

克隆

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:35](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L35)

___

### mul

▸ **mul**(`num`): [`Vector2`](Vector2.md)

向量缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:62](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L62)

▸ **mul**(`x`, `y`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:63](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L63)

▸ **mul**(`num`): [`Vector2`](Vector2.md)

向量两个方向分别缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:67](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L67)

___

### normalized

▸ **normalized**(): [`Vector2`](Vector2.md)

向量归一化

#### Returns

[`Vector2`](Vector2.md)

归一化后的向量

#### Defined in

[src/core/math/Vector2.ts:85](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L85)

___

### set

▸ **set**(`num`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:16](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L16)

▸ **set**(`x`, `y`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:17](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L17)

▸ **set**(`vector2`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector2` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:18](https://github.com/hxg2050/hxg/blob/2de6870/src/core/math/Vector2.ts#L18)
