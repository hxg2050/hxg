# Class: Resource

资源管理和加载
默认提供了几个常用的加载器
```ts
Resource.load('photo.png');
```

## Table of contents

### Constructors

- [constructor](Resource.md#constructor)

### Properties

- [listGroup](Resource.md#listgroup)
- [cache](Resource.md#cache)
- [loader](Resource.md#loader)
- [nameCache](Resource.md#namecache)

### Methods

- [get](Resource.md#get)
- [getLoader](Resource.md#getloader)
- [load](Resource.md#load)
- [loadGroup](Resource.md#loadgroup)
- [set](Resource.md#set)
- [setLoader](Resource.md#setloader)

## Constructors

### constructor

• **new Resource**()

## Properties

### listGroup

• **listGroup**: `string`[] \| [`string`, `string`] = `[]`

#### Defined in

[src/core/resource/Resource.ts:124](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L124)

___

### cache

▪ `Static` **cache**: `Object` = `{}`

所有缓存资源

#### Index signature

▪ [props: `string`]: `IRes`

#### Defined in

[src/core/resource/Resource.ts:47](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L47)

___

### loader

▪ `Static` **loader**: `LoaderType` = `{}`

所有加载器

#### Defined in

[src/core/resource/Resource.ts:42](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L42)

___

### nameCache

▪ `Static` **nameCache**: `Object` = `{}`

资源别名缓存

#### Index signature

▪ [props: `string`]: `string`

#### Defined in

[src/core/resource/Resource.ts:52](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L52)

## Methods

### get

▸ `Static` **get**(`name`): `IRes`

根据配置的名称获取资源

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`IRes`

#### Defined in

[src/core/resource/Resource.ts:102](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L102)

___

### getLoader

▸ `Static` **getLoader**(`type`): [`ILoader`](../interfaces/ILoader.md)

获取加载器

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | 根据类型获取加载器 |

#### Returns

[`ILoader`](../interfaces/ILoader.md)

#### Defined in

[src/core/resource/Resource.ts:143](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L143)

___

### load

▸ `Static` **load**(`source`, `options?`): `Promise`<`IRes`\>

加载资源

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | 资源路径 |
| `options?` | [`LoadOptions`](../modules.md#loadoptions) | 配置 |

#### Returns

`Promise`<`IRes`\>

#### Defined in

[src/core/resource/Resource.ts:69](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L69)

___

### loadGroup

▸ `Static` **loadGroup**(`list`, `worker?`): `StoreEmitter`<``"loaded"`` \| ``"complate"``\>

加载一组资源

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `list` | [`LoadResListConfig`](../modules.md#loadreslistconfig) | `undefined` | 要加载的资源列表 |
| `worker` | `number` | `1` | 最大同时加载数量，最小为1 |

#### Returns

`StoreEmitter`<``"loaded"`` \| ``"complate"``\>

#### Defined in

[src/core/resource/Resource.ts:131](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L131)

___

### set

▸ `Static` **set**(`name`, `url`): `boolean`

配置资源别名

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 别名 |
| `url` | `string` | 资源url |

#### Returns

`boolean`

#### Defined in

[src/core/resource/Resource.ts:115](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L115)

___

### setLoader

▸ `Static` **setLoader**(`type`, `loader`): `void`

添加/修改一个loader加载器

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | 类型 |
| `loader` | [`ILoader`](../interfaces/ILoader.md) | 加载器 |

#### Returns

`void`

#### Defined in

[src/core/resource/Resource.ts:59](https://github.com/hxg2050/hxg/blob/6aa982d/src/core/resource/Resource.ts#L59)
