# hxg

## Table of contents

### Namespaces

- [ECS](modules/ECS.md)

### Enumerations

- [TextAlgin](enums/TextAlgin.md)
- [TouchEvent](enums/TouchEvent.md)

### Classes

- [Application](classes/Application.md)
- [Audio](classes/Audio.md)
- [AudioLoader](classes/AudioLoader.md)
- [BaseContainer](classes/BaseContainer.md)
- [BaseTexture](classes/BaseTexture.md)
- [Button](classes/Button.md)
- [Component](classes/Component.md)
- [Container](classes/Container.md)
- [EventSystem](classes/EventSystem.md)
- [GroupLoader](classes/GroupLoader.md)
- [ImageLoader](classes/ImageLoader.md)
- [ImageTexture](classes/ImageTexture.md)
- [JsonLoader](classes/JsonLoader.md)
- [Layout](classes/Layout.md)
- [Matrix](classes/Matrix.md)
- [Renderer](classes/Renderer.md)
- [Resource](classes/Resource.md)
- [Sprite](classes/Sprite.md)
- [Text](classes/Text.md)
- [TextTexture](classes/TextTexture.md)
- [Ticker](classes/Ticker.md)
- [Transform](classes/Transform.md)
- [Vector2](classes/Vector2.md)

### Interfaces

- [IComponent](interfaces/IComponent.md)
- [IContainer](interfaces/IContainer.md)
- [ILoader](interfaces/ILoader.md)

### Type Aliases

- [Constructor](modules.md#constructor)
- [LoadOptions](modules.md#loadoptions)
- [LoadResListConfig](modules.md#loadreslistconfig)
- [Options](modules.md#options)
- [TransformEvent](modules.md#transformevent)

### Variables

- [ticker](modules.md#ticker)

### Functions

- [canvas2d](modules.md#canvas2d)
- [isHitPoint](modules.md#ishitpoint)
- [request](modules.md#request)
- [touchEventListener](modules.md#toucheventlistener)

## Type Aliases

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/core/transform/Transform.ts:6](https://github.com/hxg2050/hxg/blob/2de6870/src/core/transform/Transform.ts#L6)

___

### LoadOptions

Ƭ **LoadOptions**: `Object`

资源加载参数

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `loader?` | [`ILoader`](interfaces/ILoader.md) | 当前资源的独特加载器 |
| `type` | `string` | 类型 |

#### Defined in

[src/core/resource/Resource.ts:19](https://github.com/hxg2050/hxg/blob/2de6870/src/core/resource/Resource.ts#L19)

___

### LoadResListConfig

Ƭ **LoadResListConfig**: (`string` \| [`string`, `string`])[]

资源列表

#### Defined in

[src/core/resource/GroupLoader.ts:6](https://github.com/hxg2050/hxg/blob/2de6870/src/core/resource/GroupLoader.ts#L6)

___

### Options

Ƭ **Options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[src/core/Application.ts:5](https://github.com/hxg2050/hxg/blob/2de6870/src/core/Application.ts#L5)

___

### TransformEvent

Ƭ **TransformEvent**: `EventValue`<typeof [`Event`](classes/Transform.md#event)\> \| \`${TouchEvent}\`

#### Defined in

[src/core/transform/Transform.ts:7](https://github.com/hxg2050/hxg/blob/2de6870/src/core/transform/Transform.ts#L7)

## Variables

### ticker

• `Const` **ticker**: [`Ticker`](classes/Ticker.md)

#### Defined in

[src/core/ticker/Ticker.ts:82](https://github.com/hxg2050/hxg/blob/2de6870/src/core/ticker/Ticker.ts#L82)

## Functions

### canvas2d

▸ **canvas2d**(`canvas`): (`app`: [`Application`](classes/Application.md)) => `void`

canvas2d相关工作

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`fn`

▸ (`app`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`Application`](classes/Application.md) |

##### Returns

`void`

#### Defined in

[src/core/canvas2d/index.ts:10](https://github.com/hxg2050/hxg/blob/2de6870/src/core/canvas2d/index.ts#L10)

___

### isHitPoint

▸ **isHitPoint**(`point`, `transform`): `boolean`

判断点是否落在某个tansform区域
```ts
// 创建节点
const node = new Transform();
// 设置位置
node.position.set(100, 100);
// 设置大小
node.size.set(100, 100);
// 插入到舞台
app.stage.addChild(node);
// 落点判定
const isHit = isHitPoint(node, { x: 150, y: 150 });
console.log('isHit', isHit);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Vector2`](classes/Vector2.md) | 要判断的点 |
| `transform` | [`Transform`](classes/Transform.md)<[`Container`](classes/Container.md)\> | 节点位置信息 |

#### Returns

`boolean`

#### Defined in

[src/core/utils/hitTest.ts:23](https://github.com/hxg2050/hxg/blob/2de6870/src/core/utils/hitTest.ts#L23)

___

### request

▸ **request**(`url`): `Promise`<`XMLHttpRequest`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`XMLHttpRequest`\>

#### Defined in

[src/core/utils/request.ts:1](https://github.com/hxg2050/hxg/blob/2de6870/src/core/utils/request.ts#L1)

___

### touchEventListener

▸ **touchEventListener**(`canvas`): (`app`: [`Application`](classes/Application.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`fn`

▸ (`app`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`Application`](classes/Application.md) |

##### Returns

`void`

#### Defined in

[src/core/event/touchEventListener.ts:39](https://github.com/hxg2050/hxg/blob/2de6870/src/core/event/touchEventListener.ts#L39)
