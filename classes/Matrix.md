# Class: Matrix

transform矩阵计算

## Table of contents

### Constructors

- [constructor](Matrix.md#constructor)

### Properties

- [angle](Matrix.md#angle)
- [offset](Matrix.md#offset)
- [scale](Matrix.md#scale)
- [size](Matrix.md#size)
- [skewX](Matrix.md#skewx)
- [skewY](Matrix.md#skewy)
- [translate](Matrix.md#translate)
- [value](Matrix.md#value)

### Methods

- [append](Matrix.md#append)
- [clone](Matrix.md#clone)
- [get](Matrix.md#get)
- [prepend](Matrix.md#prepend)
- [set](Matrix.md#set)
- [setTransform](Matrix.md#settransform)

## Constructors

### constructor

• **new Matrix**()

## Properties

### angle

• **angle**: `number` = `0`

旋转角度

#### Defined in

[src/core/math/Matrix.ts:61](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L61)

___

### offset

• **offset**: [`Vector2`](Vector2.md)

锚点

#### Defined in

[src/core/math/Matrix.ts:36](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L36)

___

### scale

• **scale**: [`Vector2`](Vector2.md)

缩放

#### Defined in

[src/core/math/Matrix.ts:41](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L41)

___

### size

• **size**: [`Vector2`](Vector2.md)

大小，可用于计算锚点

#### Defined in

[src/core/math/Matrix.ts:31](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L31)

___

### skewX

• **skewX**: `number` = `0`

倾斜，未实现

#### Defined in

[src/core/math/Matrix.ts:50](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L50)

___

### skewY

• **skewY**: `number` = `0`

#### Defined in

[src/core/math/Matrix.ts:51](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L51)

___

### translate

• **translate**: [`Vector2`](Vector2.md)

位置，移动

#### Defined in

[src/core/math/Matrix.ts:56](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L56)

___

### value

• **value**: [`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`]

#### Defined in

[src/core/math/Matrix.ts:22](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L22)

## Methods

### append

▸ **append**(`matrix`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix`](Matrix.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/core/math/Matrix.ts:112](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L112)

___

### clone

▸ **clone**(): [`Matrix`](Matrix.md)

克隆当前矩阵

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/core/math/Matrix.ts:171](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L171)

___

### get

▸ **get**(): [`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`]

获取矩阵数据

#### Returns

[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`]

#### Defined in

[src/core/math/Matrix.ts:181](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L181)

___

### prepend

▸ **prepend**(`matrix`): [`Matrix`](Matrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix`](Matrix.md) |

#### Returns

[`Matrix`](Matrix.md)

#### Defined in

[src/core/math/Matrix.ts:129](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L129)

___

### set

▸ **set**(`...args`): `void`

设置矩阵数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`] |

#### Returns

`void`

#### Defined in

[src/core/math/Matrix.ts:108](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L108)

___

### setTransform

▸ **setTransform**(`transform`): `void`

设置节点信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> | 节点 |

#### Returns

`void`

#### Defined in

[src/core/math/Matrix.ts:67](https://github.com/hxg2050/hxg/blob/51e5ed2/src/core/math/Matrix.ts#L67)
