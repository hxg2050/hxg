# Class: TextTexture

文字

## Hierarchy

- [`BaseTexture`](BaseTexture.md)

  ↳ **`TextTexture`**

## Table of contents

### Constructors

- [constructor](TextTexture.md#constructor)

### Properties

- [height](TextTexture.md#height)
- [source](TextTexture.md#source)
- [text](TextTexture.md#text)
- [width](TextTexture.md#width)
- [x](TextTexture.md#x)
- [y](TextTexture.md#y)

### Methods

- [update](TextTexture.md#update)

## Constructors

### constructor

• **new TextTexture**(`text`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`Text`](Text.md) |

#### Overrides

[BaseTexture](BaseTexture.md).[constructor](BaseTexture.md#constructor)

#### Defined in

[src/core/texture/TextTexture.ts:128](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/TextTexture.ts#L128)

## Properties

### height

• **height**: `number` = `0`

截取高度

#### Inherited from

[BaseTexture](BaseTexture.md).[height](BaseTexture.md#height)

#### Defined in

[src/core/texture/BaseTexture.ts:20](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/BaseTexture.ts#L20)

___

### source

• `Optional` **source**: `ImageData`

实际要绘制的内容

#### Defined in

[src/core/texture/TextTexture.ts:126](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/TextTexture.ts#L126)

___

### text

• **text**: [`Text`](Text.md)

要显示的文本组件

#### Defined in

[src/core/texture/TextTexture.ts:121](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/TextTexture.ts#L121)

___

### width

• **width**: `number` = `0`

截取宽度

#### Inherited from

[BaseTexture](BaseTexture.md).[width](BaseTexture.md#width)

#### Defined in

[src/core/texture/BaseTexture.ts:16](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/BaseTexture.ts#L16)

___

### x

• **x**: `number` = `0`

记录x偏移

#### Inherited from

[BaseTexture](BaseTexture.md).[x](BaseTexture.md#x)

#### Defined in

[src/core/texture/BaseTexture.ts:8](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/BaseTexture.ts#L8)

___

### y

• **y**: `number` = `0`

记录y偏移

#### Inherited from

[BaseTexture](BaseTexture.md).[y](BaseTexture.md#y)

#### Defined in

[src/core/texture/BaseTexture.ts:12](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/BaseTexture.ts#L12)

## Methods

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/core/texture/TextTexture.ts:133](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/texture/TextTexture.ts#L133)
