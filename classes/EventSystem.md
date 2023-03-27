# Class: EventSystem

用于事件监听
该组件应该是一个全局组件
应该要挂载到跟节点
用于获取和派发全局事件

点击穿透
点击冒泡

## Hierarchy

- `StoreEmitter`

  ↳ **`EventSystem`**

## Table of contents

### Constructors

- [constructor](EventSystem.md#constructor)

### Properties

- [\_data](EventSystem.md#_data)
- [\_on](EventSystem.md#_on)
- [\_once](EventSystem.md#_once)
- [\_remove](EventSystem.md#_remove)
- [point](EventSystem.md#point)
- [transform](EventSystem.md#transform)

### Methods

- [addEvents](EventSystem.md#addevents)
- [change](EventSystem.md#change)
- [data](EventSystem.md#data)
- [emit](EventSystem.md#emit)
- [has](EventSystem.md#has)
- [listen](EventSystem.md#listen)
- [off](EventSystem.md#off)
- [on](EventSystem.md#on)
- [onBeagin](EventSystem.md#onbeagin)
- [onEnd](EventSystem.md#onend)
- [onMove](EventSystem.md#onmove)
- [once](EventSystem.md#once)
- [remove](EventSystem.md#remove)
- [tapEmit](EventSystem.md#tapemit)

## Constructors

### constructor

• **new EventSystem**(`transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |

#### Overrides

Emitter.constructor

#### Defined in

[src/core/system/EventSystem.ts:17](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L17)

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

### point

• **point**: [`Vector2`](Vector2.md)

#### Defined in

[src/core/system/EventSystem.ts:29](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L29)

___

### transform

• **transform**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

#### Defined in

[src/core/system/EventSystem.ts:17](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L17)

## Methods

### addEvents

▸ **addEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/core/system/EventSystem.ts:22](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L22)

___

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

### onBeagin

▸ **onBeagin**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/system/EventSystem.ts:31](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L31)

___

### onEnd

▸ **onEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/system/EventSystem.ts:35](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L35)

___

### onMove

▸ **onMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/core/system/EventSystem.ts:39](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L39)

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

### tapEmit

▸ **tapEmit**(`transform`, `eventName`): `boolean`

发送点击事件到正确的节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](Transform.md)<[`Container`](Container.md)\> |
| `eventName` | [`TouchEvent`](../enums/TouchEvent.md) |

#### Returns

`boolean`

#### Defined in

[src/core/system/EventSystem.ts:59](https://github.com/hxg2050/hxg/blob/c8b326a/src/core/system/EventSystem.ts#L59)
