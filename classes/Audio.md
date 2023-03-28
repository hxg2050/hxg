# Class: Audio

音频播放
目前已支持mp3格式，理论上也支持其它html支持的格式
声音播放一般是统一控制，包括背景，音效，声音大小，应该播放的声音(可能会多个声音同时播放)
浏览器中用户首次打开页面可能会出现声音无法正常播放，这是浏览器出于用户体验考虑在没有任何交互的情况下禁止了。
此组件提供音频播放能力
```ts
// 创建节点
const node = new Transform();
// 添加音频组件
const audio = node.addComponent(Audio);
// 设置播放音量
audio.volume = 0.5;
// 设置播放速度为2倍
audio.playbackRate = 2.0;
// 加载素材
Resource.load('horse.mp3').then((res: IRes) => {
     // 设置音频素材
     audio.source = res.data;
     // 播放音频
     audio.play();
});
```

## Hierarchy

- [`Component`](Component.md)

  ↳ **`Audio`**

## Table of contents

### Constructors

- [constructor](Audio.md#constructor)

### Properties

- [emitter](Audio.md#emitter)
- [id](Audio.md#id)
- [loop](Audio.md#loop)
- [name](Audio.md#name)
- [node](Audio.md#node)
- [paused](Audio.md#paused)
- [playCount](Audio.md#playcount)
- [Event](Audio.md#event)

### Accessors

- [currentTime](Audio.md#currenttime)
- [duration](Audio.md#duration)
- [playbackRate](Audio.md#playbackrate)
- [source](Audio.md#source)
- [volume](Audio.md#volume)

### Methods

- [addComponent](Audio.md#addcomponent)
- [destroy](Audio.md#destroy)
- [getComponent](Audio.md#getcomponent)
- [getComponents](Audio.md#getcomponents)
- [getComponentsInChildren](Audio.md#getcomponentsinchildren)
- [onDestroy](Audio.md#ondestroy)
- [pause](Audio.md#pause)
- [play](Audio.md#play)
- [removeAllComponent](Audio.md#removeallcomponent)
- [removeComponent](Audio.md#removecomponent)
- [start](Audio.md#start)
- [stop](Audio.md#stop)
- [update](Audio.md#update)

## Constructors

### constructor

• **new Audio**(`transform`)

组件不能单独实例化，必须通过Transform.addComponent创建
```ts
const node = new Transform();
const componet = node.addComponent(Component);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Inherited from

[Component](Component.md).[constructor](Component.md#constructor)

#### Defined in

[src/core/component/Component.ts:37](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L37)

## Properties

### emitter

• **emitter**: `StoreEmitter`<`string`\>

事件处理器

#### Inherited from

[Component](Component.md).[emitter](Component.md#emitter)

#### Defined in

[src/core/component/Component.ts:27](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L27)

___

### id

• **id**: `number`

用于表示组件的唯一标识

#### Inherited from

[Component](Component.md).[id](Component.md#id)

#### Defined in

[src/core/component/Component.ts:12](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L12)

___

### loop

• **loop**: `number` = `0`

循环次数，0：不循环，-1：一直循环

#### Defined in

[src/core/component/Audio.ts:118](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L118)

___

### name

• **name**: `string` = `''`

组件名

#### Inherited from

[Component](Component.md).[name](Component.md#name)

#### Defined in

[src/core/component/Component.ts:17](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L17)

___

### node

• **node**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

组件挂载节点

#### Inherited from

[Component](Component.md).[node](Component.md#node)

#### Defined in

[src/core/component/Component.ts:22](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L22)

___

### paused

• **paused**: `boolean` = `true`

指示媒体元素是否被暂停

#### Defined in

[src/core/component/Audio.ts:151](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L151)

___

### playCount

• **playCount**: `number` = `0`

已经播放了的次数
如果要播放指定次数，需要将此参数重置
```ts

// 创建节点
const node = new Transform();
// 添加音频组件
const audio = node.addComponent(Audio);
// 设置循环播放两次
audio.loop = 2;
// 监听播放完成事件
audio.emitter.on(Audio.Event.ENDED, () => {
     // 重置已播放次数
     audio.playCount = 0;
     // 再次播放
     audio.play();
}, audio);
// 加载素材
Resource.load('horse.mp3').then((res: IRes) => {
     // 设置音频素材
     audio.source = res.data;
     // 播放音频
     audio.play();
});
```

#### Defined in

[src/core/component/Audio.ts:146](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L146)

___

### Event

▪ `Static` **Event**: `Object`

事件

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ENDED` | ``"ended"`` | 音频播放完成 |

#### Defined in

[src/core/component/Audio.ts:32](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L32)

## Accessors

### currentTime

• `get` **currentTime**(): `number`

音频当前播放的时间

#### Returns

`number`

#### Defined in

[src/core/component/Audio.ts:65](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L65)

• `set` **currentTime**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:68](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L68)

___

### duration

• `get` **duration**(): `number`

获取获取音频总时长

#### Returns

`number`

#### Defined in

[src/core/component/Audio.ts:57](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L57)

___

### playbackRate

• `get` **playbackRate**(): `number`

音频播放速度0.25-5.0，不在此范围将被静音，默认值 1.0

#### Returns

`number`

#### Defined in

[src/core/component/Audio.ts:79](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L79)

• `set` **playbackRate**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:82](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L82)

___

### source

• `get` **source**(): `HTMLAudioElement`

#### Returns

`HTMLAudioElement`

#### Defined in

[src/core/component/Audio.ts:111](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L111)

• `set` **source**(`val`): `void`

音频资源

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `HTMLAudioElement` |

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:95](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L95)

___

### volume

• `get` **volume**(): `number`

表示音频的音量。值从 0.0（静音）到 1.0（最大音量）。

#### Returns

`number`

#### Defined in

[src/core/component/Audio.ts:44](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L44)

• `set` **volume**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:47](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L47)

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

[src/core/component/Component.ts:60](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L60)

___

### destroy

▸ **destroy**(): `void`

消毁

#### Returns

`void`

#### Inherited from

[Component](Component.md).[destroy](Component.md#destroy)

#### Defined in

[src/core/component/Component.ts:106](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L106)

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

[src/core/component/Component.ts:83](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L83)

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

[src/core/component/Component.ts:91](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L91)

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

[src/core/component/Component.ts:99](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L99)

___

### onDestroy

▸ **onDestroy**(): `void`

组件被销毁时触发

#### Returns

`void`

#### Inherited from

[Component](Component.md).[onDestroy](Component.md#ondestroy)

#### Defined in

[src/core/component/Component.ts:113](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L113)

___

### pause

▸ **pause**(): `void`

暂停音频

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:164](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L164)

___

### play

▸ **play**(): `void`

播放音频

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:156](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L156)

___

### removeAllComponent

▸ **removeAllComponent**(): `void`

移除所有组件

#### Returns

`void`

#### Inherited from

[Component](Component.md).[removeAllComponent](Component.md#removeallcomponent)

#### Defined in

[src/core/component/Component.ts:75](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L75)

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

[src/core/component/Component.ts:68](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L68)

___

### start

▸ **start**(): `void`

组件被挂载到节点时触发

#### Returns

`void`

#### Inherited from

[Component](Component.md).[start](Component.md#start)

#### Defined in

[src/core/component/Component.ts:45](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L45)

___

### stop

▸ **stop**(): `void`

停止播放
会将播放时间重置到0

#### Returns

`void`

#### Defined in

[src/core/component/Audio.ts:173](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Audio.ts#L173)

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

[Component](Component.md).[update](Component.md#update)

#### Defined in

[src/core/component/Component.ts:52](https://github.com/hxg2050/hxg/blob/2de6870/src/core/component/Component.ts#L52)
