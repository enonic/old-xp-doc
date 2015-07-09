query
=====

This command queries content.  See :ref:`query-language` for details.

.. js:function:: query(params)

  :param object params: Input parameters.
  :returns: the content found as JSON.

**Parameters:**

start *(integer)*
  Start index (used for paging).  Default is 0.

count *(integer)*
  Number of contents to fetch.  Default is 10.

query *(string)*
  Query expression.

sort *(string)*
  Sorting expression.

aggregations *(object)*
  Aggregations expression.

contentTypes *(string[])*
  Content types to filter on.

branch *(string)*
  Set by portal, depending on context, to either "draft" or "master". May be overridden,
  but this is not recommended. Default is the current branch set in portal.

**Example:**

.. literalinclude:: code/query.js
  :language: javascript

**Result:**

.. literalinclude:: code/query-result.json
  :language: json
