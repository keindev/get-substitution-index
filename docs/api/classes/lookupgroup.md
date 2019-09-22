
# Class: LookupGroup

Group of strings whose positions is cross

## Hierarchy

* [LookupItem](lookupitem.md)

  ↳ **LookupGroup**

## Index

### Constructors

* [constructor](lookupgroup.md#constructor)

### Properties

* [end](lookupgroup.md#end)
* [group](lookupgroup.md#group)
* [start](lookupgroup.md#start)
* [value](lookupgroup.md#value)

### Methods

* [isCross](lookupgroup.md#iscross)
* [isIncludedIn](lookupgroup.md#isincludedin)

## Constructors

###  constructor

\+ **new LookupGroup**(`a`: [LookupItem](lookupitem.md), `b`: [LookupItem](lookupitem.md)): *[LookupGroup](lookupgroup.md)*

*Overrides [LookupItem](lookupitem.md).[constructor](lookupitem.md#constructor)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [LookupItem](lookupitem.md) | string with the min starting position index |
`b` | [LookupItem](lookupitem.md) | string with the max ending position index  |

**Returns:** *[LookupGroup](lookupgroup.md)*

## Properties

###  end

• **end**: *number*

*Inherited from [LookupItem](lookupitem.md).[end](lookupitem.md#end)*

String end position index

___

###  group

• **group**: *[[LookupItem](lookupitem.md), [LookupItem](lookupitem.md)]*

List of string whose positions is crossed

___

###  start

• **start**: *number*

*Inherited from [LookupItem](lookupitem.md).[start](lookupitem.md#start)*

String start position index

___

###  value

• **value**: *string*

*Inherited from [LookupItem](lookupitem.md).[value](lookupitem.md#value)*

String value

## Methods

###  isCross

▸ **isCross**(`item`: [LookupItem](lookupitem.md)): *boolean*

*Inherited from [LookupItem](lookupitem.md).[isCross](lookupitem.md#iscross)*

Checks if positions is cross

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [LookupItem](lookupitem.md) | object to compare  |

**Returns:** *boolean*

___

###  isIncludedIn

▸ **isIncludedIn**(`item`: [LookupItem](lookupitem.md)): *boolean*

*Inherited from [LookupItem](lookupitem.md).[isIncludedIn](lookupitem.md#isincludedin)*

Checks if the given string is part of the current string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [LookupItem](lookupitem.md) | object to compare  |

**Returns:** *boolean*
