
# Class: LookupManager

Manager for working with an array of strings

## Hierarchy

* **LookupManager**

## Index

### Methods

* [add](lookupmanager.md#add)
* [clear](lookupmanager.md#clear)
* [getItems](lookupmanager.md#getitems)

## Methods

###  add

▸ **add**(`value`: string, `position`: number): *void*

Adds a new string to the list based on the position in the text:
-   in the case of intersection of strings positions, the strings are merged
-   if a new string extends an existing one, it will replace it
-   if a new string is part of an existing string, it will not be added

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string to add |
`position` | number | position in text  |

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

Clears a string list

**Returns:** *void*

___

###  getItems

▸ **getItems**(): *[LookupItem](lookupitem.md)[]*

Returns a list of added rows

**Returns:** *[LookupItem](lookupitem.md)[]*
