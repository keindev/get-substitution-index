# Class: LookupManager<T\>

[LookupManager](../modules/lookupmanager.md).LookupManager

Manager for working with an array of strings

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](lookupmanager.lookupmanager-1.md#constructor)

### Accessors

- [items](lookupmanager.lookupmanager-1.md#items)

### Methods

- [add](lookupmanager.lookupmanager-1.md#add)
- [clear](lookupmanager.lookupmanager-1.md#clear)
- [replace](lookupmanager.lookupmanager-1.md#replace)

## Constructors

### constructor

\+ **new LookupManager**<T\>(): [*LookupManager*](lookupmanager.lookupmanager-1.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

**Returns:** [*LookupManager*](lookupmanager.lookupmanager-1.md)<T\>

## Accessors

### items

• get **items**(): [*default*](lookupitem.default.md)<T\>[]

Returns a list of added rows

**Returns:** [*default*](lookupitem.default.md)<T\>[]

## Methods

### add

▸ **add**(`value`: *string*, `position`: *number*, `info?`: T): *void*

Adds a new string to the list based on the position in the text:
-   in the case of intersection of strings positions, the strings are merged
-   if a new string extends an existing one, it will replace it
-   if a new string is part of an existing string, it will not be added

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | *string* | string to add |
| `position` | *number* | position in text |
| `info?` | T | - |

**Returns:** *void*

___

### clear

▸ **clear**(): *void*

Clears a string list

**Returns:** *void*

___

### replace

▸ **replace**(`text`: *string*, `wrap`: (`item`: [*default*](lookupitem.default.md)<T\>) => *string*): *string*

Replace strings in the text at the specified position, calling the conversion function for each replacement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | *string* | the text in which the string will be replaced |
| `wrap` | (`item`: [*default*](lookupitem.default.md)<T\>) => *string* | - |

**Returns:** *string*
