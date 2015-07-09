pageUrl
=======

This function generates a URL pointing to a page.

.. js:function:: pageUrl(params)

  :param object params: Input parameters.
  :returns: the generated URL.

**Parameters:**

id *(string)*
  Id to the page. If id is set, then path is not used.

path *(string)*
  Path to the page. Relative paths is resolved using the context page.

params *(object)*
  Custom parameters to append to the url.

**Example:**

.. literalinclude:: code/pageUrl.js
  :language: javascript
