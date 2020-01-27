
# Class: LookupItem <**T**>

Main parameters of the string, including its position in the text

## Type parameters

▪ **T**

## Hierarchy

* **LookupItem**

  ↳ [LookupGroup](lookupgroup.md)

## Index

### Constructors

* [constructor](lookupitem.md#constructor)

### Properties

* [end](lookupitem.md#end)
* [info](lookupitem.md#info)
* [start](lookupitem.md#start)
* [value](lookupitem.md#value)

### Methods

* [isCross](lookupitem.md#iscross)
* [isIncludedIn](lookupitem.md#isincludedin)

## Constructors

###  constructor

\+ **new LookupItem**(`value`: string, `position`: number, `info?`: T): *[LookupItem](lookupitem.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | string value |
`position` | number | position in text  |
`info?` | T | - |

**Returns:** *[LookupItem](lookupitem.md)*

## Properties

###  end

• **end**: *number*

String end position index

___

###  info

• **info**: *T | undefined*

External info

___

###  start

• **start**: *number*

String start position index

___

###  value

• **value**: *string*

String value

## Methods

###  isCross

▸ **isCross**(`item`: [LookupItem](lookupitem.md)‹T›): *boolean*

Checks if positions is cross

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [LookupItem](lookupitem.md)‹T› | object to compare  |

**Returns:** *boolean*

___

###  isIncludedIn

▸ **isIncludedIn**(`item`: [LookupItem](lookupitem.md)‹T›): *boolean*

Checks if the given string is part of the current string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | [LookupItem](lookupitem.md)‹T› | object to compare  |

**Returns:** *boolean*
