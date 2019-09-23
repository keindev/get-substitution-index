
# Class: LookupManager <**T**>

Manager for working with an array of strings

## Type parameters

▪ **T**

## Hierarchy

* **LookupManager**

## Index

### Methods

* [add](lookupmanager.md#add)
* [clear](lookupmanager.md#clear)
* [getList](lookupmanager.md#getlist)
* [replaceIn](lookupmanager.md#replacein)

## Methods

###  add

▸ **add**(`value`: string, `position`: number, `info?`: [T](undefined)): *void*

Adds a new string to the list based on the position in the text:
-   in the case of intersection of strings positions, the strings are merged
-   if a new string extends an existing one, it will replace it
-   if a new string is part of an existing string, it will not be added

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string to add |
`position` | number | position in text  |
`info?` | [T](undefined) | - |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

Clears a string list

**Returns:** *void*

___

###  getList

▸ **getList**(): *[LookupItem](lookupitem.md)‹T›[]*

Returns a list of added rows

**Returns:** *[LookupItem](lookupitem.md)‹T›[]*

___

###  replaceIn

▸ **replaceIn**(`text`: string, `wrap`: function): *string*

Replace strings in the text at the specified position, calling the conversion function for each replacement

**Parameters:**

▪ **text**: *string*

text for replace

▪ **wrap**: *function*

▸ (`item`: [LookupItem](lookupitem.md)‹T›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [LookupItem](lookupitem.md)‹T› |

**Returns:** *string*
