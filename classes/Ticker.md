# Class: Ticker

刷新器

## Hierarchy

- `StoreEmitter`

  ↳ **`Ticker`**

## Table of contents

### Constructors

- [constructor](Ticker.md#constructor)

### Properties

- [\_data](Ticker.md#_data)
- [\_on](Ticker.md#_on)
- [\_once](Ticker.md#_once)
- [\_remove](Ticker.md#_remove)
- [\_stepTime](Ticker.md#_steptime)
- [deltaTime](Ticker.md#deltatime)
- [lastTime](Ticker.md#lasttime)

### Accessors

- [FPS](Ticker.md#fps)

### Methods

- [change](Ticker.md#change)
- [data](Ticker.md#data)
- [destroy](Ticker.md#destroy)
- [emit](Ticker.md#emit)
- [has](Ticker.md#has)
- [listen](Ticker.md#listen)
- [off](Ticker.md#off)
- [on](Ticker.md#on)
- [once](Ticker.md#once)
- [remove](Ticker.md#remove)
- [start](Ticker.md#start)
- [stop](Ticker.md#stop)
- [update](Ticker.md#update)

## Constructors

### constructor

• **new Ticker**()

#### Inherited from

Emitter.constructor

## Properties

### \_data

• `Protected` **\_data**: `Object`

#### Index signature

▪ [props: `string`]: `any`

#### Inherited from

Emitter.\_data

#### Defined in

node_modules/store-event/dist/index.d.ts:45

___

### \_on

• `Protected` **\_on**: `EmitterKeyValue`

#### Inherited from

Emitter.\_on

#### Defined in

node_modules/store-event/dist/index.d.ts:44

___

### \_once

• `Protected` **\_once**: `EmitterKeyValue`

#### Inherited from

Emitter.\_once

#### Defined in

node_modules/store-event/dist/index.d.ts:48

___

### \_remove

• `Protected` **\_remove**: `never`[]

#### Inherited from

Emitter.\_remove

#### Defined in

node_modules/store-event/dist/index.d.ts:49

___

### \_stepTime

• **\_stepTime**: `number`

#### Defined in

[src/core/ticker/Ticker.ts:27](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L27)

___

### deltaTime

• **deltaTime**: `number` = `1`

上一帧和当前帧间隔时间 ms

#### Defined in

[src/core/ticker/Ticker.ts:46](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L46)

___

### lastTime

• **lastTime**: `number` = `0`

记录上一帧的时间

#### Defined in

[src/core/ticker/Ticker.ts:25](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L25)

## Accessors

### FPS

• `get` **FPS**(): `number`

每秒帧数
最大帧数不会超过浏览器刷新率
默认每秒60帧

#### Returns

`number`

#### Defined in

[src/core/ticker/Ticker.ts:14](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L14)

• `set` **FPS**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[src/core/ticker/Ticker.ts:17](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L17)

## Methods

### change

▸ **change**(`name`, `callback`, `target`): `void`

监听数据变动（第一次有数据）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 数据名 |
| `callback` | `Function` | 触发函数 |
| `target` | `any` | 触发函数作用域 |

#### Returns

`void`

#### Inherited from

Emitter.change

#### Defined in

node_modules/store-event/dist/index.d.ts:83

___

### data

▸ **data**(`name`): `any`

获取数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 数据名 |

#### Returns

`any`

#### Inherited from

Emitter.data

#### Defined in

node_modules/store-event/dist/index.d.ts:88

▸ **data**(`name`, `value`): `any`

设置数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 数据名 |
| `value` | `any` | 数据 |

#### Returns

`any`

#### Inherited from

Emitter.data

#### Defined in

node_modules/store-event/dist/index.d.ts:94

▸ **data**(`name`, `callback`): `any`

设置数据，当数据结构比较复杂，而只是单独改变其中一小部分时可以使用传入一个数据处理函数进行数据设置
```ts
// 创建状态管理器
const store = new Emitter();
// 监听 userinfo 数据变动
store.listen('userinfo', ({ name, source }) => {
     console.log(name, '的积分变为为：', source);
}, this)
// 设置数据
store.data('userinfo', {
     name: 'youxia',
     source: 100,
     photo: 'abc.png'
});
// 修改数据
store.data('userinfo', (data: any) => {
     // 只修改 source
     data.source ++;
     // 返回最新的数据
     return data;
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 数据名 |
| `callback` | (`data`: `any`) => `any` | 设置函数 |

#### Returns

`any`

#### Inherited from

Emitter.data

#### Defined in

node_modules/store-event/dist/index.d.ts:121

___

### destroy

▸ **destroy**(): `void`

销毁

#### Returns

`void`

#### Defined in

[src/core/ticker/Ticker.ts:77](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L77)

___

### emit

▸ **emit**(`name`, `value?`): `void`

发射事件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 事件名 |
| `value?` | `any` | 数据 |

#### Returns

`void`

#### Inherited from

Emitter.emit

#### Defined in

node_modules/store-event/dist/index.d.ts:127

___

### has

▸ **has**(`name`): `boolean`

检查数据是否定义

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 数据名 |

#### Returns

`boolean`

#### Inherited from

Emitter.has

#### Defined in

node_modules/store-event/dist/index.d.ts:150

___

### listen

▸ **listen**(`name`, `callback`, `target`): `void`

监听数据变动

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 数据名 |
| `callback` | `Function` | 触发函数 |
| `target` | `any` | 触发函数作用域 |

#### Returns

`void`

#### Inherited from

Emitter.listen

#### Defined in

node_modules/store-event/dist/index.d.ts:76

___

### off

▸ **off**(`name`, `callback`, `target`): `void`

移除事件/数据监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 事件名 |
| `callback` | `Function` | 触发函数 |
| `target` | `any` | 作用域 |

#### Returns

`void`

#### Inherited from

Emitter.off

#### Defined in

node_modules/store-event/dist/index.d.ts:134

___

### on

▸ **on**(`name`, `callback`, `target?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 事件名 |
| `callback` | `Function` | 触发函数 |
| `target?` | `any` | 触发函数作用域 |

#### Returns

`void`

#### Inherited from

Emitter.on

#### Defined in

node_modules/store-event/dist/index.d.ts:69

___

### once

▸ **once**(`name`, `callback`, `target`): `void`

监听一次
```ts
const emitter = new Emitter();
emitter.once('eventName', () => {
     console.log('只会触发一次');
}, this);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 事件名 |
| `callback` | `Function` | 触发函数 |
| `target` | `any` | - |

#### Returns

`void`

#### Inherited from

Emitter.once

#### Defined in

node_modules/store-event/dist/index.d.ts:62

___

### remove

▸ **remove**(`name`, `callback`, `target`): `void`

移除事件/数据监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 事件名 |
| `callback` | `Function` | 触发函数 |
| `target` | `any` | 作用域 |

#### Returns

`void`

#### Inherited from

Emitter.remove

#### Defined in

node_modules/store-event/dist/index.d.ts:144

___

### start

▸ **start**(): `void`

开始

#### Returns

`void`

#### Defined in

[src/core/ticker/Ticker.ts:32](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L32)

___

### stop

▸ **stop**(): `void`

暂停

#### Returns

`void`

#### Defined in

[src/core/ticker/Ticker.ts:70](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L70)

___

### update

▸ **update**(`time`): `void`

每次刷新要执行的内容

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/core/ticker/Ticker.ts:51](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/ticker/Ticker.ts#L51)
