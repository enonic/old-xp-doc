modify
======

This function modifies a content.

.. js:function:: modify(params)

  :param object params: JSON with the parameters below.
  :returns: the modified content as JSON.

**Parameters:**

key *(string)*
  Path or id to the content.

editor *(function)*
  Editor callback function.

branch *(string)*
  Set by portal, depending on context, to either "draft" or "master". May be overridden, but this is not recommended.
  Default is the current branch set in portal.

**Example:**

.. literalinclude:: code/modify.js
  :language: javascript

**Result:**

.. literalinclude:: code/modify-result.json
  :language: json
