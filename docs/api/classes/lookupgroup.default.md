# Class: default<T\>

[LookupGroup](../modules/lookupgroup.md).default

Group of strings whose positions is cross

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [*default*](lookupitem.default.md)<T\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](lookupgroup.default.md#constructor)

### Properties

- [end](lookupgroup.default.md#end)
- [group](lookupgroup.default.md#group)
- [info](lookupgroup.default.md#info)
- [start](lookupgroup.default.md#start)
- [value](lookupgroup.default.md#value)

### Methods

- [isCross](lookupgroup.default.md#iscross)
- [isIncludedIn](lookupgroup.default.md#isincludedin)

## Constructors

### constructor

\+ **new default**<T\>(`a`: [*default*](lookupitem.default.md)<T\>, `b`: [*default*](lookupitem.default.md)<T\>): [*default*](lookupgroup.default.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [*default*](lookupitem.default.md)<T\> | string with the min starting position index |
| `b` | [*default*](lookupitem.default.md)<T\> | string with the max ending position index |

**Returns:** [*default*](lookupgroup.default.md)<T\>

Overrides: [default](lookupitem.default.md)

## Properties

### end

• `Readonly` **end**: *number*

String end position index

Inherited from: [default](lookupitem.default.md).[end](lookupitem.default.md#end)

___

### group

• `Readonly` **group**: [[*default*](lookupitem.default.md)<T\>, [*default*](lookupitem.default.md)<T\>]

List of string whose positions is crossed

___

### info

• `Readonly` **info**: *undefined* \| T

External info

Inherited from: [default](lookupitem.default.md).[info](lookupitem.default.md#info)

___

### start

• `Readonly` **start**: *number*

String start position index

Inherited from: [default](lookupitem.default.md).[start](lookupitem.default.md#start)

___

### value

• `Readonly` **value**: *string*

String value

Inherited from: [default](lookupitem.default.md).[value](lookupitem.default.md#value)

## Methods

### isCross

▸ **isCross**(`item`: [*default*](lookupitem.default.md)<T\>): *boolean*

Checks if positions is cross

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [*default*](lookupitem.default.md)<T\> | object to compare |

**Returns:** *boolean*

Inherited from: [default](lookupitem.default.md)

___

### isIncludedIn

▸ **isIncludedIn**(`item`: [*default*](lookupitem.default.md)<T\>): *boolean*

Checks if the given string is part of the current string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [*default*](lookupitem.default.md)<T\> | object to compare |

**Returns:** *boolean*

Inherited from: [default](lookupitem.default.md)
