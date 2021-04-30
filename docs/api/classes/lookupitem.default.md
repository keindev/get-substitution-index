# Class: default<T\>

[LookupItem](../modules/lookupitem.md).default

Main parameters of the string, including its position in the text

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* **default**

  ↳ [*default*](lookupgroup.default.md)

## Table of contents

### Constructors

- [constructor](lookupitem.default.md#constructor)

### Properties

- [end](lookupitem.default.md#end)
- [info](lookupitem.default.md#info)
- [start](lookupitem.default.md#start)
- [value](lookupitem.default.md#value)

### Methods

- [isCross](lookupitem.default.md#iscross)
- [isIncludedIn](lookupitem.default.md#isincludedin)

## Constructors

### constructor

\+ **new default**<T\>(`value`: *string*, `position`: *number*, `info?`: T): [*default*](lookupitem.default.md)<T\>

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | *string* | string value |
| `position` | *number* | position in text |
| `info?` | T | - |

**Returns:** [*default*](lookupitem.default.md)<T\>

## Properties

### end

• `Readonly` **end**: *number*

String end position index

___

### info

• `Readonly` **info**: *undefined* \| T

External info

___

### start

• `Readonly` **start**: *number*

String start position index

___

### value

• `Readonly` **value**: *string*

String value

## Methods

### isCross

▸ **isCross**(`item`: [*default*](lookupitem.default.md)<T\>): *boolean*

Checks if positions is cross

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [*default*](lookupitem.default.md)<T\> | object to compare |

**Returns:** *boolean*

___

### isIncludedIn

▸ **isIncludedIn**(`item`: [*default*](lookupitem.default.md)<T\>): *boolean*

Checks if the given string is part of the current string

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [*default*](lookupitem.default.md)<T\> | object to compare |

**Returns:** *boolean*
