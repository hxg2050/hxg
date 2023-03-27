# Class: Sprite

图片显示组件
```ts
// 创建一个图片节点
const node = new Transform(Sprite);
// 获取图片组件
const sprite = node.getComponent(Sprite);
// 加载图片资源
Resource.load('1.png').then((res: IRes) => {
     // 设置纹理素材
     sprite.texture = new ImageTexture(res.data);
     // 根据纹理重新设置挂载节点的尺寸
     sprite.resize();
});
```

## Hierarchy

- [`BaseContainer`](BaseContainer.md)

  ↳ **`Sprite`**

## Table of contents

### Constructors

- [constructor](Sprite.md#constructor)

### Properties

- [emitter](Sprite.md#emitter)
- [id](Sprite.md#id)
- [name](Sprite.md#name)
- [node](Sprite.md#node)
- [texture](Sprite.md#texture)

### Methods

- [addComponent](Sprite.md#addcomponent)
- [destroy](Sprite.md#destroy)
- [getComponent](Sprite.md#getcomponent)
- [getComponents](Sprite.md#getcomponents)
- [getComponentsInChildren](Sprite.md#getcomponentsinchildren)
- [onDestroy](Sprite.md#ondestroy)
- [removeAllComponent](Sprite.md#removeallcomponent)
- [removeComponent](Sprite.md#removecomponent)
- [resize](Sprite.md#resize)
- [start](Sprite.md#start)
- [update](Sprite.md#update)

## Constructors

### constructor

• **new Sprite**(`transform`)

显示图片

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> | 挂载的节点 |

#### Overrides

[BaseContainer](BaseContainer.md).[constructor](BaseContainer.md#constructor)

#### Defined in

[src/core/component/Sprite.ts:26](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Sprite.ts#L26)

## Properties

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Inherited from

[BaseContainer](BaseContainer.md).[emitter](BaseContainer.md#emitter)

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Inherited from

[BaseContainer](BaseContainer.md).[id](BaseContainer.md#id)

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L12)

___

### name

• **name**: `string` = `''`

组件名

#### Inherited from

[BaseContainer](BaseContainer.md).[name](BaseContainer.md#name)

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

#### Inherited from

[BaseContainer](BaseContainer.md).[node](BaseContainer.md#node)

#### Defined in

[src/core/component/Component.ts:22](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L22)

___

### texture

• `Optional` **texture**: [`ImageTexture`](ImageTexture.md)

图片纹理，储存图片的相关信息

#### Defined in

[src/core/component/Sprite.ts:33](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Sprite.ts#L33)

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

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[destroy](BaseContainer.md#destroy)

#### Defined in

[src/core/component/Component.ts:106](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L106)

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

[src/core/component/Component.ts:83](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L83)

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

[src/core/component/Component.ts:91](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L91)

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

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L99)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[onDestroy](BaseContainer.md#ondestroy)

#### Defined in

[src/core/component/Component.ts:113](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L113)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Inherited from

[BaseContainer](BaseContainer.md).[removeAllComponent](BaseContainer.md#removeallcomponent)

#### Defined in

[src/core/component/Component.ts:75](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L75)

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

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L68)

___

### resize

▸ **resize**(): `void`

根据当前图片纹理，重置节点尺寸信息
```ts
const node = new Transform(Sprite);
const sprite = node.getComponent(Sprite)!;
sprite.resize();
```

#### Returns

`void`

#### Defined in

[src/core/component/Sprite.ts:47](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Sprite.ts#L47)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Overrides

[BaseContainer](BaseContainer.md).[start](BaseContainer.md#start)

#### Defined in

[src/core/component/Sprite.ts:35](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Sprite.ts#L35)

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

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/component/Component.ts#L52)
