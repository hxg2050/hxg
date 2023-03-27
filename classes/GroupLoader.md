# Class: GroupLoader

资源组加载
```ts
// 创建资源组加载器
const loader = new GroupLoader();
// 设置最大可同时加载4个
loader.workerCount = 4;
// 监听单个资源加载完成事件
loader.emitter.on(GroupLoader.Event.LOADED, ({ count, loaded }) => {
     console.log('资源加载中:', loaded, '/', count);
}, this);
// 监听所有资源加载完成事件
loader.emitter.on(GroupLoader.Event.COMPLATE, () => {
     console.log('资源加载完成');
}, this);
// 设置待加载资源列表
const list: LoadResListConfig = [
     // 只设置路径
     './assets/photo.png',
     // 设置路径加别名
     ['./assets/bmg.mp3', 'bgm_mp3']
];
// 加入待加载列表
loader.add(list);
// 开始加载资源
loader.start();
```

## Table of contents

### Constructors

- [constructor](GroupLoader.md#constructor)

### Properties

- [count](GroupLoader.md#count)
- [emitter](GroupLoader.md#emitter)
- [index](GroupLoader.md#index)
- [list](GroupLoader.md#list)
- [loaded](GroupLoader.md#loaded)
- [workerCount](GroupLoader.md#workercount)
- [Event](GroupLoader.md#event)

### Methods

- [add](GroupLoader.md#add)
- [load](GroupLoader.md#load)
- [start](GroupLoader.md#start)

## Constructors

### constructor

• **new GroupLoader**()

#### Defined in

[src/core/resource/GroupLoader.ts:38](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L38)

## Properties

### count

• **count**: `number` = `0`

资源总数

#### Defined in

[src/core/resource/GroupLoader.ts:57](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L57)

___

### emitter

• **emitter**: `StoreEmitter`<``"loaded"`` \| ``"complate"``\>

#### Defined in

[src/core/resource/GroupLoader.ts:48](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L48)

___

### index

• **index**: `number` = `0`

当前处理的位置

#### Defined in

[src/core/resource/GroupLoader.ts:65](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L65)

___

### list

• **list**: [`LoadResListConfig`](../modules.md#loadreslistconfig) = `[]`

#### Defined in

[src/core/resource/GroupLoader.ts:37](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L37)

___

### loaded

• **loaded**: `number` = `0`

已经加载数量

#### Defined in

[src/core/resource/GroupLoader.ts:61](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L61)

___

### workerCount

• **workerCount**: `number` = `1`

同时加载最大数量

#### Defined in

[src/core/resource/GroupLoader.ts:53](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L53)

___

### Event

▪ `Static` **Event**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `COMPLATE` | ``"complate"`` |
| `LOADED` | ``"loaded"`` |

#### Defined in

[src/core/resource/GroupLoader.ts:41](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L41)

## Methods

### add

▸ **add**(`list`): `void`

添加需要加载的资源
```ts
const list: LoadResListConfig = [
     // 只设置路径
     './assets/photo.png',
     // 设置路径加别名
     ['./assets/bmg.mp3', 'bgm_mp3']
];
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | [`LoadResListConfig`](../modules.md#loadreslistconfig) | 资源列表 |

#### Returns

`void`

#### Defined in

[src/core/resource/GroupLoader.ts:117](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L117)

___

### load

▸ **load**(): `void`

顺序加载资源

#### Returns

`void`

#### Defined in

[src/core/resource/GroupLoader.ts:71](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L71)

___

### start

▸ **start**(): `void`

启动加载

#### Returns

`void`

#### Defined in

[src/core/resource/GroupLoader.ts:99](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/resource/GroupLoader.ts#L99)
