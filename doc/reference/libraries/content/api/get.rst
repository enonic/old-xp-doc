get
===

This function fetches a content.

.. js:function:: get(params)

  :param object params: Input parameters.
  :returns: the content fetched from the repository.

**Parameters:**

key *(string)*
  Path or id to the content.

branch *(string)*
  Set by portal, depending on context, to either ``draft`` or ``master``.
  May be overridden, but this is not recommended. Default is the current
  branch set in portal.

**Example:**

.. literalinclude:: code/get.js
   :language: javascript

**Result:**

.. literalinclude:: code/get-result.json
   :language: json
