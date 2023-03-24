# Class: Application

应用
```ts
// 方式一
const app = new Applaction({
     width: 500,
     height: 500
});
```
```ts
// 方式二
const app = Applaction.run({
     width: 500,
     height: 500
});
```

## Table of contents

### Constructors

- [constructor](Application.md#constructor)

### Properties

- [config](Application.md#config)
- [eventSystem](Application.md#eventsystem)
- [stage](Application.md#stage)

### Methods

- [use](Application.md#use)
- [run](Application.md#run)

## Constructors

### constructor

• **new Application**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Defined in

[src/core/Application.ts:43](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/Application.ts#L43)

## Properties

### config

• **config**: [`Options`](../modules.md#options)

#### Defined in

[src/core/Application.ts:28](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/Application.ts#L28)

___

### eventSystem

• **eventSystem**: [`EventSystem`](EventSystem.md)

全局事件处理器

#### Defined in

[src/core/Application.ts:41](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/Application.ts#L41)

___

### stage

• **stage**: [`Transform`](Transform.md)<[`Container`](Container.md)\>

舞台，根节点

#### Defined in

[src/core/Application.ts:36](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/Application.ts#L36)

## Methods

### use

▸ **use**(`install`): [`Application`](Application.md)

插件拓展
可注入到app

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `install` | (`app`: [`Application`](Application.md)) => `void` | 插件入口函数 |

#### Returns

[`Application`](Application.md)

#### Defined in

[src/core/Application.ts:70](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/Application.ts#L70)

___

### run

▸ `Static` **run**(`config?`): [`Application`](Application.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`Options`](../modules.md#options)\> |

#### Returns

[`Application`](Application.md)

#### Defined in

[src/core/Application.ts:75](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/Application.ts#L75)
