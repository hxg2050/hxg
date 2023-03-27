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

• **new Vector2**(`x?`, `y?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Defined in

[src/core/math/Vector2.ts:6](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L6)

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/core/math/Vector2.ts:11](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L11)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/core/math/Vector2.ts:12](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L12)

## Methods

### add

▸ **add**(`x`, `y`): [`Vector2`](Vector2.md)

向量加法

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:39](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L39)

▸ **add**(`num`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:40](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L40)

▸ **add**(`vector2`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector2` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:41](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L41)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

克隆

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:30](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L30)

___

### mul

▸ **mul**(`x`, `y`): [`Vector2`](Vector2.md)

向量缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:58](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L58)

▸ **mul**(`num`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:59](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L59)

▸ **mul**(`num`): [`Vector2`](Vector2.md)

向量两个方向分别缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:63](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L63)

___

### normalized

▸ **normalized**(): [`Vector2`](Vector2.md)

向量归一化

#### Returns

[`Vector2`](Vector2.md)

归一化后的向量

#### Defined in

[src/core/math/Vector2.ts:81](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L81)

___

### set

▸ **set**(`x`, `y`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:14](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L14)

▸ **set**(`vector2`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector2` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/core/math/Vector2.ts:15](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/math/Vector2.ts#L15)
