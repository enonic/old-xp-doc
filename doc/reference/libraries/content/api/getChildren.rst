getChildren
===========

This function fetches children of a content.

.. js:function:: getChildren(params)

  :param object params: Input parameters.
  :returns: the content fetched from the repository.

**Parameters:**

key *(string)*
  Path or id to the parent content.

start *(integer)*
  Start index (used for paging).  Default is 0.

count *(integer)*
  Number of contents to fetch.  Default is 10.

sort *(string)*
  Sorting expression.

branch *(string)*
  Set by portal, depending on context, to either "draft" or "master". May be overridden, but this is not recommended.
  Default is the current branch set in portal.

**Example:**

.. literalinclude:: code/getChildren.js
   :language: javascript

**Result:**

.. literalinclude:: code/getChildren-result.json
   :language: json
