localize
========

This function localizes a phrase.

.. js:function:: localize(params)

  :param object params: JSON with the parameters below.
  :returns: the localized string.

**Parameters:**

key *(string)*
  The property key.

locale *(string)*
  A string-representation of a locale. If the locale is not set, the
  site language is used.

values *(string[])*
  Optional placeholder values.

**Example:**

.. literalinclude:: code/localize.js
   :language: javascript
